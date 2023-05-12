import { useRouter } from 'next/router';
import { Typography, Tab, Tabs, Box } from '@mui/material';
import React, { Suspense, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
const Wait = React.lazy(() => import('./wait'));
const Charts = React.lazy(() => import('./charts'));
const Visualization = React.lazy(() => import('./visualization'));

const Main = () => {
    const router = useRouter();
    const { crop, year, city, location, section } = router.query
    // Adding tab state
    const [value, setValue] = React.useState(() => {
        switch (section) {
            case 'Main':
                return 0;
            case 'Charts':
                return 1;
            case 'Visualization':
                return 2;
            default:
                return 0;
        }
    });
    useEffect(() => {
        switch (section) {
            case 'Main':
                setValue(0);
                break;
            case 'Charts':
                setValue(1);
                break;
            case 'Visualization':
                setValue(2);
                break;
            default:
                setValue(0);
                break;
        }
    }, [section]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>

            {/* Adding tabs */}
            <Box sx={{ width: '100%' }}>


                <div className="content-container">
                    {/* Tab content */}
                    <Suspense fallback={<div>Loading...</div>}>
                        {value === 0 && <Wait />}

                        {value === 2 && <Visualization />}
                    </Suspense>
                </div>
                <style jsx>{`
        .content-container {
        //   padding-top: 64px; /* Adjust this value based on the height of your header */
          position: relative;
          height: calc(100% - 64px); /* Adjust the value 64px based on the height of your header */
        }
      `}</style>
            </Box>
        </>
    );
};

export default Main;
