import Image from "next/image";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


import sunflowerfields from "../src/pages/logos/sunflowerfields.png";
export default function Sunflower(props) {
    return (
        <div >
            <Image
                src={sunflowerfields}

            />
        </div>
    );
}
