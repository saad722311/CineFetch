import './App.css'
import MovieCard from './components/MovieCard'


function App() {
  return (
    <div>
      <MovieCard movie={{title: "s Film", release_date: "2024"}}/>
      <MovieCard movie={{title: "f Film", release_date: "2024"}}/>
    </div>
  )
}

export default App
