import React, { useState } from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const slides = [
  '/r4.jpg',
  '/r5.jpg',
  '/r6.jpg',
];

function PromoCarousel() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => Math.min(prev + 1, slides.length - 1));
  };

  const prevSlide = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  const slideWidth = 90;
  const gap = 0.5;
  let translateXValue;
  
  if (slides.length > 1) {
    if (index === 0) {
      translateXValue = '0%';
    } else if (index === slides.length - 1) {
      const totalContentWidth = (slides.length * slideWidth) + ((slides.length - 1) * gap);
      const offset = totalContentWidth - 100;
      translateXValue = `-${offset}%`;
    } else {
      const offsetToCenter = (100 - slideWidth) / 2;
      const jump = slideWidth + gap;
      translateXValue = `calc(${offsetToCenter}% - ${index * jump}%)`;
    }
  } else {
    translateXValue = `${(100 - slideWidth) / 2}%`;
  }
  
  return (
    <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
      <Box sx={{
        display: 'flex',
        gap: `${gap}%`,
        transition: 'transform 0.7s ease-in-out',
        transform: `translateX(${translateXValue})`,
      }}>
        {slides.map((imageSrc, i) => (
          <Box
            key={i}
            component="img"
            src={imageSrc}
            alt={`Promoción ${i + 1}`}
            sx={{
              width: `${slideWidth}%`,
              flexShrink: 0,
              display: 'block',
              // 👇 ¡AQUÍ ESTÁ EL CAMBIO!
              aspectRatio: '970 / 150', // Proporcion de las imagenes
              objectFit: 'cover',
              borderRadius: '7px',
              boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            }}
          />
        ))}
      </Box>

      <IconButton
        onClick={prevSlide}
        disabled={index === 0}
        sx={{
          position: 'absolute', top: '50%', left: 16, transform: 'translateY(-50%)',
          color: 'white', backgroundColor: 'rgba(0,0,0,0.4)',
          opacity: index === 0 ? 0.3 : 1,
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
        }}
      >
        <ArrowBackIosNewIcon />
      </IconButton>
      <IconButton
        onClick={nextSlide}
        disabled={index === slides.length - 1}
        sx={{
          position: 'absolute', top: '50%', right: 16, transform: 'translateY(-50%)',
          color: 'white', backgroundColor: 'rgba(0,0,0,0.4)',
          opacity: index === slides.length - 1 ? 0.3 : 1,
          '&:hover': { backgroundColor: 'rgba(0,0,0,0.6)' }
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Box>
  );
}

export default PromoCarousel;