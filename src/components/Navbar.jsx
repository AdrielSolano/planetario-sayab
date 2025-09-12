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
  { label: 'Inicio', path: '/' },
  { label: 'Domo Digital', path: '/domo-digital' },
  { label: 'Talleres', path: '/talleres' },
  { label: 'Conferencias', path: '/conferencias' },
  { label: 'Observatorio', path: '/observatorio' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Taquilla', path: '/taquilla' },
  { label: 'Noticias', path: '/noticias' },
];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#590303ff' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          {/* Logo grande (pantallas grandes) */}
          <Box component={Link} to="/" sx={{ display: { xs: 'none', md: 'flex' }, mr: 2 }}>
            <img src="/a.jpg" alt="Planetario Sayab" height="45" />
          </Box>

          {/* Menú hamburguesa (pantallas pequeñas) */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              PaperProps={{
                sx: {
                  backgroundColor: '#590303ff',
                  color: 'white',
                },
              }}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
              transformOrigin={{ vertical: 'top', horizontal: 'left' }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Typography
                    component={Link}
                    to={page.path}
                    sx={{
                      textDecoration: 'none',
                      color: 'inherit',
                      width: '100%',
                      '&:hover': {
                        color: '#f20c0cff',
                        transform: 'scale(1.05)',
                        transition: 'all 0.3s ease-in-out',
                      },
                    }}
                  >
                    {page.label}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* Logo pequeño (pantallas pequeñas) */}
          <Box
            component={Link}
            to="/"
            sx={{
              display: { xs: 'flex', md: 'none' },
              mr: 1,
              position: 'absolute',
              left: 120,
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <img src="/a.jpg" alt="Planetario Sayab" height="40" />
          </Box>

          {/* Botones normales (pantallas grandes) */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              marginLeft: '320px',
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: 'white',
                  display: 'block',
                  fontWeight: 'bold',
                  textTransform: 'none',
                  '&:hover': {
                    color: '#f20c0cff',
                    transform: 'scale(1.05)',
                    transition: 'all 0.3s ease-in-out',
                  },
                }}
              >
                {page.label}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
