import { Route, Routes } from 'react-router-dom';
import GenresPage from '../../views/Genres/GenresPage/GenresPage';
import HomePage from '../../views/Home/HomePage/HomePage';
import LandingPage from '../../views/Landing/LandingPage/LandingPage';
import AuthPage from '../../views/Auth/AuthPage/AuthPage';
import LibraryPage from '../../views/Library/LibraryPage/LibraryPage';
import GenrePage from '../../views/Genre/GenrePage/GenrePage';
import AlbumPage from '../../views/Album/AlbumPage/AlbumPage';
import ArtistPage from '../../views/Artist/ArtistPage/ArtistPage';
import BottomPlayerWrapper from '../BottomPlayer/BottomPlayerWrapper';
import RequireAuth from '../RequireAuth/RequireAuth';
import { AuthBoxProvider } from '../../context/AuthBoxProvider';
import { AuthProvider } from '../../context/AuthProvider';
import { PlayerProvider } from '../../context/PlayerProvider';
import './App.css';

function App() {
  return (
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
                path="/library"
                element={<LibraryPage />}
              />
              <Route
                path="/album/:albumId"
                element={<AlbumPage />}
              />
              <Route
                path="/artist/:artistId"
                element={<ArtistPage />}
              />
            </Route>
          </Routes>
          <BottomPlayerWrapper />
        </AuthBoxProvider>
      </PlayerProvider>
    </AuthProvider>
  );
}

export default App;
