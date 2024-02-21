import axios from '../../services/axios';
import React, { useEffect, useState } from 'react'
import requests from '../../services/requests';
import './coverdetails.css';
function CoverDetails(requestUrl) {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchCoverMovie() {
            const response = await axios.get(requestUrl.requestUrl);
            setMovie(response.data)
        };

        fetchCoverMovie();
    }, [requestUrl.requestUrl]);

    return (
        <div style={{  zIndex: 1, position:'relative' }}>
           
            <div
                className='cover-main'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                    backgroundPosition: "center center"
                }}
            >
                <div className='cover-contents'>
                    <h1 className='movie-title'>{movie.title || movie.name || movie.original_name}</h1>
                    <h3 className='movie-overview'>{movie.overview}</h3>

                    <div style={{ paddingTop: 8 }}>
                        <button className='btn-play'><i className="fa fa-play" ></i> Play</button>
                    </div>
                </div>
            </div>
            {/* for faded cover effect */}
            <div className='faded-bottom'></div>

        </div>
    )
}

export default CoverDetails;
