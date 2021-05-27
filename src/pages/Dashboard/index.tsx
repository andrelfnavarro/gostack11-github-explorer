import React from 'react';
import logoImg from 'assets/logo.svg';
import { FiChevronRight } from 'react-icons/fi';
import { Title, Form, Repositories } from './styles';

export const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Logo" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            alt="André Navarro"
            src="https://avatars.githubusercontent.com/u/32081314?v=4"
          />
          <div>
            <strong>andrelfnavarro/elixir_training</strong>
            <p>The Pragmatic Studio Elixir course</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            alt="André Navarro"
            src="https://avatars.githubusercontent.com/u/32081314?v=4"
          />
          <div>
            <strong>andrelfnavarro/elixir_training</strong>
            <p>The Pragmatic Studio Elixir course</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            alt="André Navarro"
            src="https://avatars.githubusercontent.com/u/32081314?v=4"
          />
          <div>
            <strong>andrelfnavarro/elixir_training</strong>
            <p>The Pragmatic Studio Elixir course</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};
