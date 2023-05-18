import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { Button, Grid, Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import { FaChartBar, FaChartPie } from "react-icons/fa";
import CircularProgress from '@mui/material/CircularProgress';
import Watermark from '../../components/Watermark';
import dynamic from "next/dynamic";
import MainLogoReal from '../../components/MainLogoReal';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#F1F1F1'
}));


const LoadingContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
});

const Loading = () => (
    <LoadingContainer>
        <CircularProgress />
        <Typography>Your images are being processed...</Typography>
    </LoadingContainer>
);

const FileButton = styled(Button)`
    transition: transform 0.2s ease-in-out;
    
    color:white;
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
`;

const ButtonContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

const ImageContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginTop: '2rem'
});

const Image = styled('img')({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem'
});

const VisualizeButton = styled(Button)`
    transition: transform 0.2s ease-in-out;
    background-color: black;
    color:black;
    margin-top: 2rem; // adjust this as needed
    &:hover,
    &:focus {
      transform: scale(1.1);
    }
`;


export default function Visualization() {
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const [selectedImages, setSelectedImages] = useState([]);
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    const handleFilesChange = (event) => {
        const files = Array.from(event.target.files);
        const urlArr = files.map((file) => ({
            url: URL.createObjectURL(file),
            name: file.name
        }));
        setSelectedImages(urlArr);
    };
    const handleVisualize = () => {
        setLoading(true);
        setTimeout(() => {
            router.push({
                pathname: '/visualized',
                query: { images: selectedImages.map((img) => img.name) }
            });
            setLoading(false);
        }, 3000);
    };

    return (<><Watermark />
        <div className="selection-container">
            <div className="selection-inner-container">
                {/* <img src="https://w7.pngwing.com/pngs/441/849/png-transparent-common-sunflower-cartoon-drawing-blooming-sunflowers-poster-natural-sunflower.png" alt="logo" className="logo" /> */}
                <MainLogoReal  className="logo" />
                <animated.div style={fadeIn}>
                    <Typography className="selection-title" variant="h4">Sunflower Dashboard</Typography>
                    <Typography className="selection-subtitle" variant="h6">Visualize Your Fields</Typography>
                </animated.div>
                <animated.div style={fadeIn}>
                    <ButtonContainer>
                        <FileButton
                            variant="contained"
                            component="label"
                        >
                            Select Files
                            <input
                                type="file"
                                accept="image/*"
                                multiple
                                hidden
                                onChange={handleFilesChange}
                            />
                        </FileButton>
                        <ImageContainer>
                            {selectedImages.map((img, index) => (
                                <Image key={index} src={img.url} alt={`Selected Image ${index + 1}`} />
                            ))}
                        </ImageContainer>

                        {loading ? (
                            <Loading />
                        ) : (
                            selectedImages.length > 0 && (
                                <VisualizeButton
                                    variant="contained"
                                    onClick={handleVisualize}
                                >
                                    Visualize
                                </VisualizeButton>
                            )
                        )}
                    </ButtonContainer>
                </animated.div>
            </div>
        </div>


    </>
    );
}