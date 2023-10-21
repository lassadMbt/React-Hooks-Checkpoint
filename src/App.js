// App.js
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Filter from '../src/components/Filter';

function App() {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({ title: '', description: '', posterURL: '', rating: 0 });
  const [filter, setFilter] = useState({ title: '', rating: 0 });

 

  const addMovie = () => {
    if (newMovie.title && newMovie.description && newMovie.posterURL && newMovie.rating) {
      setMovies([...movies, newMovie]);
      setNewMovie({ title: '', description: '', posterURL: '', rating: 0 });
    }
  };

  return (
    <div className="App">
      <h1>Movie App</h1>
      <Filter filter={filter} setFilter={setFilter} />
      <MovieList movies={movies} filter={filter} />
      <div className="add-movie">
        <h2>Add a New Movie</h2>
        <input
          type="text"
          placeholder="Title"
          value={newMovie.title}
          onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          value={newMovie.description}
          onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={newMovie.posterURL}
          onChange={(e) => setNewMovie({ ...newMovie, posterURL: e.target.value })}
        />
        <input
          type="number"
          placeholder="Rating"
          value={newMovie.rating}
          onChange={(e) => setNewMovie({ ...newMovie, rating: parseFloat(e.target.value) })}
        />
        <button onClick={addMovie}>Add Movie</button>
      </div>
    </div>
  );
}

export default App;
