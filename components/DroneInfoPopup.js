import React from 'react';

const DroneInfoPopup = ({ onClose, droneSensor, droneName, droneImage }) => {
    return (
        <div className="drone-info-popup fixed inset-0 flex items-center justify-center z-50">
            <div className="popup-content bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
                <button className="close-button text-black absolute top-4 right-4" onClick={onClose}>
                    &times;
                </button>
                <h2 className="text-xl font-bold mb-4">Drone Information</h2>
                <p>
                    <strong>Drone Sensor:</strong> {droneSensor}
                </p>
                <p>
                    <strong>Drone Name:</strong> {droneName}
                </p>
                <img src={droneImage} alt="Drone" className="w-full mt-4 rounded-md" />
            </div>
            <style jsx>{`
        .drone-info-popup {
          background-color: rgba(0, 0, 0, 0.6);
          z-index: 2000;
        }
        .popup-content {
          position: relative;
        }
        .close-button {
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
        }
      `}</style>
        </div>
    );
};

export default DroneInfoPopup;
