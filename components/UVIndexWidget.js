import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";

function UVIndexWidget() {
  const uvIndex = 5; // Hardcoded UV Index value

  return (
    <div className="widget-container">
      <div className=" uvindex-widget uv-index-widget bg-black bg-opacity-50 p-4 rounded-md shadow-md text-white">
        <div className="icon">
          <FontAwesomeIcon icon={faSun} />
        </div>
        <span className="mainHeadingText text-xl " >UV Index</span>
        <p className="text-black text-lg">{uvIndex}</p>

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
      
            .uv-index-widget {
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

export default UVIndexWidget;
