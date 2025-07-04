import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renderiza a mensagem de boas-vindas na página Home', () => {
  render(<Home />);

  const welcomeElement = screen.getByRole('heading', { name: /Bem-vindo ao Book Stan/i });
  
  expect(welcomeElement).toBeInTheDocument();
});

test('renderiza o subtítulo do diário digital', () => {
  render(<Home />);
  
  const subtitleElement = screen.getByText(/Seu diário digital de leituras./i);
  
  expect(subtitleElement).toBeInTheDocument();
});