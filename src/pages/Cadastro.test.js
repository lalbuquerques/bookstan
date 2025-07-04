import { render, screen, fireEvent } from '@testing-library/react';
import Cadastro from './Cadastro';
import React from 'react';

// 👇 Mock total do react-router-dom
jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  useParams: () => ({}), // Simula modo "cadastro"
}));

// 👇 Mock total da API para não carregar axios
jest.mock('../services/api', () => ({
  post: jest.fn(() => Promise.resolve()),
}));

describe('Cadastro', () => {
  test('renderiza campos do formulário', () => {
    render(<Cadastro />);

    expect(screen.getByLabelText(/Título/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Autor/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Gênero/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Data de Leitura/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Cadastrar/i })).toBeInTheDocument();
  });

  test('preenche e mantém os valores do formulário', () => {
    render(<Cadastro />);

    fireEvent.change(screen.getByLabelText(/Título/i), { target: { value: 'Livro Teste' } });
    fireEvent.change(screen.getByLabelText(/Autor/i), { target: { value: 'Autor Teste' } });
    fireEvent.change(screen.getByLabelText(/Gênero/i), { target: { value: 'Ficção' } });
    fireEvent.change(screen.getByLabelText(/Data de Leitura/i), { target: { value: '2024-06-01' } });

    expect(screen.getByLabelText(/Título/i).value).toBe('Livro Teste');
  });
});