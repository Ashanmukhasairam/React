import { useEffect, useState } from "react";
import Search from "./components/search";
import Spinner from "./components/Spinner";
import MovieCard from "./components/MovieCard";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMzIxYWI0N2FmYzc2ZWJlZjNiMjA4ODdmYzU1OGU3ZCIsIm5iZiI6MTczODEyNTM5Ny44OTkwMDAyLCJzdWIiOiI2Nzk5YjA1NWJkNzVjYWFjZGZjMGM5ODMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.NK-wB8r9-5gRhKUW-5Bt1IfSlfddiZfOcvaTJZ43yv4';

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const [movieList, setMovieList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  const fetchMovies = async () => {

    setIsLoading(true);
    setErrorMessage('');
    
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);
      console.log(response);

      console.log(response.ok);
      if (!response.ok) {
        throw new Error("Failed to fetch the movies:");
      }

      const data = await response.json();

      if (data.response === "False") {
        setErrorMessage(data.Error || 'Failed to fetch movies');
        setMovieList( []);
        return;
      }
      console.log(data);
      setMovieList(data.results || []);
    } catch (error) {
      console.log(`Error fetching movies : ${error}`);
      setErrorMessage("Error fetching movies. Please try again later...");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero Banner" />
          <h1>
            Find <span className="text-gradient">Movies</span> you'll Enjoy
            without the Hassle
          </h1>
          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </header>

        <section className="all-movies">
          <h2 className="mt-[40px]">All Movies</h2>

          {isLoading ? (
            <Spinner/> 
          ) : errorMessage ? (
            <p className="text-red-500">{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie}/>
              ))}
            </ul>
          )}
        </section>
      </div>
    </main>
  );
}

export default App;
