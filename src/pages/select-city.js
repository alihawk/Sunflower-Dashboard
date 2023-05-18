import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import MapImageReal from '../../components/mapImageReal';
import Watermark from '../../components/Watermark';
import MainLogoReal from '../../components/MainLogoReal';
<MainLogoReal className="logo" />
const cities = [
    'Lahore',
    'Islamabad',
    'Karachi',
    'Sargodha',
    'Sialkot',
    'Faisalabad',
];

const CityCard = styled(Card)`
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  background-color: #E9F2F9;

  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const CityTypography = styled(Typography)`
  font-size: 1.2rem;
`;

const MapCard = styled(Card)`
  border-radius: 20px;
  overflow: hidden;
`;

const SelectCity = () => {
    const router = useRouter();
    const { crop, year } = router.query;

    const handleCitySelection = (city) => {
        router.push(`/select-location?crop=${crop}&year=${year}&city=${city}`);
    };

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    return (<><Watermark />
        <div className="selection-container">
            <div className="selection-inner-container">
                <MainLogoReal className="logo" />
                {/* <img src="https://w7.pngwing.com/pngs/441/849/png-transparent-common-sunflower-cartoon-drawing-blooming-sunflowers-poster-natural-sunflower.png" alt="logo" className="logo" /> */}
                <Typography className="selection-title" variant="h4" align="center" sx={{ fontFamily: 'DM Serif Display, serif' }}>Sunflower Dashboard</Typography>
                <Typography className="selection-subtitle" variant="h5" align="center" gutterBottom sx={{ fontFamily: 'DM Sans', fontWeight: 'medium', textAlign: 'center' }}>
                    Please select a city to continue
                </Typography>

                <animated.div style={fadeIn}>
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item xs={12} md={6}>
                            <MapCard>
                                <MapImageReal />
                            </MapCard>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Grid container spacing={2}>
                                {cities.map((city) => (
                                    <Grid key={city} item xs={6}>
                                        <CityCard onClick={() => handleCitySelection(city)}>
                                            <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100px' }}>
                                                <CityTypography variant="h5" sx={{ textAlign: 'center', fontWeight: 'semibold' }}>{city}</CityTypography>
                                            </CardContent>
                                        </CityCard>

                                    </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Grid>
                </animated.div>
                {/* <Typography className="selection-subtitle" variant="h5" sx={{ fontFamily: 'DM Sans', fontWeight: 'medium', textAlign: 'center' }} align="center">Total yield in Pakistan for {year}: ...</Typography> */}
            </div>
        </div>
    </>
    );
};

export default SelectCity;