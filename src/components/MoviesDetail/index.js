import React, { useState, useEffect } from "react";
import { useDetailMovies } from '../../services/DetailMovies';
import { MoviesService } from '../../services/MoviesService';
import { Card, Button, Spinner, Row, Col } from 'react-bootstrap';
import Videos from '../MoviesVideo';
import Recommendation from '../MoviesRecommendation';

const MoviesDetail = (props) => {
  
    const URL_IMAGE = MoviesService.getURlImg();
    const detail = useDetailMovies(props.match.params.id);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
  
      async function getDados(){

          setLoading(true)

          setTimeout(() => {
            setLoading(false);
          },500)
  
      }

  
  getDados();

}, [])    

  if(loading)
  return(
    <Spinner animation="border" variant="light" />
  )


    return (

      <Card>
        <Card.Header> <Button variant="primary" href="/">Voltar</Button> {detail !== undefined ? detail.title : ''}</Card.Header>
          <Card.Body>
          
          <Row>
               <Col>
                  <Card.Img  src={URL_IMAGE + detail.poster_path} style={{backgroundSize:'auto', width:'auto',backgroundRepeat:'no-repeat'}} />
                </Col>

                <Col>
                   <Card.Text>
                     {detail !== undefined ? detail.overview : ''}
                   </Card.Text>
                   <Videos id={detail.id} />
                </Col>

                <Col>
               
                </Col>
          </Row>


          <Recommendation id={detail.id}  />

          <div>
            <br />
            <Button variant="primary" href="/">Voltar</Button>
          </div>
        </Card.Body>


      </Card>
  
    );
  
}

export default React.memo(MoviesDetail);

