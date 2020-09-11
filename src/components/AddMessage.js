import React from "react";
import { addMessage } from "../actions/index";

const AddMessage = (props) => {
  let input;
  return (
    <section id="newMessage">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") props.dispatch(addMessage(input.value, "Me"));
          input.value = "";
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
      />
    </section>
  );
};

export default AddMessage;
