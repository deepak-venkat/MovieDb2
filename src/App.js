import "./App.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./components/NavBar";
import MovieList from "./components/MovieList";
import MovieDetails from "./components/MovieDetails";

const App = () => {
    return(
        <div className="main-container">
            <Router>
                <NavBar/>
                <Routes>
                    <Route exact path="/:activevalue" element={<MovieList/>}/>
                    <Route path="movie/:id" element={<MovieDetails/>}/>
                </Routes>
            </Router>
        </div>
        
    )
};

export default App;
