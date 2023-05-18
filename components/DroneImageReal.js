import Image from "next/image";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


import droneImage from "../src/pages/logos/droneImage.png";
export default function DroneImageReal(props) {
    return (
        <div >
            <Image
                src={droneImage}

            />
        </div>
    );
}
