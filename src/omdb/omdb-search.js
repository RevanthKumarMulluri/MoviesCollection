import React, { useEffect, useState,useRef } from 'react';
import {omdbAxios} from '../axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import classes from './omdb-search.module.scss';
import MoviesList from '../movies/movies-list';


const OMDBSearch = ()=> {
    const [name,setName] = useState('');
    const [state,setState] = useState(false);
    const node = useRef();
    const inputFocus = useRef();
    const [movies,setMovies]=useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(name != ''){
            omdbAxios.get('', {
                params: {
                    's': name
                }
            }).then(res => {
                setMovies(res.data);
            }).catch(e => {
                console.log(e);
            });
            setName('');
            setState(false);
        }else {
           return;
        }
    }

    // On click outside, change input state to false
    const handleClick = e => {
        if (node.current.contains(e.target)) {
        // inside click
        return;
        }
        // outside click
        setState(false);
        setName('');
    };

    useEffect(() => {
        if(state){
            node.current.style.width='25rem';
        }else{
            node.current.style.width='2.5rem';
        }
        
    },[state]);

    useEffect(() => {
        // add when mounted
        document.addEventListener('mousedown', handleClick);
        // cleanup event when unmounted
        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    },[]);
    
    return (
        <React.Fragment>
            <form className={classes.search_form} ref={node} onClick={() => setState(true)} onSubmit={handleSubmit}>
                <input className={classes.search_form_input} type='text' value={name} placeholder='Search for a movie' ref={inputFocus} name='name' onChange={e => setName(e.target.value)} />
                <button className={classes.search_form_button} type='submit'><FontAwesomeIcon icon={'search'} size="2x"></FontAwesomeIcon></button>
            </form>
            <MoviesList className={classes.movieslist} movies={movies}></MoviesList>
        </React.Fragment>
    );
};


export default OMDBSearch;