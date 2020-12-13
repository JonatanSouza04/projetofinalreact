import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';

import { MoviesService } from '../../services/MoviesService';
import { CardGroup, Card } from 'react-bootstrap';

const Videos = (props) => {

    const [videos, setVideos]   = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      
        const fetchVideosMovies  = async () => {
             
             setLoading(true);

             const dados = await MoviesService.getVideosMovies(props.id); 

             setVideos(dados.data.results);

             setLoading(false);

        }

        fetchVideosMovies();
     }, []);   

    if(loading)
    return (<div>Carregando...</div>)

    return(
          
        <CardGroup>
           
          {videos.length !== undefined && videos.map(item => (
            <div>
             <Card key={item.id}>
                 <ReactPlayer url={MoviesService._withBaseUrlYoutube(item.key)} />
             </Card>
             </div>   
          ))} 
        </CardGroup>     
    )
}

export default Videos;


