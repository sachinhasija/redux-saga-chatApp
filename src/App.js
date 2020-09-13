import React, { Component } from "react";
import "./App.css";
import { Sidebar } from "./containers/SideBar";
import { MessagesList } from "./containers/MessagesList";
import { AddMessage } from "./containers/AddMessage";
import { Userinput } from "./containers/Userinput";

class App extends Component {
  render() {
    return (
      <div className="container">
        <Sidebar />
        <section className="main-container">
          <section className="main">
            <MessagesList />
          </section>
          <section className="userInputMain">
            <AddMessage />
            <Userinput />
          </section>
        </section>
      </div>
    );
  }
}

export default App;
