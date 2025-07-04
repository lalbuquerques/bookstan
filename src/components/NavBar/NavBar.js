// src/components/NavBar/NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Book Stan 📚
        </Typography>
        <Button color="inherit" component={Link} to="/">Início</Button>
        <Button color="inherit" component={Link} to="/livros">Lista de Livros</Button>
        <Button color="inherit" component={Link} to="/cadastro">Cadastrar</Button>
        <Button color="inherit" component={Link} to="/sobre">Sobre</Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;