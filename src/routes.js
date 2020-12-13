import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import  MoviesList  from './components/MoviesList';
import  MoviesDetail  from './components/MoviesDetail';
import PlayList from './components/PlayList';

export const Routes = () => (
    
    <Fragment>
        <Route path="/" exact component={MoviesList} />
        <Route path="/movie/:id" component={MoviesDetail} />
        <Route path="/playlist" component={PlayList} />

    </Fragment>
      
)