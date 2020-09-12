import React from "react";

const Sidebar = ({ users }) => (
  <aside className="sidebar">
    <section>
      <h3>Connected Users</h3>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <section className="userBg">
              <p>{user.tag}</p>
            </section>
            <section>{user.name}</section>
          </li>
        ))}
      </ul>
    </section>
  </aside>
);

export default Sidebar;
