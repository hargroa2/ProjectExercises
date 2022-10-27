import "./App.css";
import { useEffect } from "react";

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=31738fd0";

const App = () => {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="App">
      <h1>hi</h1>
    </div>
  );
};

export default App;
