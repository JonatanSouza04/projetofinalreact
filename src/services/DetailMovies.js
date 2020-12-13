import { useState, useEffect } from 'react';

import { MoviesService } from './MoviesService'

export const useDetailMovies = (id) => {

      const [movies, setMovies] = useState([]);

      useEffect(() => {
      
          const fetchMovies  = async () => {
               const dados = await MoviesService.getDetailMovies(id); 
               setMovies(dados.data);
          }

          fetchMovies();
       }, []);

     return movies;
}
