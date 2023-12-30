import './output.css'
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';
import Home from './Routes/Home';
import Firstpage from './Routes/Firstpage';
import LoggedInHomePage from './Routes/LoggedInHomepage'
import UploadSong from './Routes/UploadSong';
import MyMusic from './Routes/myMusic';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function App() {

  const [cookie, setCookie] = useCookies(["token"])

  return (
    <div className="w-screen h-screen">
      {
        cookie.token ? (
          //logged in routes
          <Routes>
            <Route path='/' element={<Firstpage />} />
            <Route path='/home' element={<LoggedInHomePage/>} />
            <Route path='/uploadsong' element={<UploadSong/>}/>
            <Route path='/myMusic' element={<MyMusic/>}/>
            <Route path='*' element={<Navigate to="/home" />} />
          </Routes>
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
