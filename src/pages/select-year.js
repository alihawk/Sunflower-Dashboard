import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Typography, FormControl, Select, MenuItem } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useSpring, animated } from 'react-spring';
import Box from '@mui/material/Box';
import Watermark from '../../components/Watermark';
import mainLogo from './logos/mainlogo.png'; // Import your logo image here
import MainLogoReal from '../../components/MainLogoReal';

const years = [...Array(15).keys()].map((i) => 2009 + i);

const SelectFormControl = styled(FormControl)`
  width:250px;
  background-color: white;
  border-radius: 10px;
`;

const ConfirmButton = styled(Button)`
  transition: transform 0.2s ease-in-out;
  height:50px;
  width:125px;
  background-color: #adac65;
  color: white;
  margin-top: 20px;
  &:hover,
  &:focus {
    background-color: #58946b;
    transform: scale(1.1);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
`;

const SelectYear = () => {
    const router = useRouter();
    const { crop } = router.query;
    const [year, setYear] = useState('');

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handleYearSelection = () => {
        router.push(`/select-city?crop=${crop}&year=${year}`);
    };


    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });

    return (
        <>
            <Watermark />
            <div className="selection-container">
                <div className="selection-inner-container">
                    <MainLogoReal className="logo" /> {/* Use the local logo image here */}
                    <animated.div style={fadeIn}>
                        <Typography className="selection-title" variant="h4">Sunflower Dashboard</Typography>
                        <Typography className="selection-subtitle" variant="h6">Please select a year to continue</Typography>
                    </animated.div>

                    <animated.div style={fadeIn}>
                        <SelectFormControl variant="outlined">
                            <Select
                                value={year}
                                onChange={handleYearChange}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    Select Year
                                </MenuItem>
                                {years.map((year) => (
                                    <MenuItem key={year} value={year}>{year}</MenuItem>
                                ))}
                            </Select>
                        </SelectFormControl>
                        <Box display="flex" justifyContent="center" width="100%">
                            <ConfirmButton className='confirmButton' variant="contained" onClick={handleYearSelection}>
                                Confirm
                            </ConfirmButton>
                        </Box>
                    </animated.div>
                </div>
            </div>
        </>
    );
};

export default SelectYear;
