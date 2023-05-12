import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTint } from "@fortawesome/free-solid-svg-icons";

function SoilMoistureWidget({ lat, lon }) {
    const [soilMoisture, setSoilMoisture] = useState(null);

    useEffect(() => {
        const generateRandomSoilMoisture = () => {
            // Generate a random value between 0 and 100
            const randomValue = Math.floor(Math.random() * 101);
            setSoilMoisture(randomValue);
        };

        if (lat && lon) {
            generateRandomSoilMoisture();
        }
    }, [lat, lon]);

    if (soilMoisture === null) return null;

    return (
        <div className="widget-container">
            <div className="soil-moisture-widget bg-black bg-opacity-50 p-4 rounded-md shadow-md text-white">
                <div className="icon">
                    <FontAwesomeIcon icon={faTint} className="mr-2" />
                </div>
                <span className="mainHeadingText text-xl">Soil Moisture</span>
                <p className="text-black text-lg">{soilMoisture}%</p>
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
          
                .soil-moisture-widget {
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

export default SoilMoistureWidget;
