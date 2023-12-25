import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const MovieDetails = () => {
    const {id} = useParams();
    const {data: movie, error, isPending} = useFetch('http://localhost:8000/movies/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/movies/' + movie.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/');
        })
    }

    return (
        <div className="movie-details">
            {isPending && <div>Loading...</div>}
            {movie && (
                <article>
                    <h2>{movie.title}</h2>
                    <p>Next Playing Time: {movie.time}</p>
                    <div>{movie.summary}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default MovieDetails;