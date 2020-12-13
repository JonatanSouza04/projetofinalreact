import React, { useEffect, useState} from "react";
import { MoviesService } from '../../services/MoviesService'
import { Link } from 'react-router-dom';

import { setPlayList, setLike } from '../../actions/playlistActions';
import { useDispatch, useSelector } from 'react-redux';

import { Card, Button } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';

const MoviesItem = ({item, show}) => {
    const URL_IMAGE = MoviesService.getURlImg();

    const [loading,setLoading]   = useState(true);
    const dispatch        = useDispatch();
    const playListReducer = useSelector((state) => state.playlist);
    const likeListReducer = useSelector((state) => state.like);
    
    const onAdd = (id) => {
        let list = playListReducer.movies;
        list.push(id);
        dispatch(setPlayList(list));
    }

    const onDelete = (id) => {
        let list = playListReducer.movies.filter(item => item !== id);
        dispatch(setPlayList(list));
    }

    const onLike = (id) => {
        let list = likeListReducer.movies;
        list.push(id);
        dispatch(setLike(list));    
    }


    const onDeslike = (id) => {
        let list = likeListReducer.movies.filter(item => item !== id);

        console.log(id,list);

        dispatch(setLike(list));    
    }   

    useEffect(() => {
      

         async function getDados(){

              setLoading(true);
              
              setTimeout(() => {
                   setLoading(false);
              },500);             
              
         }

       getDados();  
    }, [])


    if(loading)
    return (
        <div><label></label></div>
    )

    //console.log(playListReducer.movies.indexOf(0));

    return (
     <div style={{width:350}}>
        <Card key={item.key}>
          <Card.Body>
            <Card.Img variant="top" src={URL_IMAGE + item.poster_path} />

            <Link to={'/movie/' + item.id}>
                <h4>{item.title.substr(0,30)}</h4>
                <p>Lançamento: {item.release_date}</p>
            </Link>
            </Card.Body>  

            <Card.Footer> 
            
            <div style={{display:'flex',justifyContent:'space-between'}}>
            { (playListReducer.movies.indexOf(item.id) == -1) ?
              <Button variant="success" onClick={() => onAdd(item.id)}>Adicionar Playlist</Button>
              :
              <Button variant="danger" onClick={() => onDelete(item.id)}>Remover Playlist</Button>
              }  

            { (likeListReducer.movies.indexOf(item.id) == -1) ?
               <Icon.HandThumbsUp color='black' size={20} onClick={() => onLike(item.id)}/>
               :
               <Icon.HandThumbsUp color='blue' size={20} onClick={() => onDeslike(item.id)}/>
            }

            </div>
            </Card.Footer>   
           
        </Card>  
     </div>      

 );
}

export default React.memo(MoviesItem);

