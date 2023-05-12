import React from "react";
import Charts from "../src/pages/charts.js";

const ChartsPopup = ({ onClose }) => {
    return (
        <div className=" drone-info-popup fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
            {/* Move the background overlay div before the content div */}
            <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50" onClick={onClose}></div>
            <div className="bg-white rounded-lg w-5/6 h-5/6 overflow-auto relative">
                {/* Change the close button color for better visibility */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-black hover:text-gray-700 focus:outline-none"
                >
                    &times;
                </button>
                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Charts</h2>
                    <Charts />
                </div>
            </div>
            <style jsx>{`
        .drone-info-popup {
            background-color: rgba(0, 0, 0, 0.6);
            z-index: 2000;
          }`}  </style>
        </div>
    );
};

export default ChartsPopup;
