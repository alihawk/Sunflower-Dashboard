import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import Watermark from '../../components/Watermark';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartBar } from '@fortawesome/free-solid-svg-icons';

const sections = [
    { name: 'Main', icon: faHome },
    { name: 'Visualization', icon: faChartBar },
];

const SectionCard = styled(Card)`
  transition: transform 0.2s ease-in-out;
  cursor: pointer;
  maxWidth: 300px;
    
  &:hover,
  &:focus {
    transform: scale(1.1);
  }
`;

const SelectSection = () => {
    const router = useRouter();
    const { crop, year, city, location } = router.query;

    const handleSectionSelection = (section) => {
        router.push(`/main?crop=${crop}&year=${year}&city=${city}&location=${location}&section=${section}`);
    };
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    return (<><Watermark />
        <div className="selection-container">
            <div className="selection-inner-container">
                <img src="https://w7.pngwing.com/pngs/441/849/png-transparent-common-sunflower-cartoon-drawing-blooming-sunflowers-poster-natural-sunflower.png" alt="logo" className="logo" style={{ textAlign: 'center' }} />
                <animated.div style={fadeIn}>
                    <Typography className="selection-title" variant="h4" style={{ textAlign: 'center' }}>Sunflower Dashboard</Typography>
                    <Typography className="selection-subtitle" variant="h6" style={{ textAlign: 'center' }}>Please select a section to continue</Typography>
                </animated.div>

                <animated.div style={fadeIn}>
                    <Grid container spacing={2} justifyContent="center">
                        {sections.map((section) => (
                            <Grid key={section.name} item xs={6}>
                                <SectionCard onClick={() => handleSectionSelection(section.name)} className="animated-button">
                                    <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80px' }}>
                                        <FontAwesomeIcon icon={section.icon} size="2x" color="black" />
                                        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 'semibold', fontFamily: 'DM Sans', fontSize: '1.2rem', color: 'rgb(53, 54, 53)' }}>{section.name}</Typography>
                                    </CardContent>
                                </SectionCard>
                            </Grid>
                        ))}
                    </Grid>
                </animated.div>
            </div>
        </div>
    </>
    );
};

export default SelectSection;
