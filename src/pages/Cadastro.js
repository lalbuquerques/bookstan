import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../services/api';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function Cadastro() {
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    genero: '',
    data: ''
  });

  const { id } = useParams();
  const navigate = useNavigate();
  const isEditing = Boolean(id);

  useEffect(() => {
    if (isEditing) {
      api.get(`/books/${id}`)
        .then(response => {
          const bookData = {
            ...response.data,
            data: response.data.data.split('T')[0]
          };
          setForm(bookData);
        })
        .catch(err => console.error("Falha ao buscar livro", err));
    }
  }, [id, isEditing]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const method = isEditing ? 'put' : 'post';
  const url = '/books'; // ✅ sempre a mesma rota

  const payload = isEditing
    ? { ...form, id: Number(id) } // ✅ adiciona o id no corpo
    : form;

  api[method](url, payload)
    .then(() => {
      alert(`Livro ${isEditing ? 'atualizado' : 'cadastrado'} com sucesso!`);
      navigate('/livros');
    })
    .catch((err) => {
      console.error("Ocorreu um erro ao enviar para a API!", err);
    });
};


  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {isEditing ? 'Editar Livro' : 'Cadastrar Livro'}
      </Typography>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
      >
        <TextField
          label="Título"
          name="titulo"
          value={form.titulo}
          onChange={handleChange}
          required
        />
        <TextField
          label="Autor(a)"
          name="autor"
          value={form.autor}
          onChange={handleChange}
          required
        />
        <TextField
          label="Gênero"
          name="genero"
          value={form.genero}
          onChange={handleChange}
          required
        />
        <TextField
          label="Data de Leitura"
          type="date"
          name="data"
          value={form.data}
          onChange={handleChange}
          required
          InputLabelProps={{ shrink: true }}
        />
        <Button variant="contained" type="submit">
          {isEditing ? 'Salvar Alterações' : 'Cadastrar'}
        </Button>
      </Box>
    </Container>
  );
}

export default Cadastro;
