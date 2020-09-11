import React from "react";
import Message from "./Message";

const MessagesList = ({ messages }) => (
  <section id="messages-list">
    <ul>
      {messages.map((message) => {
        return <Message key={message.id} {...message}></Message>;
      })}
    </ul>
  </section>
);

export default MessagesList;
