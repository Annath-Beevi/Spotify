import { Icon } from '@iconify/react';
import TextInput from '../Components/shared/TextInput';
import PasswordInput from '../Components/shared/PasswordInput';
import { Link, useNavigate } from "react-router-dom"
import { useState } from 'react';
import { useCookies } from "react-cookie"
import { makeUnauthenticatedPOSTRequest } from '../utils/serverHelper'

const LoginComponent = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookies, setCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const login = async () => {
        const data = { email, password };
        const response = await makeUnauthenticatedPOSTRequest("/auth/login", data);
        if (response && !response.err) {
            const token = response.token;
            const date = new Date();
            date.setDate(date.getDate() + 30);
            setCookie("token", token, { path: "/", expires: date });
            navigate("/home");
        } else {
            alert("Failure");
        }
    };


    return (
        <div className="w-full h-full flex flex-col items-center bg-lightblack ">
            <div className='logo p-7 w-full flex'>
                <Icon icon="logos:spotify" width="130" className='ml-4' />
            </div>
            <div className='py-6 flex items-center justify-center flex-col'>
                <div className='font-bold mb-6 mt-6 text-4xl text-white'>Log in to Spotify</div>
                <div>
                    <TextInput
                        label="Email or username"
                        placeholder="Email or username"
                        value={email}
                        setValue={setEmail} />
                    <PasswordInput
                        label="Password"
                        placeholder="Password"
                        value={password}
                        setValue={setPassword}
                    />
                    <div className=" w-full flex items-center justify-center my-8">
                        <a href='#' className='text-white cursor-pointer font-semibold hover:text-green-500 ml-6 mr-6'>Forgot your password?</a>
                        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full"
                          onClick={(e) => {
                            e.preventDefault();
                            login();
                        }}>
                            Log In
                        </button>

                    </div>

                </div>
                <div className='w-11/12 border border-gray-400 mt-8'></div>
                <div className='text-white my-8'>Don't have an account? <Link to="/signup" className='cursor-pointer font-semibold hover:text-green-500'>Sign up for Spotify</Link></div>
            </div>

        </div>
    )
}

export default LoginComponent