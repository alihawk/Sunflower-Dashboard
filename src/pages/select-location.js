import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import Watermark from '../../components/Watermark';
const locations = [
    'Location 1',
    'Location 2',
    'Location 3',
    'NARC',
    'Location 5',
    'Location 6',
    // Add more locations if needed
];

const LocationCard = styled(Card)`
  background-color: #E9F2F9;
  font-family: 'DM Sans', sans-serif;
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;


const SelectLocation = () => {
    const router = useRouter();
    const { crop, year, city } = router.query;

    const handleLocationSelection = (location) => {
        router.push(`/selectSection?crop=${crop}&year=${year}&city=${city}&location=${location}`);
    };

    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    return (<><Watermark />
        <div className="selection-container">
            <div className="selection-inner-container">
                <img src="https://w7.pngwing.com/pngs/441/849/png-transparent-common-sunflower-cartoon-drawing-blooming-sunflowers-poster-natural-sunflower.png" alt="logo" className="logo" />
                <animated.div style={fadeIn}>
                    <Typography className="selection-title" variant="h4">Sunflower Dashboard</Typography>
                    <Typography className="selection-subtitle" variant="h6">Please select a location to continue</Typography>
                </animated.div>

                <animated.div style={fadeIn}>
                    <Grid container spacing={2}>
                        {locations.map((location) => (
                            <Grid key={location} item xs={4}>
                                <LocationCard onClick={() => handleLocationSelection(location)}>
                                    <CardContent sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80px' }}>
                                        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'semibold' }}>{location}</Typography>


                                    </CardContent>
                                </LocationCard>
                            </Grid>
                        ))}
                    </Grid>
                </animated.div>
            </div>
        </div>
    </>
    );
};

export default SelectLocation;
