import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';
import { useSpring, animated } from 'react-spring';
import Modal from 'react-modal';
import Watermark from '../../components/Watermark';
import MainLogoReal from '../../components/MainLogoReal';

const Container = styled('div')(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '2rem',
    backgroundColor: '#F1F1F1'
}));

const ImageContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    marginTop: '2rem'
});

const Image = styled('img')({
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '0.5rem',
    cursor: 'pointer'
});

const HeadCount = styled('p')({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#384E6E',
    marginTop: '1rem'
});

const Yield = styled('p')({
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#384E6E',
    marginTop: '1rem'
});
const ModalImage = styled('img')({
    width: 'calc(100% - 20px)', // subtracting padding from total width
    height: 'calc(100% - 20px)', // subtracting padding from total height
    padding: '10px', // added padding
    backgroundColor: 'white', // added white background
    borderRadius: '0.5rem',
});


export default function Visualized() {
    const router = useRouter();
    const [selectedImage, setSelectedImage] = useState(null);
    const fadeIn = useSpring({
        from: { opacity: 0 },
        to: { opacity: 1 },
        delay: 300,
    });


    const images = router.query.images || [];

    const openModal = (image) => {
        setSelectedImage(image);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    return (<><Watermark />
        <div className="selection-container">
            <div className="selection-inner-container">
            <MainLogoReal  className="logo" />
                <animated.div style={fadeIn}>
                    <Typography className="selection-title" variant="h4">Sunflower Dashboard</Typography>
                    <Typography className="selection-subtitle" variant="h6">Visualized Fields</Typography>
                </animated.div>
                <animated.div style={fadeIn}>
                    <ImageContainer>
                        {images.map((imageName, index) => {
                            const labeledImageName = `${imageName.charAt(0)}zlabel.jpg`;
                            const labeledImageUrl = `/labels/${labeledImageName}`;
                            const headCount = Math.floor(Math.random() * 50); // replace with actual data
                            const yieldData = Math.floor(Math.random() * 40); // replace with actual data

                            return (
                                <div key={index}>
                                    <Image src={labeledImageUrl} alt={`Labeled Image ${index + 1}`} onClick={() => openModal(labeledImageUrl)} />
                                    <HeadCount>Head Count: {headCount}</HeadCount>
                                    <Yield>Yield: {yieldData}</Yield>
                                </div>
                            );
                        })}
                    </ImageContainer>
                    <Modal
                        isOpen={!!selectedImage}
                        onRequestClose={closeModal}
                        contentLabel="Image Modal"
                        style={{
                            overlay: {
                                backgroundColor: 'rgba(0, 0, 0, 0.75)'
                            },
                            content: {
                                top: '50%',
                                left: '50%',
                                right: 'auto',
                                bottom: 'auto',
                                marginRight: '-50%',
                                transform: 'translate(-50%, -50%)',
                                width: '70%',  // adjusted width
                                height: '70%', // adjusted height
                                padding: '20px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                            }
                        }}
                    >
                        <ModalImage src={selectedImage} alt="Selected image" />
                    </Modal>



                </animated.div>
            </div>
        </div>
    </>
    );
}