import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

function HumidityWidget({ location }) {
    const [humidity, setHumidity] = useState(null);

    useEffect(() => {
        const fetchHumidity = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.NEXT_PUBLIC_OPEN_WEATHER_API_KEY}`
            );
            const data = await response.json();
            setHumidity(data.main.humidity);
        };

        if (location) {
            fetchHumidity();
        }
    }, [location]);

    if (humidity === null) return null;

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
