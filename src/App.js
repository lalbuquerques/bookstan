import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import BookForm from './components/BookForm/BookForm';
import BookList from './components/BookList/BookList';

function App() {
  const [livros, setLivros] = useState([]);

  const addLivro = (livro) => setLivros([...livros, livro]);

  const deleteLivro = (index) => {
    const novos = livros.filter((_, i) => i !== index);
    setLivros(novos);
  };

  const editLivro = (index) => {
    const novoTitulo = prompt('Novo título:', livros[index].titulo);
    if (novoTitulo) {
      const novos = [...livros];
      novos[index].titulo = novoTitulo;
      setLivros(novos);
    }
  };

  return (
    <Router>
      <NavBar />
      <div style={{ padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<h2>Bem-vindo ao Book Stan 📚✨</h2>} />
          <Route path="/sobre" element={<p>Esse sistema é um diário de leituras. Registre seus livros favoritos!</p>} />
          <Route path="/cadastro" element={<BookForm onAdd={addLivro} />} />
          <Route path="/livros" element={<BookList livros={livros} onDelete={deleteLivro} onEdit={editLivro} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
