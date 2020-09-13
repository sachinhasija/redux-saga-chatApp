import { connect } from "react-redux";
import UserinputComponent from "../components/Userinput";
import { setUserInfoAction } from "../actions";

const mapDispatchToProps = (dispatch) => ({
  dispatch: (username, defaultName) => {
    dispatch(setUserInfoAction(username, defaultName));
  },
});

const mapStateToProps = () => ({});

export const Userinput = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserinputComponent);
