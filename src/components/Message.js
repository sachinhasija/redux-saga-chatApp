import React from "react";

const Message = ({ message, author }) => (
  <section className="messages">
    <h3>
      <p>{author}</p>
      <p>-</p>
    </h3>
    <p>{message}</p>
  </section>
);

export default Message;
