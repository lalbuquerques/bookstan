import React from 'react';

const BookList = ({ livros, onDelete, onEdit }) => {
  return (
    <div>
      <h2>Livros cadastrados</h2>
      <ul>
        {livros.map((livro, index) => (
          <li key={index}>
            <strong>{livro.titulo}</strong> — {livro.autor} ({livro.genero}) em {livro.data}
            <div>
              <button onClick={() => onEdit(index)}>Editar</button>
              <button onClick={() => onDelete(index)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
