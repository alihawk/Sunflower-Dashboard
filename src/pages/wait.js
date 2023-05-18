import Head from "next/head";
import Map from "../../components/Home";
import React, { useEffect, useState } from "react";
import BaseLayout from "../../components/BaseLayout/BaseLayout";
import dynamic from "next/dynamic";
import { FaChartBar, FaChartPie } from "react-icons/fa";
import Card from "../../components/card";
import WeatherWidget from '../../components/WeatherWidget';
import HumidityWidget from '../../components/HumidityWidget';
import UVIndexWidget from '../../components/UVIndexWidget';
import CropHealthWidget from "../../components/CropHealthWidget";
import HeadCountWidget from "../../components/HeadCountWidget";
import StatisticsPopup from "../../components/StatisticsPopup";
import DroneInfoPopup from '../../components/DroneInfoPopup';
import ChartsPopup from '../../components/ChartsPopup';
import SoilMoistureWidget from '../../components/SoilMoistureWidget';
import Watermark from '../../components/Watermark';

import droneimageReal from "../../components/DroneImageReal";

const DynamicLineChart = dynamic(
  () => import("../../components/Charts/LineChart"),
  { ssr: false }
);
const DynamicBarChart = dynamic(
  () => import("../../components/Charts/BarChart"),
  { ssr: false }
);
const wait = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  // Default to RGB layer (index 0)
  const [selectedDate, setSelectedDate] = useState("2022-10-03");
  const [selectedCropType, setSelectedCropType] = useState("");
  const [showChartsPopup, setShowChartsPopup] = useState(false);
  const [cropHealth, setCropHealth] = useState(80); // %
  const [showPopup, setShowPopup] = useState(false);
  const [showDroneInfoPopup, setShowDroneInfoPopup] = useState(false);
  const [nutrientUptake, setNutrientUptake] = useState({
    nitrogen: 200, // kg/ha
    phosphorus: 50, // kg/ha
    potassium: 250 // kg/ha
  });

  const [seedYield, setSeedYield] = useState(2000); // kg/ha
  const [avgHeadSize, setAvgHeadSize] = useState(20); // cm
  const [maturityDate, setMaturityDate] = useState("2022-08-15");
  const [oilContent, setOilContent] = useState(45); // %
  const [analysis, setAnalysis] = useState("");

  const [headCount, setHeadCount] = useState(750);
  const handleRadioChange = (event) => {
    setSelectedIndex(Number(event.target.value));
  };
  const handleCropTypeChange = (event) => {
    setSelectedCropType(event.target.value);
  };
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setSelectedCropType("");
    if (event.target.value === "2022-07-19") {
      setSelectedCropType("SK");
    }
  };

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const toggleDroneInfoPopup = () => {
    setShowDroneInfoPopup(!showDroneInfoPopup);
  };
  const toggleChartsPopup = () => {
    setShowChartsPopup(!showChartsPopup);
  };


  const getRandomNumber = () => {
    setHeadCount(Math.floor(Math.random() * (771 - 700) + 700)); // generate random number between 700-770
    setSeedYield(Math.floor(Math.random() * (2200 - 1800) + 1800)); // generate random number between 1800-2200
    setAvgHeadSize(Math.floor(Math.random() * (23 - 18) + 18)); // generate random number between 18-23
    setOilContent(Math.floor(Math.random() * (50 - 40) + 40)); // generate random number between 40-50
    setNutrientUptake({
      nitrogen: Math.floor(Math.random() * (250 - 150) + 150), // generate random number between 150-250
      phosphorus: Math.floor(Math.random() * (70 - 30) + 30), // generate random number between 30-70
      potassium: Math.floor(Math.random() * (350 - 200) + 200) // generate random number between 200-350
    });
  };

  const generateRandomAnalysis = () => {
    const analysis = [
      `The estimated yield for the selected date is ${seedYield} kg/ha. Given the head count of ${headCount}, this is a healthy yield. The average head size of ${avgHeadSize} cm indicates robust crop growth. The estimated maturity date is ${maturityDate}, which is ideal for the crop type. The oil content is measured at ${oilContent}%, which falls within the expected range for this crop.`,
      `The crop yield estimation process takes into account several factors. For the selected date, the head count is at ${headCount}, and the estimated seed yield is ${seedYield} kg/ha. The average head size stands at ${avgHeadSize} cm, indicating healthy growth. The crop is expected to reach maturity by ${maturityDate}. Oil content is also within the expected range at ${oilContent}%.`,
      `For the chosen date, the estimated yield is ${seedYield} kg/ha. This is calculated based on the head count of ${headCount}. The average head size of ${avgHeadSize} cm suggests that the crop is growing well. The maturity date is estimated to be ${maturityDate}, and the oil content of the crop is ${oilContent}%.`,
      `The yield estimation process takes into account various parameters. For the selected date, the head count stands at ${headCount}, which is a positive indicator. The estimated seed yield is ${seedYield} kg/ha, and the average head size is ${avgHeadSize} cm, suggesting that the crop is healthy. The crop is expected to mature by ${maturityDate}, and the oil content stands at ${oilContent}%.`
    ];

    const index = Math.floor(Math.random() * analysis.length);
    return analysis[index];
  };

  const getRandomLatLong = () => {
    const locations = [
      { name: "New York", lat: 40.7128, lon: -74.0060 },
      { name: "London", lat: 51.5074, lon: -0.1278 },
      { name: "Sydney", lat: -33.8688, lon: 151.2093 },
      { name: "Tokyo", lat: 35.6895, lon: 139.6917 },
      { name: "Cape Town", lat: -33.9249, lon: 18.4241 },
      { name: "Rio de Janeiro", lat: -22.9068, lon: -43.1729 },
    ];

    const index = Math.floor(Math.random() * locations.length);
    const lat = (locations[index].lat + Math.random() * 0.5 - 0.25).toFixed(4);
    const lon = (locations[index].lon + Math.random() * 0.5 - 0.25).toFixed(4);
    return { lat, lon };
  };

  const getRandomLocation = () => {
    const locations = [
      "New York",
      "London",
      "Sydney",
      "Tokyo",
      "Cape Town",
      "Rio de Janeiro",
    ];
    const index = Math.floor(Math.random() * locations.length);
    return locations[index];
  };


  useEffect(() => {
    getRandomNumber();
    setLocation(getRandomLocation());
    setCoordinates(getRandomLatLong());
    setCropHealth(Math.floor(Math.random() * (100 - 70) + 70)); // generate random number between 70-100
    setHeadCount(Math.floor(Math.random() * (800 - 600) + 600));
    setAnalysis(generateRandomAnalysis());// generate random number between 600-800
  }, [selectedDate]);



  const layers = [
    { name: "RGB", layer: "NDVI" },
    { name: "NIR", layer: "AVI" },
    { name: "SVG", layer: "AVI" },

  ];
  const dates = [
    { date: "2022-10-03" },
    { date: "2022-10-28" },
    { date: "2022-11-10" },
    { date: "2023-03-05" },
    { date: "2023-03-28" },
    { date: "2023-05-19" },
  ];
  const cropTypes = [{ name: "" }, { name: "SK" }];
  const [location, setLocation] = useState(getRandomLocation());
  const [coordinates, setCoordinates] = useState(getRandomLatLong());


  return (

    <>

      <Watermark />
      <BaseLayout title="Home" footer={false}>
        <Head>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <div className="content-container">
          <div className="flex flex-col md:flex-row md:items-start">
            <div className="w-full md:w-2/3">
              <div className="cardsWrapper w-full flex space-x-9  z-20 relative cardsPosition">
                <Card title={"Charts"} icon="chart" onClick={toggleChartsPopup} />
                <Card title={"Drone Information"} icon="drone" onClick={toggleDroneInfoPopup} />
                <Card title={"Statistics"} icon="statistics" onClick={togglePopup} />
              </div>

              <div className="w-full h-full relative">
                <Map
                  selectedLayer={layers[selectedIndex].layer}
                  date={selectedDate}
                  cropType={selectedCropType}
                />
                <div className="absolute top-0 left-0 z-10 p-4">
                  <div className="flex flex-col space-y-4">
                    <WeatherWidget location={location} />
                    <HumidityWidget location={location} />
                    <UVIndexWidget lat={coordinates.lat} lon={coordinates.lon} />
                    <CropHealthWidget health={cropHealth} />
                    <HeadCountWidget count={headCount} />
                    <SoilMoistureWidget lat={coordinates.lat} lon={coordinates.lon} /> {/* Add this line */}
                  </div>
                </div>


              </div>
            </div>

            <div className="controls-container flex flex-col font-sans w-1/3 mt-5">

              <div className=" bg-transparent bg-opacity-80 text-white shadow-lg px-6 md:ml-6 mt-5" >
                <div className="dateLayerbox  border-black border-dotted p-4 mt-4">
                  <h3 className=" mainHeadingText  mb-2 ">Select layer:</h3>
                  {layers.map((layer, index) => (
                    <div key={index} className="mb-2">
                      <label className="inline-flex items-center">
                        <input
                          type="radio"
                          name="layer"
                          value={index}
                          checked={selectedIndex === index}
                          onChange={handleRadioChange}
                          className="text-black form-radio h-5 w-5 text-green-500"
                        />
                        <span className="mainHeadingText ml-2 ">{layer.name}</span>
                      </label>
                    </div>
                  ))}

                  <div className=" mt-4">
                    <h3 className="mainHeadingText my-2 ">Select date:</h3>
                    <div className="relative">
                      <select
                        value={selectedDate}
                        onChange={handleDateChange}
                        className="block appearance-none w-full bg-white border text-black border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
                      >
                        {dates.map((date, index) => (
                          <option key={index} value={date.date}>
                            {date.date}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div className="relative mt-2">
                      <input type="date" value={selectedDate} onChange={handleDateChange}
                        className="block appearance-none w-full bg-white border text-black border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline" />
                      <br />
                      {/* {renderOutput()} */}
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-transparent font-sans bg-opacity-80 mt-5 pt-5 shadow-lg px-6 mb-6 md:ml-6">
                <div className=" dateLayerbox bg-transparent  z-15 p-4 ">
                  <h3 className="text-black text-xl  mb-5 flex items-center ">
                    <FaChartBar className=" mainHeadingText  inline-block mr-2" />
                    Crop Yield
                  </h3>
                  < DynamicLineChart className='dateLayerbox  bg-black' />
                </div>
              </div>

            </div>
          </div>
        </div>
        <style jsx>{`
        .content-container {
          padding-top: 64px;
          position: relative;
          height: calc(100vh - 64px);
          
        }
        .cards-container {
          z-index: 20;
          position: relative;
        }
        .controls-container {
          z-index: 20;
          position: relative;
          flex-wrap: wrap;
          
          border-radius: 8px; /* Rounded borders */
          padding: 1rem; /* Add padding to make the container smaller */
          margin-left: 1rem; /* Push the container to the right */
        }
        
        .cardsWrapper {
          justify-content: center;
        }
        .selectDateWrapper,
        .cropYieldWrapper {
          color:black;
          border-radius: 8px;
          padding: 12px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
      `}</style>
        {showPopup && (
          <StatisticsPopup
            onClose={togglePopup}
            avgHeadSize={avgHeadSize}
            maturityDate={maturityDate}
            oilContent={oilContent}
            seedYield={seedYield}
            headCount={headCount}
            analysisTe={analysis} // New line
          />
        )}


        {showDroneInfoPopup && (
          <DroneInfoPopup
            onClose={toggleDroneInfoPopup}
            droneSensor="Sensor XYZ"
            droneName="Drone ABC"
            droneImage={droneimageReal}
          />
        )}
        {showChartsPopup && (
          <ChartsPopup
            onClose={toggleChartsPopup}
          />
        )}


      </BaseLayout>
    </>
  );
};

export default wait;