import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import Watermark from '../../components/Watermark'; // import the Watermark component

export default function Index() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000); // Change the loading time as desired
    }, []);
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    const handleCropSelection = (crop) => {
        router.push(`/select-year?crop=${crop}`);
    };

    if (isLoading) {
        return <div>Wait, the tool is loading...</div>;
    }
    const CropButton = styled(Button)`
      transition: transform 0.2s ease-in-out;
      background-color: black;
      color:black;
      &:hover,
      &:focus {
        transform: scale(1.1);
      }
    `;

    return (

        <><Watermark />
            <div className="selection-container">
                <div className="selection-inner-container">
                    <img src="https://w7.pngwing.com/pngs/441/849/png-transparent-common-sunflower-cartoon-drawing-blooming-sunflowers-poster-natural-sunflower.png" alt="logo" className="logo" />
                    <animated.div style={fadeIn}>
                        <Typography className="selection-title" variant="h4">Sunflower Dashboard</Typography>
                        <Typography className="selection-subtitle" variant="h6">Select a crop to continue</Typography>
                    </animated.div>

                    <animated.div style={fadeIn}>
                        <Grid container spacing={2}>
                            {[
                                { name: 'Sunflower', logo: 'https://png.pngtree.com/png-clipart/20190417/ourmid/pngtree-yellow-hand-painted-cartoon-sunflower-clipart-png-image_957610.jpg' },
                                { name: 'Canola', logo: 'https://png.pngtree.com/element_our/20190523/ourmid/pngtree-hand-drawn-canola-flower-cartoon-illustration-image_1082747.jpg' },
                                { name: 'Soybean', logo: 'https://p7.hiclipart.com/preview/500/524/41/soybean-meal-soy-milk-edamame-food-others.jpg' },
                            ].map((crop) => (
                                <Grid key={crop.name} item xs={4}>
                                    <CropButton
                                        variant="contained"
                                        onClick={() => handleCropSelection(crop.name)}
                                        className="animated-button"
                                    >
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <img src={crop.logo} className="crop-logo" />
                                            <div>{crop.name}</div>
                                        </div>
                                    </CropButton>
                                </Grid>
                            ))}
                        </Grid>
                    </animated.div>
                </div>
            </div>
        </>
    );
}
