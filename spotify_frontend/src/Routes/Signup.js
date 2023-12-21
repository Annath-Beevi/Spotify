import { Icon } from '@iconify/react';
import TextInput from '../Components/shared/TextInput';
import PasswordInput from '../Components/shared/PasswordInput';
import { Link } from 'react-router-dom';

const SignupComponent = () => {

    return (
        <div className="w-full h-full flex flex-col items-center bg-lightblack">
            <div className='logo p-7 w-full flex bg-black'>
                <Icon icon="logos:spotify" width="130" className='ml-4' />
            </div>
            <div className=' mt-8 px-16 rounded-xl flex items-center justify-center flex-col bg-black'>
                <div className='font-bold mb-6 mt-6 text-5xl text-white'>Sign up to start listening</div>
                <div>
                    <TextInput label="Email address" placeholder="name@domain.com" />
                    <PasswordInput label="Password" placeholder="Enter a strong password here" />
                    <TextInput label="What should we call you?" placeholder="Enter a profile name" />
                    <button className='bg-green-500 text-lg p-3 px-32 rounded-full w-full mt-8 mb-8 flex font-semibold transform hover:scale-110 motion-reduce:transform-none '>Sign up</button>
                </div>
                <div className='w-11/12 border border-gray-400 mt-3'></div>
                <div className='text-white my-8'>Already have an account? <Link to="/login" className='cursor-pointer font-semibold hover:text-green-500'>Log in here.</Link></div>
            </div>

        </div>
    )
}

export default SignupComponent