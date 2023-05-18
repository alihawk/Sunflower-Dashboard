// analyzed.js
import { useRouter } from 'next/router';
import { useState } from 'react';
import MainLogoReal from '../../components/MainLogoReal';
import Watermark from '../../components/Watermark';
import { Typography, Snackbar, Alert, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button } from '@mui/material';
import Image from 'next/image';

export default function Analyzed() {
    const router = useRouter();
    const { crop, year, city, location, longitude, latitude, cropHealth, soilMoisture, weather, uvIndex, humidityLevel, confidenceThreshold, imageName, date } = router.query;

    const [modalOpen, setModalOpen] = useState(false);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);

    const handleImageClick = (e) => {
        e.stopPropagation(); // Prevents the event from bubbling up and triggering handleModalClose
        setModalOpen(true);
    }

    const handleModalClose = (e) => {
        if (e.target.className === 'modal') { // If you click on the background (the 'modal' div), close the modal
            setModalOpen(false);
        }
    }

    const handleSnackbarClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpenSnackbar(false);
    };

    const handleDialogClose = () => {
        setOpenDialog(false);
    };

    const handleDialogConfirm = () => {
        setOpenDialog(false);
        router.push('/'); // replace '/' with your index.js route
    };

    const handleSaveClick = () => {
        setOpenSnackbar(true);
    };

    const handleDiscardClick = () => {
        setOpenDialog(true);
    };

    console.log(`Image name: ${imageName}`)

    // Random values for Head Count and Estimated Yield
    const headCount = Math.floor(Math.random() * (1200 - 1100 + 1)) + 1100;
    const estimatedYield = (Math.random() * (3 - 2) + 2).toFixed(2);

    return (
        <>
            <Watermark />
            <div className="selection-container">
                <div className="selection-inner-container-analysis">
                    <MainLogoReal className="logo" />
                    <Typography className="selection-title" variant="h4" align="center" sx={{ fontFamily: 'DM Serif Display, serif' }}>Sunflower Dashboard</Typography>
                    <Typography className="selection-subtitle" variant="h5" align="center" gutterBottom sx={{ fontFamily: 'DM Sans', fontWeight: 'medium', textAlign: 'center' }}>
                        Analysis and Estimation
                    </Typography>

                    <div className="analysis-results">
                        <div className="analysis-row">
                            <Typography className="analysis-field"><b>Crop:</b> {crop}</Typography>
                            <Typography className="analysis-field"><b>Date:</b> {date}</Typography>

                            <Typography className="analysis-field"><b>Year:</b> {year}</Typography>
                            <Typography className="analysis-field"><b>City:</b> {city}</Typography>
                            <Typography className="analysis-field"><b>Location:</b> {location}</Typography>
                            <Typography className="analysis-field"><b>Longitude:</b> {longitude}</Typography>
                            <Typography className="analysis-field"><b>Latitude:</b> {latitude}</Typography>
                            <Typography className="analysis-field"><b>Crop Health:</b> {cropHealth}</Typography>
                            <Typography className="analysis-field"><b>Soil Moisture:</b> {soilMoisture}</Typography>
                            <Typography className="analysis-field"><b>Weather:</b> {weather}</Typography>
                            <Typography className="analysis-field"><b>UV Index:</b> {uvIndex}</Typography>
                            <Typography className="analysis-field"><b>Humidity Level:</b> {humidityLevel}</Typography>
                            <Typography className="analysis-field"><b>Confidence Threshold:</b> {confidenceThreshold}</Typography>
                        </div>

                        <Typography className="analysis-heading">Analysis</Typography>
                        <Typography className="analysis-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam dictum lacus quis tincidunt. Phasellus a semper                        sem. Duis nec eros urna.</Typography>

                        <Typography className="analysis-heading"><b>Head Count:</b> {headCount}</Typography>
                        <Typography className="analysis-heading"><b>Estimated Yield:</b> {estimatedYield} tons per hecta acre</Typography>
                        <div className="image-container">
                            <Image src={`/1mosaic.png`} alt="Labelled Image" layout="fill" objectFit="contain" className="analyzed-image" onClick={handleImageClick} />
                        </div>

                        <div className="button-container">
                            <button className="save-button" onClick={handleSaveClick}>Save</button>
                            <button className="discard-button" onClick={handleDiscardClick}>Discard</button>
                        </div>
                    </div>
                </div>
            </div>

            {modalOpen &&
                <div className="modal" onClick={handleModalClose}>
                    <div className="modal-content">
                        <span className="close" onClick={handleModalClose}>&times;</span>
                        <div className="modal-image-container">
                            <Image src="/1mosaic.png" alt="Labelled Image" layout="fill" objectFit="contain" className="modal-image" onClick={handleImageClick} />
                        </div>
                    </div>
                </div>
            }
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert onClose={handleSnackbarClose} severity="success" sx={{ width: '100%' }}>
                    Successfully saved!
                </Alert>
            </Snackbar>
            <Dialog
                open={openDialog}
                onClose={handleDialogClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Discard Changes?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to discard it?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDialogClose}>No</Button>
                    <Button onClick={handleDialogConfirm} autoFocus>Yes</Button>
                </DialogActions>
            </Dialog>


        </>
    );
}
