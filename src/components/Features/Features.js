import React from "react";
import { connect } from "react-redux";

const Features = (props) => {
  const { features } = props;
  console.log(features);
  return <div>Features Page</div>;
};

const mapStateToProps = (state) => {
  return {
    features: state.features,
  };
};

export default connect(mapStateToProps)(Features);
