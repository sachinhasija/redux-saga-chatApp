import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./containers/SideBar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section className="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
  }
}

export default App;
