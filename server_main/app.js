const WebSocket = require("ws");
const wss = new WebSocket.Server({ port: 8989 });
const users = [];

const broadcast = (data, ws) => {
  wss.clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN && client != ws) {
      client.send(JSON.stringify(data));
    }
  });
};

wss.on("connection", (ws) => {
  let index;
  ws.on("message", (message) => {
    const data = JSON.parse(message);
    switch (data.type) {
      case "ADD_USER": {
        index = users.length;
        users.push({ id: index, name: data.name });
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
    users.splice(index, 1);
    broadcast(
      {
        type: "USERS_LIST",
        users,
      },
      ws
    );
  });
});
