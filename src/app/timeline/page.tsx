import ExportedImage from "next-image-export-optimizer";
import timeline from "/public/assets/img/MTG-Timeline-W2.png";

import React from "react";

const TimeLine = () => {
  return (
    <div className="max-h-96">
      <ExportedImage
        className="rounded-t-lg"
        alt="metagun button"
        src={timeline}></ExportedImage>
    </div>
  );
};

export default TimeLine;
