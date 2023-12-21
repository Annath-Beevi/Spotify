import './output.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginComponent from './Routes/Login';
import SignupComponent from './Routes/Signup';


function App() {
  return (
    <div className="w-screen h-screen">
      <BrowserRouter>
        <Routes>
          <Route path='/'>
            <Route path='login' element={<LoginComponent />} />
            <Route path='signup' element={<SignupComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
