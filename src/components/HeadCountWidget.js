import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

const HeadCountWidget = ({ count }) => {
  return (
    <div className="widget-container">
      <div className="headcount-widget bg-black bg-opacity-50 p-4 rounded-md shadow-md text-white">
        <FontAwesomeIcon icon={faSeedling} className="mr-2" />
        <span className="mainHeadingText text-xl ">Head Count</span>
        <p className="text-black text-lg">{count}</p>
      </div>
      <style jsx>{`
        .widget-container {
          width: 200px;
          height: 100px;
          transition: all 0.3s ease;
        }

        .widget-container:hover {
          transform: scale(1.05);
        }

        .headcount-widget {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default HeadCountWidget;
