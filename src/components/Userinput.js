import React from "react";
import globals from "../utils/globals";

const Userinput = (props) => {
  let input;
  return (
    <section className="user-input">
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            props.dispatch(input.value, globals.getUserInfo().username);
          }
        }}
        type="text"
        placeholder="Default Name"
        ref={(node) => {
          input = node;
        }}
        name="username"
        autoComplete="off"
      />
    </section>
  );
};

export default Userinput;
