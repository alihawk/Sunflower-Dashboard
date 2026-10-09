import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCloud } from "@fortawesome/free-solid-svg-icons";

function WeatherWidget() {
  const weatherData = {
    weather: [{ description: 'cloudy' }],
    main: { temp: 293.15 } // temperature in Kelvin
  };

  return (
    <div className="widget-container">
      <div className="weather-widget bg-black bg-opacity-50 p-4 rounded-md shadow-md text-white">
        <div className="icon">
          <FontAwesomeIcon icon={faCloud} />
        </div>
        <span className="mainHeadingText">Weather</span>
        <p className="text-black text-lg">{weatherData.weather[0].description} ({Math.round(weatherData.main.temp - 273.15)}°C)</p>
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
      
            .weather-widget {
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
export default WeatherWidget;
