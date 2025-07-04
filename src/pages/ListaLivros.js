import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { useNavigate } from 'react-router-dom'; 
import { Container, Typography, Table, TableHead, TableRow, TableCell, TableBody, Button } from '@mui/material';

function ListaLivros() {
  const [livros, setLivros] = useState([]);
  const navigate = useNavigate();

  const carregarLivros = () => {
    api.get('/books')
      .then((res) => setLivros(res.data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    carregarLivros();
  }, []);

  const handleDelete = (id) => {
    api.delete(`/books/${id}`)
      .then(() => carregarLivros())
      .catch((err) => console.error(err));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>Lista de Livros</Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Título</TableCell>
            <TableCell>Autor(a)</TableCell>
            <TableCell>Gênero</TableCell>
            <TableCell>Data de Leitura</TableCell>
            <TableCell>Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {livros.filter(livro => livro.titulo).map((livro) => (
            <TableRow key={livro.id}>
              <TableCell>{livro.titulo}</TableCell>
              <TableCell>{livro.autor}</TableCell>
              <TableCell>{livro.genero}</TableCell>
              <TableCell>{livro.data}</TableCell>
              <TableCell>
                <Button variant="outlined" onClick={() => navigate(`/editar/${livro.id}`)}>Editar</Button>
                <Button variant="outlined" color="error" onClick={() => handleDelete(livro.id)}>Excluir</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}

export default ListaLivros;
