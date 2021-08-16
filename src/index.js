import React from 'react';
import ReactDOM from 'react-dom';
import  Header from './common/header/Header';
import  Home from './screens/home/Home.js';
import  SingleLineImageList from './Imagelist.js';
import ReleasedMovies from './Releasedmovies.js';
import Details from './Details.js';
import {Link} from 'react-dom';
import './index.css';



ReactDOM.render(
  <div>
    <Header />
    <Home />
    <SingleLineImageList />
   <ReleasedMovies />
   <Details />
  
  </div>
 ,
  document.getElementById('root')
);
  
  


