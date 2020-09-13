import React from "react";
import randomizeIT from "../utils/randomize";

const colorArr = ["one", "two", "three", "four", "five", "six"];

const Sidebar = ({ users }) => (
  <aside className="sidebar">
    <section>
      <h1>CONNECTED USERS</h1>
      <ul>
        {users.map((user) => {
          let randomized = randomizeIT(7);
          return (
            <li key={user.id}>
              <section className={"userBg userBg-" + colorArr[randomized]}>
                <p>{user.tag}</p>
              </section>
              <section>{user.name}</section>
            </li>
          );
        })}
      </ul>
    </section>
  </aside>
);

export default Sidebar;
