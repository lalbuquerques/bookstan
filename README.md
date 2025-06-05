# 📚 Book Stan

**Book Stan** é um diário de leitura digital feito com React, onde o usuário pode cadastrar, visualizar, editar e excluir livros lidos. Este projeto foi desenvolvido para a disciplina de Desenvolvimento de Sistemas Front-End com foco na construção de um CRUD estático.

---

## 📦 Pré-requisitos

Antes de executar o projeto, certifique-se de ter o **Node.js** instalado na máquina.  
Você pode verificar com:

```
node -v
npm -v
```

Caso não tenha, baixe em: https://nodejs.org/

---


## 🚀 Como executar o projeto

1. **Clone ou extraia o projeto:**

   ```
   git clone https://github.com/lalbuquerques/book-stan.git  ou  extraia o .zip
   ```

2. **Abra o terminal na pasta do projeto e instale as dependências:**

   ```
   npm install
   ```

3. **Inicie o projeto:**

   ```
   npm start
   ```

4. Acesse no navegador:

   ```
   http://localhost:3000
   ```

> Obs: A pasta `node_modules` foi removida, pois não deve ser enviada na entrega. Ela será recriada ao rodar `npm install`.

---

## 🧩 Componentes

### 🔹 `NavBar`
Barra de navegação fixa no topo da aplicação, contendo links para as páginas principais: Início, Sobre, Cadastro e Livros.

### 🔹 `BookForm`
Formulário utilizado para cadastrar novos livros lidos. Contém os seguintes campos obrigatórios:
- Título
- Autor(a)
- Gênero
- Data de leitura

Inclui validação básica, garantindo que nenhum campo seja deixado em branco.

### 🔹 `BookList`
Lista todos os livros cadastrados, exibindo suas informações e fornecendo botões para **editar** (via prompt) e **excluir** cada item.

---

## 🗂️ Estrutura do projeto

```
src/
├── components/
│   ├── NavBar/
│   │   └── NavBar.js
│   ├── BookForm/
│   │   └── BookForm.js
│   └── BookList/
│       └── BookList.js
├── App.js
├── index.js
```

---

## 🧠 Decisões de desenvolvimento

- Optei por usar `react-router-dom` para implementar a navegação entre páginas.
- O estado dos livros é mantido via `useState`, de forma estática (em memória), como proposto para esta fase do projeto.
- A edição foi feita de forma simplificada com `prompt()` para facilitar a implementação da fase 1, sem necessidade de múltiplas rotas ou formulários mais complexos.
- O estilo foi feito inline para manter o foco no funcionamento da aplicação e na componentização.

---

Desenvolvido por **Larissa Albuquerque** 🦋
