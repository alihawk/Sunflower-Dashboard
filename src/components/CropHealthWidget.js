import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const CropHealthWidget = ({ health }) => {
  return (
    <div className="widget-container">
      <div className="health-widget bg-black bg-opacity-50 p-4 rounded-md shadow-md ">
        <FontAwesomeIcon icon={faHeartbeat} className="mr-2" />
        <span className="mainHeadingText text-xl ">Crop Health</span>
        <p className=" text-lg">{health}%</p>
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

        .health-widget {
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

export default CropHealthWidget;
