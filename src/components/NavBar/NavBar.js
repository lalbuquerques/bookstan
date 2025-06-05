import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#f4f4f4' }}>
      <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none' }}>
        <li><Link to="/">Início</Link></li>
        <li><Link to="/sobre">Sobre</Link></li>
        <li><Link to="/cadastro">Cadastro</Link></li>
        <li><Link to="/livros">Livros</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
