import React, { useState, useEffect } from "react";

const ImageCarousel = () => {
  const images = ["/r1.png", "/r2.png", "/r3.png"];
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState('forward'); // 'forward' o 'backward'

  // Funciones para la navegación manual
  const nextImage = () => {
    setIndex((prev) => Math.min(prev + 1, images.length - 1));
  };

  const prevImage = () => {
    setIndex((prev) => Math.max(prev - 1, 0));
  };

  // useEffect para el auto-slide con efecto "rebote"
  useEffect(() => {
    const autoSlide = setInterval(() => {
      if (direction === 'forward') {
        if (index === images.length - 1) {
          setDirection('backward');
          prevImage();
        } else {
          nextImage();
        }
      } else { // direction is 'backward'
        if (index === 0) {
          setDirection('forward');
          nextImage();
        } else {
          prevImage();
        }
      }
    }, 9000);

    return () => clearInterval(autoSlide);
  }, [index, direction]);

  
  // --- Lógica de Posicionamiento con Porcentajes ---
  const slideWidth = 90; // Ancho de cada slide en %
  const gap = 2; // Espacio entre slides en %

  let translateXValue;
  
  // Caso 1: Primera imagen (se alinea a la izquierda)
  if (index === 0) {
    translateXValue = '0%';
  
  // Caso 2: Última imagen (se alinea a la derecha)
  } else if (index === images.length - 1) {
    const totalContentWidth = (images.length * slideWidth) + ((images.length - 1) * gap);
    const offset = totalContentWidth - 100; // 100% es el ancho del contenedor
    translateXValue = `-${offset}%`;

  // Caso 3: Imágenes de en medio (se centran)
  } else {
    const offsetToCenter = (100 - slideWidth) / 2;
    const jump = slideWidth + gap;
    translateXValue = `calc(${offsetToCenter}% - ${index * jump}%)`;
  }
  
  const styles = {
    carousel: {
      width: "100%", // Usamos 100% para evitar problemas con la barra de scroll
      overflow: "hidden",
      position: "relative",
    },
    carouselImages: {
      display: "flex",
      gap: `${gap}%`,
      transition: "transform 0.7s ease-in-out",
      transform: `translateX(${translateXValue})`,
    },
    imageContainer: {
      width: `${slideWidth}%`,
      flexShrink: 0,
      height: "auto",
    },
    image: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: 'block',
      borderRadius: "12px",
      boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
    },
    button: {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      backgroundColor: "rgba(255, 255, 255, 0.7)",
      color: "#333",
      border: "none",
      fontSize: "2rem",
      cursor: "pointer",
      borderRadius: "50%",
      width: "45px",
      height: "45px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      transition: "background-color 0.3s, opacity 0.3s",
      userSelect: "none",
      zIndex: 2,
      opacity: 1,
    },
    prev: { left: "20px" },
    next: { right: "20px" },
  };

  return (
    <div style={styles.carousel}>
      <div style={styles.carouselImages}>
        {images.map((src, i) => (
          <div key={i} style={styles.imageContainer}>
             <img src={src} alt={`Slide ${i + 1}`} style={styles.image} />
          </div>
        ))}
      </div>

      <button 
        style={{ ...styles.button, ...styles.prev, opacity: index === 0 ? 0.3 : 1 }} 
        onClick={prevImage}
        disabled={index === 0}
      >
        &#10094;
      </button>
      <button 
        style={{ ...styles.button, ...styles.next, opacity: index === images.length - 1 ? 0.3 : 1 }} 
        onClick={nextImage}
        disabled={index === images.length - 1}
      >
        &#10095;
      </button>
    </div>
  );
};

export default ImageCarousel;