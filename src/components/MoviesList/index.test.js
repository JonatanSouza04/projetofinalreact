import React from 'react';
import { render, screen } from '@testing-library/react';
import { useMovies } from '../../services/Movies';

import '@testing-library/jest-dom/extend-expect';

import MoviesList from './index.js';

render(<MoviesList />);

test('Movies Details Loading ', async () => {

      const linkElement = screen.getByText(/Carregando/i);
      expect(linkElement).toBeInTheDocument();

})

test('Movies Details My List ', async () => {
      await setTimeout(() => {
            const linkElement = screen.getByText(/Minha/i);
            expect(linkElement).toBeInTheDocument();
      },3000);
})

test('Movies Details Array Movies ', async () => {
      await setTimeout(() => {
            expect(useMovies()).toBe([]);
      },3000);
})
