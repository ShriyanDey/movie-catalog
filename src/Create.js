import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [time, setTime] = useState('12:30');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const movie = {title, summary, time};

        setIsPending(true);

        fetch('http://localhost:8000/movies', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(movie)
        }).then(() => {
            console.log("new movie added");
            setIsPending(false);
            history.push('/');
        })

        
    }

    return ( 
        <div className="create">
            <h2>Add a New Movie</h2>
            <form onSubmit={handleSubmit}>
                <label>Movie Title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Movie Summary:</label>
                <textarea
                    required
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)} 
                ></textarea>
                <label>Movie Time:</label>
                <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="12:30">12:30</option>
                    <option value="02:45">02:45</option>
                    <option value="09:00">09:00</option>
                </select>
                {!isPending && <button>Add Movie</button>}
                {isPending && <button disabled>Adding Movie...</button>}
            </form>
        </div>
    );
}

export default Create;
