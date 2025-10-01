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

  const handleOpenNavMenu = (event) => setAnchorElNav(event.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#F1F8FD',
        width: '100%',     // 👈 en vez de 1505px
        height: '129px',   // 👈 tu altura se mantiene
        overflow: 'hidden', // 👈 asegura que nada se desborde
        padding: '20px',        // 👈 elimina cualquier padding
      }}
    >

      <Container maxWidth="xl" disableGutters>
        <Toolbar sx={{ px: { xs: 2, md: 10, right: 50 } }}>
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
          <Box sx={{ flexGrow: 1 }} />

          {/* Botonera desktop */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, flexWrap: 'nowrap' }}>
            {pages.map((page) => (
              <Button
                key={page.label}
                component={Link}
                to={page.path}
                onClick={handleCloseNavMenu}
                sx={{
                  color: 'black',
                  fontFamily: 'NATS-Regular, helvetica',
                  fontSize: '16px',
                  textTransform: 'none',
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
