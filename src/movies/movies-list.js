import React from 'react';
import classes from './movies-list.module.scss';
import MovieItem from './movie-item';


const MoviesList = React.memo(({movies}) => {
    console.log(movies);
    const addTodb = movie => {
        console.log(movie);
    };

    const  removeFromdb  = movie => {
        console.log(movie);
    };

    let moviesHtml=null;
    
    if(movies && movies.totalResults>0){
        moviesHtml = movies.Search.map(movie => (
            // <div className={classes.movie}>
            //     <a className={classes.movie_link}>
            //         <img className={classes.movie_image} src={movie.Poster} alt='N/A'/>
            //         <h3 className={classes.movie_title}>{movie.Title}</h3>
            //     </a>
            //     <div className={classes.movie_buttons}>
            //         <button onClick={()=>addTodb(movie)}><FontAwesomeIcon icon={'plus-circle'} size="2x"></FontAwesomeIcon></button>
            //         <button onClick={()=>removeFromdb(movie)}><FontAwesomeIcon icon={'trash-alt'} size="2x"></FontAwesomeIcon></button>
            //     </div>
            // </div>
                <MovieItem key={movie.imdbID} movie={movie}/>
            ));
    }

    return (
      <div className={classes.movieslist}>
             {moviesHtml}
      </div>
    );
}
)

export default MoviesList;