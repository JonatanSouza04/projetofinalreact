import { useState, useEffect } from 'react';

import { MoviesService } from './MoviesService'

export const useRecommendationMovies = (id) => {

      const [recommendations, setRecommendation] = useState([]);

      useEffect(() => {
      
          const fetchRecommendationMovies  = async () => {
               const dados = await MoviesService.getRecommendationMovies(id); 
               setRecommendation(dados.results);
          }

          fetchRecommendationMovies();
       }, []);

     return recommendations;
}
