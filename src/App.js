// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from './theme';

import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Cadastro from './pages/Cadastro';
import ListaLivros from './pages/ListaLivros';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <div style={{ padding: '1rem' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/livros" element={<ListaLivros />} />
            <Route path="/editar/:id" element={<Cadastro />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
