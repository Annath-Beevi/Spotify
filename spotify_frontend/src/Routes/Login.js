import { Icon } from '@iconify/react';
import TextInput from '../Components/shared/TextInput';
import PasswordInput from '../Components/shared/PasswordInput';
import {Link} from "react-router-dom"

const LoginComponent = () => {

    return (
        <div className="w-full h-full flex flex-col items-center bg-lightblack ">
            <div className='logo p-7 w-full flex bg-black'>
                <Icon icon="logos:spotify" width="130" className='ml-4' />
            </div>
            <div className='bg-black mt-8 py-6 px-48 rounded-xl flex items-center justify-center flex-col'>
                <div className='font-bold mb-6 mt-6 text-5xl text-white'>Log in to Spotify</div>
                <div>
                    <TextInput label="Email or username" placeholder="Email or username" />
                    <PasswordInput label="Password" placeholder="Password" />
                    <button className='bg-green-500 text-lg p-3 px-32 rounded-full w-full mt-8 mb-8 flex font-semibold transform hover:scale-110 motion-reduce:transform-none '>Log In</button>
                    <a href='#' className='text-white cursor-pointer font-semibold hover:text-green-500 ml-16 '>Forgot your password?</a>
                </div>
                <div className='w-11/12 border border-gray-400 mt-8'></div>
                <div className='text-white my-8'>Don't have an account? <Link to="/signup" className='cursor-pointer font-semibold hover:text-green-500'>Sign up for Spotify</Link></div>
            </div>

        </div>
    )
}

export default LoginComponent