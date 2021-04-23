import React from "react";
import useProgressiveImg from "../../utils/useProgressiveImg";
import "./Features.css";

const BlurredUpImage = ({ feature }) => {
  const [src, { blur }] = useProgressiveImg(
    "../../images/background.jpg",
    `../../images/${feature}.jpg`
  );
  return (
    <img
      src={src}
      style={{
        filter: blur ? "blur(20px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}
      alt="Feature description"
    />
  );
};

export default BlurredUpImage;
