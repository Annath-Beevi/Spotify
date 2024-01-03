import React, { useContext, useLayoutEffect, useRef, useState } from 'react'
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import { Howl, Howler } from "howler";
import songContext from '../contexts/songContext';


export const LoggedInContainer = ({ children, curActiveScreen }) => {



    const { 
        currentSong, 
        setCurrentSong, 
        soundPlayed, 
        setSoundPlayed, 
        isPaused, 
        setIsPaused
    } = useContext(songContext)

    const firstUpdate = useRef(true)

    useLayoutEffect(() => {
        if (firstUpdate.current) {
            firstUpdate.current = false;
            return;
        }

        if (!currentSong) {
            return
        }
        changeSong(currentSong.track)
    }, [currentSong && currentSong.track])

    const playSound = () => {
        if (!soundPlayed) {
            return
        }
        soundPlayed.play()
    }

    const changeSong = (songSrc) => {
        if (soundPlayed) {
            soundPlayed.stop();
        }
        let sound = new Howl({
            src: [songSrc],
            html5: true,
        });
        setSoundPlayed(sound)
        sound.play()
        setIsPaused(false)
    }

    const pauseSound = () => {
        soundPlayed.pause()
    }

    const togglePlayPause = () => {
        if (isPaused) {
            playSound()
            setIsPaused(false)
        }
        else {
            pauseSound()
            setIsPaused(true)
        }
    }

    return (
        <div className='h-full w-full bg-app-black'>
            <div className={`${currentSong ? "h-9/10" : "h-full"} w-full flex`}>
                {/* This first div will be the left panel */}
                <div className='h-ful w-1/5 bg-black flex flex-col justify-between pb-10'>
                    <div>
                        <div className='logoDiv p-6'>
                            <img src={spotify_logo} alt='spotify logo' width={125} />
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"material-symbols:home"}
                                displayText={"Home"}
                                targetLink={"/home"}
                                active={curActiveScreen === "home"}
                            />
                            <IconText
                                iconName={"material-symbols:search-rounded"}
                                displayText={"Search"}
                                active={curActiveScreen === "search"}
                            />
                            <IconText
                                iconName={"bx:library"}
                                displayText={"Library"}
                                active={curActiveScreen === "library"}
                            />
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
                                targetLink="/myMusic"
                                active={curActiveScreen === "myMusic"}
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
                    <div className='content p-8 pt-0 overflow-auto'>
                        {children}
                    </div>
                </div>
            </div>
            {/* This div is the current playing song */}
            {currentSong && (
                <div className='w-full h-1/10 bg-black bg-opacity-30 text-white flex items-center px-4'>
                    <div className='w-1/4 flex items-center'>
                        <img src={currentSong.thumbnail} alt='cuurentSongThumbnail'
                            className='h-14 w-14 rounded' />
                        <div className='pl-4'>
                            <div className='text-sm hover:underline cursor-pointer'>{currentSong.name}</div>
                            <div className='text-xs text-gray-500 hover:underline cursor-pointer'>{currentSong.artist.firstName + " " + currentSong.artist.lastName}</div>
                        </div>
                    </div>
                    <div className='w-1/2 flex justify-center h-full flex-col items-center'>
                        <div className='flex w-1/3 justify-between items-center'>
                            {/* Controls for the playing song go here */}
                            <Icon
                                icon="ci:shuffle"
                                fontSize={27}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                            <Icon
                                icon="ic:sharp-skip-previous"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                            <Icon
                                icon={isPaused ? "ic:baseline-play-circle" : "ic:baseline-pause-circle"}
                                fontSize={45}
                                className='cursor-pointer text-gray-500 hover:text-white'
                                onClick={togglePlayPause}
                            />
                            <Icon
                                icon="ic:sharp-skip-next"
                                fontSize={30}
                                className='cursor-pointer text-gray-500 hover:text-white' />
                            <Icon
                                icon="ic:baseline-repeat"
                                fontSize={27}
                                className='cursor-pointer text-gray-500 hover:text-white'
                            />
                        </div>
                        {/* <div></div> */}
                    </div>
                    <div className='w-1/4 flex justify-end'>

                    </div>
                </div>
            )}
        </div>
    )
};

export default LoggedInContainer
