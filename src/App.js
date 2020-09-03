import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { omdbAxios } from './axios';
import OMDBSearch from './omdb/omdb-search';
import {faSearch,faTrashAlt,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

library.add(faSearch,faTrashAlt,faPlusCircle);

function App() {

  
  const [src,setSrc] = useState('');
  const [poster,setPoster] = useState('');
  useEffect(() => {
    const fetchData = ()=> {
      omdbAxios.get('',{
       params:{
        't' :'blood diamond',
        'y':'2006',
        'apikey' :'b8d6d204'
        
       }
     }).then(res => {
       console.log(res.data.Poster);
       setPoster(res.data.Poster);
       fetch(res.data.Poster).then(r => {
         return r.blob();
       }).then(b => {
       const reader = new FileReader();
       reader.readAsDataURL(b);
       reader.onload = (e) => {
        // console.log(e.target.result);
        setSrc(e.target.result);
       }
       })}).catch(e => {
       console.log(e);
     });
    };
    fetchData();
  

  },[])
  return (
    <div className="App">
      <header>
        <OMDBSearch/>
      </header>
    </div>
  );
}

export default App;
