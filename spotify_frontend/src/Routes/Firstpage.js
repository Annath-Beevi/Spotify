import React from 'react'
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

export const Firstpage = () => {

    const navigate = useNavigate()

    const navigateToLogin = () => {
        navigate('/login')
    }

  return (
    <div className="w-screen h-screen bg-green-400 flex justify-center items-center ">
        <Icon icon="akar-icons:spotify-fill" width={125} style={{marginTop:"-100px", marginLeft:"-50px"}}/>
        <h1 className=' font-bold text-8xl ml-6 -mt-24'>Spotify</h1>
        <div className='mt-72 -ml-96'>
        <button className='bg-black text-white p-3 px-20 rounded-full font-semibold text-lg' onClick={navigateToLogin}>Connect Spotify</button>
        </div>
        
    </div>
  )
}

export default Firstpage
