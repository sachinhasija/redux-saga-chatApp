import React from "react";

const AddMessage = (props) => {
  let input;
  return (
    <section className="new-message">
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
      />
    </section>
  );
};

export default AddMessage;
