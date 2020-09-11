import { connect } from "react-redux";
import SideBarComponent from "../components/Sidebar";

const mapDispatchToProps = () => ({});

const mapStateToProps = (state) => ({
  users: state.users,
});

export const Sidebar = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarComponent);
