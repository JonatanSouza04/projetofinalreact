import { useState, useEffect } from 'react';

import { MoviesService } from './MoviesService'

export const useMovies = () => {

      const [movies, setMovies] = useState([]);

      useEffect(() => {
      
          const fetchMovies  = async () => {
               const dados = await MoviesService.getPopularMovies(); 
               setMovies(dados.data.results);
          }

          fetchMovies();
       }, []);

     return movies;
}
