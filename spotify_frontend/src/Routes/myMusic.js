import React, { useState, useEffect } from 'react'
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import SingleSongCard from '../Components/shared/SingleSongCard';
import { makeAuthenticatedGETRequest } from '../utils/serverHelper';
import { Howl, Howler } from "howler";

export const MyMusic = () => {

    const [songData, setSongData] = useState([]);
    const [soundPlayed, setSoundPlayed] = useState(null)

    const playSound = (songSrc) => {
        if(soundPlayed){
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound)
        sound.play()
    }


    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/mysongs"
            );
            setSongData(response.data);
        };
        getData();
    }, []);

    return (
        <div className='h-full w-full flex'>
            {/* This first div will be the left panel */}
            <div className='h-ful w-1/5 bg-black flex flex-col justify-between pb-10'>
                <div>
                    <div className='logoDiv p-6'>
                        <img src={spotify_logo} alt='spotify logo' width={125} />
                    </div>
                    <div className="py-5">
                        <IconText iconName={"material-symbols:home"} displayText={"Home"} targetLink={"/home"} />
                        <IconText iconName={"material-symbols:search-rounded"} displayText={"Search"} />
                        <IconText iconName={"bx:library"} displayText={"Library"} />
                    </div>
                    <div className="pt-4">
                        <IconText
                            iconName={"material-symbols:add-box"}
                            displayText={"Create Playlist"}
                        />
                        <IconText
                            iconName={"mdi:cards-heart"}
                            displayText={"Liked Songs"}
                        />
                        <IconText
                            iconName={"entypo:music"}
                            displayText={"My Music"}
                            active
                        />
                    </div>
                </div>
                <div className="px-5">
                    <div className="border border-gray-100 text-white w-2/5 flex px-2 py-2 rounded-full items-center justify-center hover:border-white cursor-pointer">
                        <Icon icon="material-symbols:language" />
                        <div className="ml-2 text-sm font-semibold pr-2">
                            English
                        </div>
                    </div>
                </div>
            </div>
            {/* This second div will be the right part(main content) */}
            <div className="h-full w-4/5 bg-app-black overflow-auto">
                <div className='navbar w-full h-1/10 flex items-center justify-end'>
                    <div className='border border-gray-400 text-white rounded-full px-3 py-1.5 font-bold mt-3 mr-7'>
                        <a className='hover:border-white cursor-pointer' href='https://www.spotify.com/us/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=desktop_loggedin_upgrade_button'>
                            Upgrade
                        </a>
                    </div>
                    <div className='border border-gray-400 text-white rounded-full px-3 py-1.5 font-bold mt-3 mr-7'>
                        <Link to="/uploadsong">
                            Upload Song
                        </Link>
                    </div>
                    <div className='border border-gray-100 bg-white flex items-center justify-center rounded-full w-10 h-10 font-bold mt-3 mr-28'>
                        AB
                    </div>
                </div>
                <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
                    My Songs
                </div>
                <div className="space-y-3 overflow-auto">
                    {songData.map((item) => {
                        return <SingleSongCard info={item} playSound={playSound} />;
                    })}
                </div>
            </div>
        </div>
    )
}

export default MyMusic