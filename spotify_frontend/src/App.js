import './output.css'
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';
import SpotifyHome from './Routes/Home';
import Firstpage from './Routes/Firstpage';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useCookies } from 'react-cookie';


function App() {

  const [cookie, setCookie] = useCookies(["token"])

  return (
    <div className="w-screen h-screen">
      {
        cookie.token ? (
          <Routes>
            <Route path='/' element={<Firstpage />} />
            <Route path='/home' element={<SpotifyHome />} />
            <Route path='*' element={<Navigate to="/home" />} />
          </Routes>
        ) : (
          <Routes>
            <Route path='/' element={<Firstpage />} />
            <Route path='/home' element={<SpotifyHome />} />
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
