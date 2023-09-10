import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import GenresPage from '../../views/Genres/GenresPage/GenresPage';
import HomePage from '../../views/Home/HomePage/HomePage';
import LandingPage from '../../views/Landing/LandingPage/LandingPage';
import AuthPage from '../../views/Auth/AuthPage/AuthPage';
import ProfilePage from '../../views/Profile/ProfilePage/ProfilePage';
import LibraryPage from '../../views/Library/LibraryPage/LibraryPage';
import GenrePage from '../../views/Genre/GenrePage/GenrePage';
import AlbumPage from '../../views/Album/AlbumPage/AlbumPage';
import { AuthBoxProvider } from '../../context/AuthBoxProvider';
import RequireAuth from '../RequireAuth/RequireAuth';
import { AuthProvider } from '../../context/AuthProvider';
import { PlayerProvider } from '../../context/PlayerProvider';
import './App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <PlayerProvider>
          <AuthBoxProvider>
            <Routes>
              <Route
                path="/"
                element={<LandingPage />}
              />
              <Route
                path="/auth"
                element={<AuthPage />}
              />
              <Route element={<RequireAuth />}>
                <Route
                  index
                  path="/home"
                  element={<HomePage />}
                />
                <Route
                  path="/genres"
                  element={<GenresPage />}
                />
                <Route
                  path="/genres/:genreId"
                  element={<GenrePage />}
                />
                <Route
                  path="/profile"
                  element={<ProfilePage />}
                />
                <Route
                  path="/library"
                  element={<LibraryPage />}
                />
                <Route
                  path="/album/:albumId"
                  element={<AlbumPage />}
                />
              </Route>
            </Routes>
          </AuthBoxProvider>
        </PlayerProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
