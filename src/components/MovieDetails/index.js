import "./index.css"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";

const MovieDetails = ()=>{
    const {id} = useParams();
    const api_key = "b78ef2fbe6614daa6210c140576bf423";
    const [movieDetails, setMovieDetails] = useState({});
    const [movieCast, setMovieCast] = useState([]);
    useEffect(()=>{
        const fetchData =  async ()=> {
            let url_1 = `https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}&language=en-US`;
            let url_2 = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${api_key}&language=en-US`;
            const response_1 = await fetch(url_1);
            const data_1 = await response_1.json();
            setMovieDetails(data_1);
            const response_2 = await fetch(url_2);
            const data_2 = await response_2.json();
            setMovieCast(data_2.cast);
        };
        fetchData();
    }, [id]);

    return(
        <div className="bg-cont">
            <div className="movie-details-cont">
                <div className="left-card">
                    <div className="left-top-card">
                        <img src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`} alt={movieDetails.original_title} className="pos-img"/>
                        <div>
                            <h1 className="movie-title">{movieDetails.original_title}</h1>
                            <p className="rating-text">Rating: {movieDetails.vote_average}</p>
                            <div className="runtime-cont">
                                <p className="movie-runtime">{movieDetails.runtime} mins</p>
                                <p className="movie-genre">{movieDetails.genres.map((genre)=>genre.name)}</p>
                            </div>
                            <p className="movie-release-date">Release Date: {movieDetails.release_date}</p>
                        </div>
                    </div>
                    <h2 className="overview-head">Overview</h2>
                    <p className="overview">{movieDetails.overview}</p>
                </div>
                <img src={`https://image.tmdb.org/t/p/w500${movieDetails.backdrop_path}`} alt={movieDetails.original_title} className="bd-img"/>
            </div>
            <h2 className="cast-head">Cast</h2>
            <ul className="cast-list">
                {movieCast.map((eachObj)=>{
                    const {id, name, character, profile_path} = eachObj;
                    return(
                        <li key={id} className="cast-item">
                            <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} className="profile"/>
                            <p className="name">{name}</p>
                            <p className="character">Character: {character}</p>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default MovieDetails;