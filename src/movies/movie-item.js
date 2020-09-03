import React from 'react';
import classes from './movie-item.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const MovieItem = ({movie}) => {
    
    const addTodb = movie => {
        console.log(movie);
    };

    const  removeFromdb  = movie => {
        console.log(movie);
    };

    return (
        movie && <div className={classes.movie}>
            <a className={classes.movie_link}>
                <img className={classes.movie_image} src={movie.Poster} alt='N/A'/>
                <h3 className={classes.movie_title}>{movie.Title}</h3>
            </a>
            <div className={classes.movie_buttons}>
                <button onClick={()=>addTodb(movie)}><FontAwesomeIcon icon={'plus-circle'} size="2x"></FontAwesomeIcon></button>
                <button onClick={()=>removeFromdb(movie)}><FontAwesomeIcon icon={'trash-alt'} size="2x"></FontAwesomeIcon></button>
            </div>
        </div>
    );
}


export default MovieItem;