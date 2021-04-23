import React from "react";
import { connect } from "react-redux";
import mapping from "../../utils/descriptions";
import { setModal } from "../../actions/result";
import Modal from "../Modal/Modal";
import "./Features.css";
import Image from "./Image.js";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Features = (props) => {
  const { track, modal, features, dispatch } = props;
  const feats = [
    "liveness",
    "loudness",
    "key",
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
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.7 }}
          className="track__details__div"
        >
          <h2>{track.name}</h2>
          {track.artists.length > 0 && <h3>{track.artists[0].name}</h3>}
          <div className="link__div">
            <a
              href={track.external_urls.spotify}
              target="_blank"
              rel="noopener noreferrer"
            >
              Play
            </a>
          </div>
        </motion.div>
        <div className="header__div">
          <p>
            THE FOLLOWING AUDIO FEATURES ARE AVAILABLE FOR THE GIVEN TRACK :
          </p>
        </div>
        <ul>
          {feats.map((feat, index) => (
            <li key={index}>
              <Link to={feat} spy={true} smooth={true}>
                {feat}
              </Link>
            </li>
          ))}
        </ul>
        {Object.keys(features).map(
          (feature, index) =>
            feats.includes(feature) && (
              <div
                key={index}
                onClick={() => {
                  dispatch(setModal(mapping[feature]));
                }}
                className={
                  "feature__div " + (index % 2 !== 0 ? "left" : "right")
                }
                id={feature}
              >
                {index % 2 !== 0 && <Image feature={feature} />}
                <p>
                  {feature}: {features[feature]}
                </p>
                {index % 2 === 0 && <Image feature={feature} />}
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
    track: state.track,
  };
};

export default connect(mapStateToProps)(Features);
