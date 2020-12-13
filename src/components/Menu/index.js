import React from 'react';
import { Breadcrumb } from 'react-bootstrap';

const Menu = () => {

    return(
      <Breadcrumb>
        <Breadcrumb.Item href="/">Filmes</Breadcrumb.Item>
        <Breadcrumb.Item href="/playlist">
           PlayList
        </Breadcrumb.Item>
     </Breadcrumb>  
    )
}

export default Menu;


