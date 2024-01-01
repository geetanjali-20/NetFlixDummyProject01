import React, {useState, useEffect} from 'react'
import axios from './axios';
import requests from './request';
import './banner.css';


function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals)
        setMovie(request.data.results[
            Math.floor(Math.random()* request.data.results.length-1)
        ]
            
        );
        return request;
      }
    
      fetchData();
      
    }, []);
    
    console.log(movie);

    const truncateString = (string = '', maxLength = 50) => 
  string.length > maxLength 
    ? `${string.substring(0, maxLength)}…`
    : string


  return (
    <header className='banner'
        style={{
            backgroundSize: "cover",
            backgroundImage: `url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`,
            backgroundPosition: "center center",
        }}>
        <div className="banner__contents">
            <h1 className='banner__title'>{movie.title|| movie.name || movie.orignal_name}</h1>
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">MyList</button> 
            </div>

        <h1 className='banner__description'>
            {
                truncateString(movie.overview,150)
                
            }

        </h1>
        </div>
    </header>
  )
}

export default Banner