import React, { useState } from 'react';

const BookForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    titulo: '',
    autor: '',
    genero: '',
    data: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.titulo || !form.autor || !form.genero || !form.data) {
      alert('Preencha todos os campos!');
      return;
    }
    onAdd(form);
    setForm({ titulo: '', autor: '', genero: '', data: '' });
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <input name="titulo" placeholder="Título" value={form.titulo} onChange={handleChange} />
      <input name="autor" placeholder="Autor(a)" value={form.autor} onChange={handleChange} />
      <input name="genero" placeholder="Gênero" value={form.genero} onChange={handleChange} />
      <input name="data" type="date" value={form.data} onChange={handleChange} />
      <button type="submit">Adicionar Livro</button>
    </form>
  );
};

export default BookForm;
