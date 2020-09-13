import React from "react";

const AddMessage = (props) => {
  let input;
  return (
    <section className="new-message user-input">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.dispatch(input.value, "Me");
            input.value = "";
          }
        }}
        type="text"
        ref={(node) => {
          input = node;
        }}
        name="message"
        placeholder="Send a message"
        autoComplete="off"
      />
    </section>
  );
};

export default AddMessage;
