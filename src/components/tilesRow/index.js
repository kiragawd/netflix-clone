import React, { useEffect, useState } from 'react'
import axios, { imageBaseUrl } from "../../services/axios"
import { useNavigate } from "react-router-dom";
import routes from '../../utils/routes';

import "./tilesrow.css"
export default function TilesRow({ title, requestUrl, topRow}) {
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    function onPressTile(payload){
        navigate(`/details/${payload}`)
    }
    useEffect(() => {
        async function getMovies() {
            const response = await axios.get(requestUrl);
            console.log(requestUrl);
            //console.log('Response', response)
            setMovies(response.data.results);
        };
        getMovies();
    }, [requestUrl]);

    return (
        <div className='row-container'>
            <h2 className='row-title'>{title}</h2>
            <div className='tiles-row-container'>
                {movies.map(movie => (
                    <img
                        onClick={()=>onPressTile(movie.id)}
                        key={movie.id} className={`image-tile ${topRow && "image-tile-top-row"}`} 
                        src={`${imageBaseUrl}${topRow ? movie.poster_path : movie.backdrop_path || movie.poster_path}`} 
                        alt={movie.name}
                    />
                ))}
            </div>
        </div>
    )
}
