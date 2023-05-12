import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const sunflowerImageUrl = 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'; // Replace with your sunflower image URL

const StatisticsPopup = ({ avgHeadSize, maturityDate, oilContent, seedYield, headCount, onClose }) => {
  const handleCardClick = () => {
    onClose();
  };


  return (
    <div className="statistics-popup fixed inset-0 flex items-center justify-center z-50">
      <div className="popup-content bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
        <button className="close-button text-black absolute top-4 right-4" onClick={onClose}>
          <AiOutlineClose size="1.5rem" />
        </button>
        <h2 className="text-xl font-bold mb-4">Statistical Information</h2>
        <h2>Head Count: {headCount}</h2>
        <h2>Seed Yield: {seedYield} kg/ha</h2>
        <h2>Average Head Size: {avgHeadSize} cm</h2>
        <h2>Maturity Date: {maturityDate}</h2>
        <h2>Oil Content: {oilContent}%</h2>
        {/* Add other statistical data as needed */}
        <img src={sunflowerImageUrl} alt="Sunflower" className="w-full mt-4 rounded-md h-auto" />
      </div>
      <style jsx>{`
        .statistics-popup {
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

export default StatisticsPopup;
