import { CssBaseline } from '@mui/material';
import "@/styles/globals.css";
import React, { useState, useEffect } from 'react';
import { CircularProgress, Backdrop, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import LoaderLogo from '../../components/LoaderLogo';

const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
  background: 'linear-gradient( 107deg, rgba(13,198,180,1) 8.1%, rgba(33,198,138,1) 79.5% )',
  color: '#fff',
  zIndex: theme.zIndex.drawer + 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

const StyledCircularProgress = styled(CircularProgress)({
  color: 'inherit',
  width: '80px !important',  // reduced size
  height: '80px !important', // reduced size
});

export default function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust this value to control the loading screen display duration
  }, []);

  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
      <StyledBackdrop open={loading}>
        <StyledCircularProgress />
        {/* <LoaderLogo /> */}
      </StyledBackdrop>
    </>
  );
}
