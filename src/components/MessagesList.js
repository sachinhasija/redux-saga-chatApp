import React from "react";
import Message from "./Message";

const MessagesList = ({ messages }) => (
  <section className="messages-list">
    <h1>MESSAGES</h1>
    <ul>
      {messages.map((message) => {
        return <Message key={message.id} {...message}></Message>;
      })}
    </ul>
  </section>
);

export default MessagesList;
