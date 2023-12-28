import { Icon } from '@iconify/react';
import TextInput from '../Components/shared/TextInput';
import PasswordInput from '../Components/shared/PasswordInput';
import { Link } from "react-router-dom"

const LoginComponent = () => {

    return (
        <div className="w-full h-full flex flex-col items-center bg-lightblack ">
            <div className='logo p-7 w-full flex'>
                <Icon icon="logos:spotify" width="130" className='ml-4' />
            </div>
            <div className='py-6 flex items-center justify-center flex-col'>
                <div className='font-bold mb-6 mt-6 text-4xl text-white'>Log in to Spotify</div>
                <div>
                    <TextInput label="Email or username" placeholder="Email or username" />
                    <PasswordInput label="Password" placeholder="Password" />
                    <div className=" w-full flex items-center justify-center my-8">
                        <a href='#' className='text-white cursor-pointer font-semibold hover:text-green-500 ml-6 mr-6'>Forgot your password?</a>
                        <button className="bg-green-500 font-semibold p-3 px-10 rounded-full">
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