import React from 'react';
import DroneImageReal from '../components/DroneImageReal';

const DroneInfoPopup = ({ onClose, droneSensor, droneName, droneCompany, wingSpan }) => {
  droneSensor = "Sentera 4K Double Sensor";
  droneName = "DJI Inspire 2";
  droneCompany = "DJI";
  wingSpan = "1.8 meters";

  const droneDescription = `The ${droneName} is a powerful cinematic and photographic drone that is revolutionizing the landscape of smart farming and precision agriculture. Its advanced flight controls, versatile cameras, and intelligent flight modes make it an ideal choice for aerial imaging, providing a bird's eye view of large tracts of land in mere minutes. 

  The drone is equipped with a ${droneSensor}, a state-of-the-art multispectral sensor that captures high-resolution images in Red, Green, Blue, Red Edge, and Near Infrared (NIR) bands. These spectral bands are critical for assessing plant health, detecting pests and diseases, and measuring soil moisture levels. 
  
  Combined with machine learning algorithms and AI, these multispectral images allow us to perform precise crop health analysis in our sunflower fields. This enables us to make informed and timely agronomic decisions, ensuring optimal use of resources like water and fertilizers, and ultimately leading to increased yields and reduced environmental impact. 
  
  Moreover, the ${droneName}'s robust design and high endurance make it capable of withstanding challenging weather conditions, making it a reliable tool for continuous monitoring of crops throughout their growth cycle. Its high-speed data transmission capabilities ensure that the data collected is readily available for analysis and decision making. 
  
  The drone's ${wingSpan} wingspan and powerful propulsion system allow it to cover large areas quickly, making it an invaluable tool for large-scale commercial farming operations. `;
  return (
    <div className="drone-info-popup fixed inset-0 flex items-center justify-center z-50">
      <div className="popup-content bg-white p-6 rounded-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button className="close-button text-black absolute top-4 right-4" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Drone Information</h2>
        <p>
          <strong>Drone Name:</strong> {droneName}
        </p>
        <p>
          <strong>Drone Sensor:</strong> {droneSensor}
        </p>
        <p>
          <strong>Drone Company:</strong> {droneCompany}
        </p>
        <p>
          <strong>Wing Span:</strong> {wingSpan}
        </p>
        <p className="mt-2 text-gray-700">
          {droneDescription}
        </p>
        <DroneImageReal className="w-full mt-4 rounded-md" />
      </div>
      <style jsx>{`
      .drone-info-popup {
        background-color: rgba(0, 0, 0, 0.6);
        z-index: 2000;
      }
      .popup-content {
        position: relative;
        border-radius: 15px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.1);
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
