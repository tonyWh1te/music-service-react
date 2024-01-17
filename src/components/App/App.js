import { Route, Routes } from 'react-router-dom';
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
import { AuthBoxProvider, AuthProvider } from '../../context';
import './App.css';

function App() {
  return (
    <AuthProvider>
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
      </AuthBoxProvider>
    </AuthProvider>
  );
}

export default App;
