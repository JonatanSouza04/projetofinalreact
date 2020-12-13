import React, { useState, useEffect } from "react";
import { useMovies } from '../../services/Movies';
import MoviesItem from '../MoviesItem';
import { Link } from 'react-router-dom';

import { CardDeck, Spinner } from 'react-bootstrap';

export const MoviesList = () => {

  const movies = useMovies([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
  
         async function getDados(){

            setLoading(true); // Forçar um loading
            setTimeout(() => {
              setLoading(false)
            },500);         
     }
  
    
    getDados();

  }, [])



  if(loading)
  return(
      <Spinner animation="border" variant="light" />
  )

  return (
       <CardDeck>
         {movies.map(item => {
              return <MoviesItem key={item.id} item={item}/>
         })}
       </CardDeck>
  );
};

export default MoviesList;