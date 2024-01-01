import React, { useState,useEffect } from 'react'
import axios from './axios';
import "./Row.css";

const baseurl = "https://image.tmdb.org/t/p/w500/";
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);

    useEffect(() =>{
        async function fetchData()
        {
            const request = await axios.get(fetchUrl);
            console.log(request.data.results);
            
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    },[fetchUrl]);
        console.table(movies);
  return (
    <div>
        <div className='row'></div>
            <h2>{title}</h2>
            <div className='row_posters'>
                {
                    movies.map(movie=>
                        (
                            <img 
                            key={movie.id}
                            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                            src={`${baseurl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
                            alt={movie.name}/>
                        ))
                }
            </div>
    </div>
  )
}

export default Row