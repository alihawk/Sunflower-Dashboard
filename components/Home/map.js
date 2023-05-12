import { MapContainer, TileLayer, ImageOverlay, Tooltip, Circle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useRef, useEffect } from "react";

import { Icon } from "leaflet";


export default function Map({ selectedLayer, date, cropType }) {
  const [opacity, setOpacity] = useState(0.5);
  console.log(selectedLayer, date);
  const overlayRef = useRef();
  const circleOptions = {
    color: "red",
    fillColor: "red",
    fillOpacity: 0.5,
    radius: 10,
  };

  function ZoomControl({ isZoomed, originalView, targetView }) {
    const map = useMap();

    useEffect(() => {
      if (isZoomed !== null) {
        map.flyTo(isZoomed ? targetView.center : originalView.center, isZoomed ? targetView.zoom : originalView.zoom);
      }
    }, [isZoomed]);

    return null;
  }
  const handleRangeChange = (event) => {
    const value = parseFloat(event.target.value);
    setOpacity(value);
  };
  const [brightness, setBrightness] = useState(1);
  const [contrast, setContrast] = useState(1);
  // const map = useMap();
  const [originalView, setOriginalView] = useState({ center: [32.33925700144764, 72.5339985983349], zoom: 4 });
  const [isZoomed, setIsZoomed] = useState(null);


  let overlayUrl, overlayBounds, overlayLegend;
  let markers = [];
  useEffect(() => {
    if (overlayRef.current) {
      const element = overlayRef.current.getElement();
      element.style.filter = `brightness(${brightness}) contrast(${contrast})`;
    }
  }, [brightness, contrast, overlayRef]);
  // Ref to hold the map instance
  const mapRef = useRef();
  // Function to handle zoom
  // const handleZoom = () => {
  //   const mapInstance = mapRef.current;
  //   const targetView = isZoomed
  //     ? originalView
  //     : { center: overlayBounds[0], zoom: 18 };  // Update the center and zoom level as per your requirements

  //   if (mapInstance) {
  //     mapInstance.flyTo(targetView.center, targetView.zoom);
  //   }

  //   setIsZoomed(!isZoomed);
  // };

  const handleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  // Set the appropriate overlay URL and bounds based on the selected date and layer
  if (date === "2022-06-25" && cropType === "") {
    overlayUrl = "mosaics/NDVI220625.png";
    overlayBounds = [
      [32.33925700144764, 72.5339985983349],
      [32.340393338283484, 72.53513116378589],
    ];
    markers = [
      {
        position: [32.33955700154764, 72.5340985983349],
        content: "Sunflower Field - 11",
      },
      {
        position: [32.340193338283484, 72.53470116378589],
        content: "Sunflower Field -23",
      },
    ];
    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220625legend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220625legendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220625legendmsavi.png";
    }
  } else if (date === "2022-08-27" && cropType === "") {
    overlayUrl = "mosaics/NDVI220827.png";
    overlayBounds = [
      [32.339026750942125, 72.53446255340462],
      [32.34037087740836, 72.53530713261662],
    ];
    markers = [
      {
        position: [32.339526750942125, 72.53476255340462],
        content: "Sunflower Field - 17",
      },
      {
        position: [32.34018087740836, 72.53520713261662],
        content: "Sunflower Field - 27",
      },
    ];
    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220827legend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220827legendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220827legendmsavi.png";
    }
  } else if (date === "2022-07-06" && cropType === "") {
    overlayUrl = "mosaics/NDVI220706.png";
    overlayBounds = [
      [32.34011086322847, 72.53823414753222],
      [32.341158498800944, 72.53919684062315],
    ];
    markers = [
      {
        position: [32.34021086322847, 72.53873414753222],
        content: "Sunflower Field - 11",
      },
      {
        position: [32.341058498800944, 72.53891684062315],
        content: "Sunflower Field - 63",
      },
    ];

    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220706legend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220706legendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220706legendmsavi.png";
    }
  } else if (date === "2022-07-06" && cropType === "SK") {
    overlayUrl = "mosaics/NDVI220706SK.png";
    overlayBounds = [
      [32.34011086322847, 72.53823414753222],
      [32.341158498800944, 72.53919684062315],
    ];
    markers = [
      {
        position: [32.34081086322847, 72.53873414753222],
        content: "Crop Type: Super Kernel - 11",
      },
      {
        position: [32.341058498800944, 72.53849684062315],
        content: "Crop Type: Super Kernel - 63",
      },
    ];
    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220706SKlegend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220706SKlegendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220706SKlegendmsavi.png";
    }
  } else if (date === "2022-07-19" && cropType === "SK") {
    overlayUrl = "mosaics/NDVI220719.png";
    overlayBounds = [
      [32.34011431725231, 72.53830831303031],
      [32.341136743428166, 72.53913427897837],
    ];
    markers = [
      {
        position: [32.34062431725231, 72.53840831303031],
        content: "Crop Type: Super Kernel - 15",
      },
      {
        position: [32.341026743428166, 72.53873427897837],
        content: "Crop Type: Super Kernel - 63",
      },
    ];
    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220719legend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220719legendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220719legendmsavi.png";
    }
  } else if (date === "2022-08-27" && cropType === "SK") {
    overlayUrl = "mosaics/NDVI220827SK.png";
    overlayBounds = [
      [32.340104538030566, 72.53827162640408],
      [32.341533679610755, 72.5394241987202],
    ];
    // markers = [
    //   {
    //     position: [32.341004538030566, 72.53857162640408],
    //     content: "Crop Type: Super Kernel - 15",
    //   },
    //   {
    //     position: [32.341013679610755, 72.5390241987202],
    //     content: "Crop Type: Super Kernel - 63",
    //   },
    // ];
    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220827SKlegend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220827SKlegendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220827SKlegendmsavi.png";
    }
  }
  //xmin: 72.53375820721281, xmax: 72.53539095364809, ymin: 32.33894489182281, ymax: 32.34081353955514
  else if (date === "2022-09-10" && cropType === "") {
    overlayUrl = "mosaics/NDVI220910.png";
    overlayBounds = [
      [32.339026750942125, 72.53446255340462],
      [32.34037087740836, 72.53530713261662],
    ];
    markers = [
      {
        position: [32.339726750942125, 72.53456255340462],
        content: "Sunflower Field - 11",
      },
      {
        position: [32.33957087740836, 72.53500713261662],
        content: "Sunflower Field - 63",
      },
    ];

    if (selectedLayer === "NDVI") {
      overlayLegend = "mosaics/NDVI220910legend.png";
    } else if (selectedLayer === "SAVI") {
      overlayLegend = "mosaics/NDVI220910legendsavi.png";
    } else {
      overlayLegend = "mosaics/NDVI220910legendmsavi.png";
    }
  }

  const handleBrightnessChange = (event) => {
    const value = parseFloat(event.target.value);
    setBrightness(value);
  };

  const handleContrastChange = (event) => {
    const value = parseFloat(event.target.value);
    setContrast(value);
  };

  console.log("The url and bounds are", overlayUrl, overlayBounds);
  return (
    <div className="w-full h-80 shadow-xl relative">

      <div className="absolute bottom-0 right-0 z-10">
        {/* legend */}
        {/* {overlayLegend && (
          <img src={overlayLegend} alt="legend" className="h-50" />
        )} */}
      </div>



      <div className="slider-container bg-black">
        <div className="slider-item">
          <button onClick={handleZoom} className="zoom-button ">
            {isZoomed ? 'Zoom Out' : 'Zoom In'}
          </button>
        </div>
        <div className="slider-item">
          <label htmlFor="brightness-range" className="slider-label">
            <b className=" texts-slider mainHeadingText">Brightness</b>
          </label>
          <input
            id="brightness-range"
            type="range"
            min="0"
            max="2"
            step="0.01"
            value={brightness}
            onChange={handleBrightnessChange}
            className="range-input"
          />
        </div>


        <div className="slider-item">
          <label htmlFor="contrast-range" className="slider-label">
            <b className="  texts-slider mainHeadingText">Contrast</b>
          </label>
          <input
            id="contrast-range"
            type="range"
            min="0"
            max="2"
            step="0.01"
            value={contrast}
            onChange={handleContrastChange}
            className="range-input"
          />
        </div>
        <div className="slider-item">
          <label htmlFor="opacity-range" className="slider-label">
            <b className=" texts-slider mainHeadingText"> Opacity</b>
          </label>
          <input
            id="opacity-range"
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={opacity}
            onChange={handleRangeChange}
            className="range-input"
          />
        </div>
      </div>

      <div className="w-full h-full fixed top-0 left-0 z-0">
        <MapContainer
          center={[32.33925700144764, 72.5339985983349]}
          zoom={4} // Change the initial zoom level here
          style={{ height: "100%", width: "100%", zIndex: 0 }}
          scrollWheelZoom={false}
        >

          {/* sattelite view */}
          <TileLayer
            url="http://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
            subdomains={["mt0", "mt1", "mt2", "mt3"]}
            maxZoom={20}
            tileSize={256}
            attribution="&copy; Google"
          />
          {/* markers */}
          {markers.map((marker, index) => (
            <Circle key={index} center={marker.position} radius={2} color="white">
              <Tooltip>{marker.content}</Tooltip>
            </Circle>
          ))}

          {/* Render the selected overlay if is set */}

          {overlayUrl && (

            <ImageOverlay
              ref={overlayRef}
              url={overlayUrl}
              bounds={overlayBounds}
              opacity={opacity}
            />
          )}
          <ZoomControl isZoomed={isZoomed} originalView={originalView} targetView={{ center: overlayBounds[0], zoom: 18 }} />
        </MapContainer>
      </div>
    </div >
  );
}

