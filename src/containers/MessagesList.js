import { connect } from "react-redux";
import MessagesListComponent from "../components/MessagesList";

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  messages: state.messages,
});

export const MessagesList = connect(
  mapStateToProps,
  mapDispatchToProps
)(MessagesListComponent);
