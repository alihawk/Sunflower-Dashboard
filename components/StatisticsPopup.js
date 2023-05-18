import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Sunflower from '../components/Sunflower';
const sunflowerImageUrl = 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'; // Replace with your sunflower image URL

const StatisticsPopup = ({ avgHeadSize, maturityDate, oilContent, seedYield, headCount, analysisTe, onClose }) => {
  const handleCardClick = () => {
    onClose();
  };

  const analysis = [
    `The estimated seed yield for the chosen date is ${seedYield} kg/ha. This is based on the current head count of ${headCount}, suggesting a high yield potential. Further supporting this potential is the robust growth pattern indicated by the average head size of ${avgHeadSize} cm. With an estimated maturity date of ${maturityDate}, we can expect the plants to continue their healthy development, provided current environmental conditions remain favorable. The measured oil content of ${oilContent}% is within the expected range, further indicating the crop's health and potential profitability.`,

    `Detailed calculations have produced a yield estimate of ${seedYield} kg/ha for the selected date. This figure, combined with a healthy head count of ${headCount}, indicates a thriving crop. The average head size of ${avgHeadSize} cm reinforces this positive prognosis. The crop is estimated to reach maturity by ${maturityDate}, assuming current growth rates continue. The oil content, currently measured at a satisfactory ${oilContent}%, is a crucial factor in the crop's commercial value and is being closely monitored.`,

    `As of the selected date, the crop's estimated yield is ${seedYield} kg/ha, indicating a successful harvest ahead. With a head count of ${headCount} and an average head size of ${avgHeadSize} cm, the plant growth is consistent and robust. This pattern suggests the crop is well-adapted to the current soil and climate conditions. The expected maturity date is ${maturityDate}, and the crop's oil content is ${oilContent}%, both within expected parameters. Continuation of current farming practices is recommended to maintain these positive trends.`,

    `For the selected date, the estimated yield is ${seedYield} kg/ha, reflecting the crop's health and potential. The current head count stands at ${headCount}, suggesting the plants are thriving. The average head size is ${avgHeadSize} cm, indicative of robust plant development. The crop is projected to reach maturity by ${maturityDate}, and the oil content, a key factor in the crop's commercial value, is ${oilContent}% which falls within the normal range. All these factors combined suggest a potential for a profitable harvest, provided no significant changes in environmental conditions occur.`,
  ];

  let randomTemplate = analysis[Math.floor(Math.random() * analysis.length)];
  let analysisText = eval('`' + randomTemplate + '`');
  return (
    <div className="statistics-popup fixed inset-0 flex items-center justify-center z-50">
      <div className="popup-content bg-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
        <button className="close-button text-black absolute top-4 right-4" onClick={onClose}>
          <AiOutlineClose size="1.5rem" />
        </button>
        <h2 className="text-xl font-bold mb-4">Statistical Information</h2>
        <h2><b>Head Count:</b> {headCount}</h2>
        <h2><b>Seed Yield:        </b>{seedYield} kg/ha</h2>
        <h2><b>Average Head Size: </b>{avgHeadSize} cm</h2>
        <h2><b>Maturity Date:     </b>{maturityDate}</h2>
        <h2><b>Oil Content:    </b> {oilContent}%</h2>
        <div className="mb-2">
          <h2 className="font-bold">Analysis:</h2>
          <p>{analysisText}</p>
        </div>
        {/* Add other statistical data as needed */}
        <Sunflower className="w-full mt-4 rounded-md" />
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
