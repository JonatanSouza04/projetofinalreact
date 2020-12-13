import { useState, useEffect } from 'react';

import { MoviesService } from './MoviesService'

export const useVideosMovies = (id) => {

      const [videos, setVideos] = useState([]);

      useEffect(() => {
      
          const fetchVideosMovies  = async () => {
               const dados = await MoviesService.getVideosMovies(id); 
               setVideos(dados.results);
          }

          fetchVideosMovies();
       }, []);

     return videos;
}
