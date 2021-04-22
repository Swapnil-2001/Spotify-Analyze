import React from "react";
import { connect } from "react-redux";
import mapping from "../../utils/descriptions";
import { setModal } from "../../actions/result";
import Modal from "../Modal/Modal";

const Features = (props) => {
  const { modal, features, dispatch } = props;
  const feats = [
    "liveness",
    "loudness",
    "valence",
    "mode",
    "speechiness",
    "tempo",
    "instrumentalness",
    "energy",
    "danceability",
    "acousticness",
  ];
  return (
    <>
      <div>
        {Object.keys(features).map(
          (feature, index) =>
            feats.includes(feature) && (
              <div
                key={index}
                onClick={() => {
                  dispatch(setModal(mapping[feature]));
                }}
              >
                {feature}
              </div>
            )
        )}
      </div>
      {modal.length > 0 && <Modal />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    features: state.features,
    modal: state.modal,
  };
};

export default connect(mapStateToProps)(Features);
