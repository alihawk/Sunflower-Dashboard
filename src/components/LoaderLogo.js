// components/LoaderLogo.js
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledMach = styled(Typography)({
    color: '#161616',
    fontWeight: 'bold',
    fontSize: '3rem', // increase the size as needed
});

const StyledVis = styled(Typography)({
    color: '#FF9900',
    fontWeight: 'bold',
    fontSize: '3rem', // increase the size as needed
});

const StyledSubtitle = styled(Typography)({
    fontSize: '1.5rem', // increase the size as needed
    fontFamily: '"DM Sans", sans-serif', // make sure to import the font in your app
});

const LoaderLogo = () => {
    return (
        <Box
            position="absolute"
            bottom="0px"
            left="50%"
            transform="translateX(-50%)"
            textAlign="center"
            p={2}
            zIndex="tooltip"
        >
            <Typography variant="h3">
                <StyledMach component="span">Mach</StyledMach>
                <StyledVis component="span">VIS</StyledVis>
            </Typography>
            <StyledSubtitle>AI for sustainability</StyledSubtitle>
        </Box>
    );
};

export default LoaderLogo;
