import React from 'react';
import ReactDOM from 'react-dom';
import  Header from './common/header/Header';
import  Home from './screens/home/Home.js';
import  SingleLineImageList from './Imagelist.js';
import ReleasedMovies from './Releasedmovies.js';
import {Link} from 'react-dom';
import './index.css';



ReactDOM.render(
  <div>
    <Header />
    <Home />
    <SingleLineImageList />
   <ReleasedMovies />
   <Link to='/.Details'><moviesData src={poster_url}></Link>
  
  </div>
 ,
  document.getElementById('root')
);
  
  


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

