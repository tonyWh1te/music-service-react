import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenresPage from '../../views/Genres/GenresPage/GenresPage';
import HomePage from '../../views/Home/HomePage/HomePage';
import LandingPage from '../../views/Landing/LandingPage/LandingPage';
import AuthPage from '../../views/Auth/AuthPage/AuthPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
        <Route
          path="/auth"
          element={<AuthPage />}
        />
        <Route
          index
          path="/home"
          element={<HomePage />}
        />
        <Route
          path="/genres"
          element={<GenresPage />}
        />
      </Routes>
    </Router>
  );
}

export default App;
