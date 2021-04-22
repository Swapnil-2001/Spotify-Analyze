import React from "react";
import { motion } from "framer-motion";
import { connect } from "react-redux";
import { setModal } from "../../actions/result";
import "./Modal.css";

const Modal = (props) => {
  const { modal, dispatch } = props;
  function handleClick(e) {
    if (e.target.classList.contains("backdrop")) {
      dispatch(setModal(""));
    }
  }
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="backdrop"
      onClick={handleClick}
    >
      <div className="modal__text">{modal}</div>
    </motion.div>
  );
};

const mapStateToProps = (state) => {
  return {
    modal: state.modal,
  };
};

export default connect(mapStateToProps)(Modal);
