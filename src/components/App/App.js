import { Route, Routes } from 'react-router-dom';
import BottomPlayerWrapper from '../BottomPlayer/BottomPlayerWrapper';
import {
  HomePage,
  AlbumPage,
  ArtistPage,
  AuthPage,
  LandingPage,
  GenrePage,
  GenresPage,
  LibraryPage,
  NotFoundPage,
} from '../../views';
import Layout from '../Layout/Layout';
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
              <Route element={<Layout />}>
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
            </Route>
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
          <BottomPlayerWrapper />
        </AuthBoxProvider>
      </PlayerProvider>
    </AuthProvider>
  );
}

export default App;
