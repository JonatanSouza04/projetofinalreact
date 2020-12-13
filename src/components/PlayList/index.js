import React, { useState, useEffect } from "react";
import { MoviesService } from '../../services/MoviesService'
import MoviesItem from '../MoviesItem';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { Alert, Button, Spinner  } from 'react-bootstrap';

export const PlayList = () => {

  const [movies, setMovies]   = useState([]);
  const [loading, setLoading] = useState(true);
  const playListReducer = useSelector((state) => state.playlist);


  useEffect(() => {
  
        async function getDados(){

            setLoading(true);

            let _movies = await MoviesService.getPopularMovies();

             if(_movies.data.results !== undefined)
             setMovies(_movies.data.results);
    
 
            setLoading(false)
       
        }
  
    
    getDados();

  }, [])



  if(loading)
  return(
    <Spinner animation="border" variant="light" />
  )
  

  return (

    <div style={{flex:1,justifyContent: 'center', alignItems: 'center'}}>

       <br />

       <Button href='/'>Voltar</Button><br /><br />

       {movies.filter(item => playListReducer.movies.indexOf(item.id) !== -1 ).length === 0 &&
           <Alert variant='info'>
              Nenhuma PlayList configurada
           </Alert>
        }
       <div className="row">
         {movies.filter(item => playListReducer.movies.indexOf(item.id) !== -1 ).map(item => {
              return <MoviesItem key={item.id} item={item}/>
         })}
       </div>
    </div>

  );
};


export default React.memo(PlayList);
