import './output.css'
import { useState } from "react";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';
import Firstpage from './Routes/Firstpage';
import LoggedInHomePage from './Routes/User/LoggedInHomepage'
import UploadSong from './Routes/UploadSong';
import MyMusic from './Routes/myMusic';
import songContext from './contexts/songContext';
import SearchPage from './Routes/User/SearchPage';
import Library from './Routes/User/Library';
import SinglePlaylistView from './Routes/User/SinglePlaylistView';
import ArtistHome from './Routes/Artist/ArtistHome';
import ArtistLibrary from './Routes/Artist/ArtistLibrary';
import ArtistSearchPage from './Routes/Artist/ArtistSearchPage';
import ArtistSinglePlaylistView from './Routes/Artist/ArtistSinglePlaylistView';
import LikedSongs from './Routes/User/LikedSongs';
import ArtistLikedSongs from './Routes/Artist/LikedSongs';
import Dashboard from './Routes/Admin/Dashboard';
import Users from './Routes/Admin/Users';
import Songs from './Routes/Admin/Songs';
import Playlists from './Routes/Admin/Playlists';
import AdminLikedSongs from './Routes/Admin/LikedSongs';
import AdminSongUpload from './Routes/Admin/AdminSongUpload';


function App() {

  const [currentSong, setCurrentSong] = useState(null);
  const [soundPlayed, setSoundPlayed] = useState(null);
  const [isPaused, setIsPaused] = useState(true);
  const [cookie, setCookie] = useCookies(["token"])

  return (
    <div className="w-screen h-screen font-poppins">
      {
        cookie.token ? (
          //logged in routes
          <songContext.Provider
            value={{
              currentSong,
              setCurrentSong,
              soundPlayed,
              setSoundPlayed,
              isPaused,
              setIsPaused,
            }}
          >
            <Routes>
              <Route path='/' element={<Firstpage />} />
              <Route path='/login' element={<LoginComponent />} />
              <Route path='/home' element={<LoggedInHomePage />} />
              <Route path='/artistHome' element={<ArtistHome />} />
              <Route path='/uploadsong' element={<UploadSong />} />
              <Route path='/myMusic' element={<MyMusic />} />
              <Route path='/search' element={<SearchPage />} />
              <Route path='/library' element={<Library />} />
              <Route path='/playlist/:playlistId' element={<SinglePlaylistView />} />
              <Route path='artistLibrary' element={<ArtistLibrary/>}/>
              <Route path='artistSearch' element={<ArtistSearchPage/>}/>
              <Route path='/playlist/:playlistId' element={<ArtistSinglePlaylistView/>}/>
              <Route path='/likedSongs' element={<LikedSongs/>}/>
              <Route path='/artistLikedSongs' element={<ArtistLikedSongs/>}/>
              <Route path='/dashboard' element={<Dashboard/>}/>
              <Route path='/users' element={<Users/>}/>
              <Route path='/songs' element={<Songs/>}/>
              <Route path='/playlist' element={<Playlists/>}/>
              <Route path='/adminLikedSongs' element={<AdminLikedSongs/>}/>
              <Route path='/adminuploadsong' element={<AdminSongUpload/>}/>
              <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          //logged out routes
          <Routes>
            <Route path='/' element={<Firstpage />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/signup' element={<SignupComponent />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        )
      }

    </div>
  );
}

export default App;
