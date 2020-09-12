const WebSocket = require("ws");
const randomID = require("./utils/randomID");
const wss = new WebSocket.Server({ port: 8989 });
let users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client != ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (ws) => {
  let userID;
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case "ADD_USER": {
        userID = randomID.makeid();
        users.push({ id: userID, name: data.name, tag: data.tag });

        ws.send(
          JSON.stringify({
            type: "USERS_LIST",
            users,
          })
        );
        broadcast(
          {
            type: "USERS_LIST",
            users,
          },
          ws
        );
        break;
      }
      case "ADD_MESSAGE": {
        broadcast(
          {
            type: "ADD_MESSAGE",
            author: data.author,
            message: data.message,
          },
          ws
        );
        break;
      }
      default:
        break;
    }
  });

  ws.on("close", () => {
    users = users.filter((u) => {
      return u.id != userID;
    });
    broadcast(
      {
        type: "USERS_LIST",
        users,
      },
      ws
    );
  });
});
