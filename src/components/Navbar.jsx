import * as React from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const pages = [
  { label: 'INICIO', path: '/' },
  { label: 'TAQUILLA', path: '/taquilla' },
  { label: 'TALLERES', path: '/talleres' },
  { label: 'OBSERVATORIO', path: '/observatorio' },
  { label: 'DOMO DIGITAL', path: '/domo-digital' },
  { label: 'CONFERENCIAS', path: '/conferencias' },
  { label: 'NOTICIAS', path: '/noticias' },
  { label: 'NOSOTROS', path: '/nosotros' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#F1F8FD',
        width: '100%',
        height: '129px',
        overflow: 'hidden',
        padding: '20px',
      }}
    >
      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ px: { xs: 2, md: 5 } }}>
          {/* Logos (desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/c2.png" alt="Logo 1" height="60" />
            </Box>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/c.png" alt="Logo 2" height="50" />
            </Box>
            <Box component={Link} to="/" sx={{ display: 'flex', alignItems: 'center' }}>
              <img src="/a.png" alt="Logo 3" height="75" />
            </Box>
          </Box>

          {/* Espaciador */}
          <Box sx={{ flexGrow: 1, mr: 13 }} />

          {/* Botonera desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1.5, flexWrap: 'nowrap' }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'black',
                  fontFamily: 'NATS-Regular, helvetica',
                  fontSize: '15px',
                  textTransform: 'none',
                  whiteSpace: 'nowrap', // Evita que el texto se divida en dos líneas
                  '&:hover': { color: '#7E1128', transform: 'scale(1.05)' },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

          {/* Menú móvil */}
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton onClick={handleOpenNavMenu} sx={{ color: 'black' }}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              transformOrigin={{ vertical: 'top', horizontal: 'right' }}
              PaperProps={{ sx: { backgroundColor: '#F1F8FD' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration: 'none',
                      color: 'black',
                      fontSize: '16px',
                      '&:hover': { color: '#7E1128' },
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;