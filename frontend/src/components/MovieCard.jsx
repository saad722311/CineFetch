import "../css/MovieCard.css";
import { useState } from "react";

function MovieCard({ movie }) {
    const [imageError, setImageError] = useState(false);

    function onFavClick() {
        alert("clicked");
    }

    function handleImageError() {
        setImageError(true);
    }

    return (
        <div className="movie-card">
            <div className="movie-poster">
                {imageError ? (
                    <div className="movie-poster-fallback">
                        {movie.title}
                    </div>
                ) : (
                    <img 
                        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                        alt={movie.title}
                        onError={handleImageError}
                    />
                )}
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavClick}>
                        🤍
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}

export default MovieCard;