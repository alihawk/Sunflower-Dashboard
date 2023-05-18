import Image from "next/image";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


import mypic from "../src/pages/logos/mypic.png";
export default function mapImageReal(props) {
    return (
        <div >
            <Image
                src={mypic}

            />
        </div>
    );
}
