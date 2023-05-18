import { useRouter } from 'next/router';
import { useState } from 'react';
import MainLogoReal from '../../components/MainLogoReal';
import Watermark from '../../components/Watermark';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useEffect } from 'react';

import { useSpring, animated } from 'react-spring';
export default function Analysis() {
    const router = useRouter();
    const { crop, year, city, location } = router.query;

    const [longitude, setLongitude] = useState('');
    const [latitude, setLatitude] = useState('');
    const [cropHealth, setCropHealth] = useState('');
    const [soilMoisture, setSoilMoisture] = useState('');
    const [weather, setWeather] = useState('');
    const [loading, setLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState('');
    const [averageNumberOfSeedsPerHead, setAverageNumberOfSeedsPerHead] = useState('');
    const [averageWeightOfOneSeed, setAverageWeightOfOneSeed] = useState('');
    const [averageSeedWeightPerHead, setAverageSeedWeightPerHead] = useState('');

    const [uvIndex, setUvIndex] = useState('');
    const [humidityLevel, setHumidityLevel] = useState('');
    const [confidenceThreshold, setConfidenceThreshold] = useState(50);
    const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImageFile, setSelectedImageFile] = useState(null); // new state for the file object

    const handleImageChange = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
        setSelectedImageFile(e.target.files[0]); // store the file object when the file is selected
    };

    const handleSubmit = () => {
        setLoading(true);
        setTimeout(() => {
            const imageName = selectedImageFile.name;
            router.push({
                pathname: '/analyzed',
                query: {
                    crop: crop,
                    year: year,
                    city: city,
                    location: location,
                    longitude: longitude,
                    latitude: latitude,
                    cropHealth: cropHealth,
                    soilMoisture: soilMoisture,
                    averageNumberOfSeedsPerHead: averageNumberOfSeedsPerHead,
                    averageWeightOfOneSeed: averageWeightOfOneSeed,
                    averageSeedWeightPerHead: averageSeedWeightPerHead,
                    confidenceThreshold: confidenceThreshold,
                    imageName: imageName,
                    date: selectedDate,
                },
            });
            setLoading(false);
        }, 5000); // Wait for 5 seconds
    };
    return (
        <>
            <Watermark />
            <div className="selection-container">
                <div className="selection-inner-container-analysis">
                    {loading ? (
                        <div className="loader-container">
                            <div className="loader"></div>

                            <p>Your Image is being processed...</p>
                        </div>
                    ) : (<>


                        <MainLogoReal className="logo" />
                        <Typography className="selection-title" variant="h4" align="center" sx={{ fontFamily: 'DM Serif Display, serif' }}>Sunflower Dashboard</Typography>
                        <Typography className="selection-subtitle" variant="h5" align="center" gutterBottom sx={{ fontFamily: 'DM Sans', fontWeight: 'medium', textAlign: 'center' }}>
                            Analysis and Estimation
                        </Typography>

                        {/* Display the input fields in a grid */}
                        <div className="input-grid">
                            <div className="input-row">
                                <div className="input-field">
                                    <label>Crop</label>
                                    <input value={crop} readOnly />
                                </div>
                                <div className="input-field">
                                    <label>Year</label>
                                    <input value={year} readOnly />
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label>City</label>
                                    <input value={city} readOnly />
                                </div>
                                <div className="input-field">
                                    <label>Location</label>
                                    <input value={location} readOnly />
                                </div>
                            </div>
                            {/* Display the new input fields */}
                            <div className="input-row">
                                <div className="input-field">
                                    <label>Longitude</label>
                                    <input value={longitude} onChange={e => setLongitude(e.target.value)} placeholder="Enter Longitude" />
                                </div>
                                <div className="input-field">
                                    <label>Latitude</label>
                                    <input value={latitude} onChange={e => setLatitude(e.target.value)} placeholder="Enter Latitude" />
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label>Crop Health: {cropHealth}%</label>
                                    <input type="range" min="0" max="100" value={cropHealth} onChange={e => setCropHealth(e.target.value)} />
                                </div>
                                <div className="input-field">
                                    <label>Soil Moisture: {soilMoisture}%</label>
                                    <input type="range" min="0" max="100" value={soilMoisture} onChange={e => setSoilMoisture(e.target.value)} />
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label>Average Number of Seeds per Head</label>
                                    <input type="number" value={averageNumberOfSeedsPerHead} onChange={e => setAverageNumberOfSeedsPerHead(e.target.value)} placeholder="Enter Average Number of Seeds per Head" />
                                </div>
                                <div className="input-field">
                                    <label>Average Weight of One Seed</label>
                                    <input type="number" value={averageWeightOfOneSeed} onChange={e => setAverageWeightOfOneSeed(e.target.value)} placeholder="Enter Average Weight of One Seed" />
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label>Shelling Percentage(P): {humidityLevel}%</label>
                                    <input type="range" min="0" max="100" value={humidityLevel} onChange={e => setHumidityLevel(e.target.value)} />
                                </div>
                                {/* New input field */}
                                <div className="input-field">
                                    <label>Confidence Threshold: {confidenceThreshold}%</label>
                                    <input type="range" min="0" max="100" value={confidenceThreshold} onChange={e => setConfidenceThreshold(e.target.value)} />
                                </div>
                            </div>
                            <div className="input-row">
                                <div className="input-field">
                                    <label>Date</label>
                                    <input type="date" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
                                </div>
                            </div>

                        </div>

                        {/* Image Upload */}
                        <div className="file-upload-container">
                            <label className="file-upload-label">
                                <input type="file" accept="image/*" onChange={handleImageChange} className="file-upload-input" />
                                Choose File
                            </label>
                            {selectedImage && <img className="selected-image" src={selectedImage} alt="Selected" />}
                        </div>

                        {/* Submit Button */}
                        <button className="submit-button" onClick={handleSubmit}>Submit</button>
                    </>
                    )}

                </div>
            </div>
        </>

    );
}
