import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

function HumidityWidget() {
  const humidity = 45; // Here is the hardcoded value

  return (
    <div className="widget-container">
      <div className="humidity-widget bg-black bg-opacity-50 p-4 rounded-md shadow-md text-white">
        <div className="icon">
          <FontAwesomeIcon icon={faTint} className="mr-2" />
        </div>
        <span className="mainHeadingText text-xl ">Humidity</span>
        <p className="text-black text-lg">{humidity}%</p>
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
      
            .humidity-widget {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100%;
            }
      
            .icon {
              margin-bottom: 8px;
            }
          `}</style>
    </div>
  );
}

export default HumidityWidget;
