import "./index.css"
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom";
const MovieList = ()=>{
    const {activevalue} = useParams();
    const [movies, setMovies] = useState([]);
    const api_key = 'b78ef2fbe6614daa6210c140576bf423';
    useEffect(()=>{
        const fetchData = async () => {
            let url;
            if (activevalue === "POPULAR")
                url = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&language=en-US&page=1`;
            else if (activevalue === "TOP_RATED")
                url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${api_key}&language=en-US&page=1`;
            else if (activevalue === "UPCOMING")
                url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${api_key}&language=en-US&page=1`;
            else
                url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${activevalue}&page=1`
            let options = {
                method: 'GET',
            }
            const response = await fetch(url, options);
            const data = await response.json();
            setMovies(data.results);
        }
        fetchData();
    }, [activevalue]);
    
    return(
        <ul className="movie-list">
            {movies.map((eachMovie)=>{
                const {poster_path, original_title, id, vote_average} = eachMovie;
                const imgUrl = "https://image.tmdb.org/t/p/w500"+poster_path;
                return(
                    <li key={id} className="movie-list-item">
                        <Link to={`/movie/${id}`}>
                            <img src={imgUrl} alt={original_title} className="movie-img"/>
                            <h2 className="title">{original_title}</h2>
                            <p className="rating">Rating: {vote_average}</p>
                        </Link>
                    </li>
                )
            })}
        </ul>
    )
}

export default MovieList