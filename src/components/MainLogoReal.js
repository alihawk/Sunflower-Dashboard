import Image from "next/image";
import { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import { useRouter } from 'next/router';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';


import mainlogo from "@/assets/images/mainlogo.png";
export default function MainLogoReal(props) {
    return (
        <div >
            <Image
                src={mainlogo}
                className="logo"
            />
        </div>
    );
}
