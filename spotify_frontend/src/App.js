import './output.css'
import {useState} from "react";
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';
import Home from './Routes/Home';
import Firstpage from './Routes/Firstpage';
import LoggedInHomePage from './Routes/LoggedInHomepage'
import UploadSong from './Routes/UploadSong';
import MyMusic from './Routes/myMusic';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import songContext from './contexts/songContext';


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
              <Route path='/home' element={<LoggedInHomePage />} />
              <Route path='/uploadsong' element={<UploadSong />} />
              <Route path='/myMusic' element={<MyMusic />} />
              <Route path='*' element={<Navigate to="/home" />} />
            </Routes>
          </songContext.Provider>
        ) : (
          //logged out routes
          <Routes>
            <Route path='/' element={<Firstpage />} />
            <Route path='/login' element={<LoginComponent />} />
            <Route path='/home' element={<Home />} />
            <Route path='/signup' element={<SignupComponent />} />
            <Route path='*' element={<Navigate to="/" />} />
          </Routes>
        )
      }

    </div>
  );
}

export default App;
