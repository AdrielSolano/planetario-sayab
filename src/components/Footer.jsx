import * as React from 'react';
import { Box, Container, Typography, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Link as RouterLink } from 'react-router-dom';

const partnerLogos = [
  { src: '/c2.png', alt: 'Logo 1', style: { height: 60 }, to: '/' },
  { src: '/c.png', alt: 'Logo 2', style: { height: 45 }, to: '/' },
  { src: '/b.png', alt: 'Logo 3', style: { height: 45 }, to: '/' },
  { src: '/a.png', alt: 'Logo 4', style: { height: 75 }, to: '/' },
  { src: '/e2.png', alt: 'Logo 5', style: { height: 75 }, to: '/' },
  { src: '/d.png', alt: 'Logo 6', style: { height: 45 }, to: '/' },
  { src: '/academia.png', alt: 'Logo 7', style: { height: 145 }, to: '/' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#F1F8FD',
        color: 'black',
        fontFamily: 'NATS-Regular, Helvetica',
        mt: 10,
        pt: 6,
        pb: 10,
        position: 'relative',
        width: '100%',
      }}
    >
      <Container maxWidth="xl" disableGutters>
        {/* LOGOS */}
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(7, minmax(80px, 1fr))',
            },
            gap: { xs: 1, sm: 2, md: 2 },
            alignItems: 'center',
            justifyItems: 'center',
            pb: 4,
            borderBottom: '1px solid rgba(0,0,0,0.12)',
            width: '100%',
            mx: 'auto',
          }}
        >
          {partnerLogos.map((logo, i) => {
            const isExternal = Boolean(logo.href);
            const Comp = isExternal ? 'a' : RouterLink;
            const navProps = isExternal
              ? { href: logo.href, target: '_blank', rel: 'noopener noreferrer' }
              : { to: logo.to || '/' };

            return (
              <Box
                key={i}
                component={Comp}
                {...navProps}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  opacity: 0.95,
                  filter: 'grayscale(0.1)',
                  transition: 'transform .2s ease, opacity .2s ease, filter .2s ease',
                  '&:hover': { transform: 'scale(1.03)', opacity: 1, filter: 'grayscale(0)' },
                }}
              >
                <Box
                  component="img"
                  src={logo.src}
                  alt={logo.alt}
                  sx={{
                    height: logo.style?.height || 45,
                    maxWidth: 160,
                    width: 'auto',
                    objectFit: 'contain',
                    display: 'block',
                  }}
                />
              </Box>
            );
          })}
        </Box>

        {/* INFO / CONTACTO / REDES */}
        <Box
          sx={{
            pt: 4,
            pb: 4,
            px: { xs: 2, sm: 4, md: 16 },
            display: 'grid',
            rowGap: 4,
            columnGap: 16,
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(12, 1fr)',
            },
            alignItems: 'start',
          }}
        >
          {/* Sobre Nosotros */}
          <Box
            sx={{
              gridColumn: { xs: '1 / -1', md: '1 / span 4' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Sobre Nosotros
            </Typography>
            <Typography variant="body2" sx={{ lineHeight: 1.7 }}>
              Planetario Sayab · Playa del Carmen <br />
              Acércate al universo a través de la ciencia y la tecnología.
            </Typography>
          </Box>

          {/* Contacto (centrado en la página) */}
          <Box
            sx={{
              gridColumn: { xs: '1 / -1', md: '5 / span 4' }, // 👈 centrado bajo el logo SAYAB
              textAlign: 'left',
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Contacto
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2 }}>
              <PhoneIcon fontSize="small" />
              <Typography variant="body2">+52 984 688 3956</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1.2 }}>
              <EmailIcon fontSize="small" />
              <Typography variant="body2">difusionsayab@gmail.com</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
              <LocationOnIcon fontSize="small" sx={{ mt: '2px' }} />
              <Typography variant="body2">
                Calle 125 Norte S/n, Lote 16, Manzana 1,<br />
                CP. 77712 Playa del Carmen, México
              </Typography>
            </Box>
          </Box>

          {/* Síguenos en */}
          <Box
            sx={{
              gridColumn: { xs: '1 / -1', md: '9 / span 4' },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
              Síguenos en
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: { xs: 'center', md: 'flex-start' } }}>
              <IconButton
                component="a"
                href="https://www.facebook.com/Planetariodeplayadelcarmen"
                target="_blank"
                sx={{ color: 'black', '&:hover': { color: '#7E1128' } }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                component="a"
                href="https://www.instagram.com/planetarioplaya/"
                target="_blank"
                sx={{ color: 'black', '&:hover': { color: '#7E1128' } }}
              >
                <InstagramIcon />
              </IconButton>
            </Box>
          </Box>
        </Box>

        {/* Barra inferior */}
        <Box
          sx={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            borderTop: '1px solid rgba(0,0,0,0.2)',
            py: 2,
            textAlign: 'center',
            backgroundColor: '#F1F8FD',
          }}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Planetario Sayab. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}
