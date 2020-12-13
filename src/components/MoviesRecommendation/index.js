import React, { useState, useEffect } from 'react';
import { MoviesService } from '../../services/MoviesService';
import { ListGroup, Alert } from 'react-bootstrap';

const Recommendation = (props) => {

    const [recommendation, setRecommendation]   = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      
        const fetchRecommendationMovies  = async () => {
             
             setLoading(true);

             const dados = await MoviesService.getRecommendationMovies(props.id); 

             setRecommendation(dados.data.results);

             setLoading(false);

        }

        fetchRecommendationMovies();
     }, []);   

    if(loading)
    return (<div>Carregando...</div>)

    return(
      <div style={{marginTop:10}}>
        <Alert variant="success">Recomendações</Alert>   
        <ListGroup>
          {recommendation.length !== undefined && recommendation.map(item => (
             <ListGroup.Item>
                <a href={'/movie/' + item.id}> {item.title}</a>
             </ListGroup.Item>
          ))} 
        </ListGroup> 
        </div>          
    )
}

export default Recommendation;


