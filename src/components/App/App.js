import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Bars } from 'react-loader-spinner';
import Layout from '../Layout/Layout';
import RequireAuth from '../RequireAuth/RequireAuth';
import { AuthBoxProvider, AuthProvider } from '../../context';
import { pageNames } from '../../utils/constants';
import './App.css';

const lazyImport = (pageName) =>
  lazy(() => import(`../../views/${pageName}/${pageName}Page/${pageName}Page`));

const lazyLoadedPages = pageNames.reduce((acc, curName) => {
  acc[`${curName}Page`] = lazyImport(curName);

  return acc;
}, {});

const {
  HomePage,
  AlbumPage,
  ArtistPage,
  AuthPage,
  LandingPage,
  GenrePage,
  GenresPage,
  LibraryPage,
  NotFoundPage,
} = lazyLoadedPages;

function App() {
  return (
    <AuthProvider>
      <AuthBoxProvider>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense
                fallback={
                  <Bars
                    height="80"
                    width="80"
                    color="#1AB26B"
                    ariaLabel="bars-loading"
                    wrapperClass="spinner"
                    visible={true}
                  />
                }
              >
                <LandingPage />
              </Suspense>
            }
          />
          <Route
            path="/auth"
            element={
              <Suspense
                fallback={
                  <Bars
                    height="80"
                    width="80"
                    color="#1AB26B"
                    ariaLabel="bars-loading"
                    wrapperClass="spinner"
                    visible={true}
                  />
                }
              >
                <AuthPage />
              </Suspense>
            }
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
