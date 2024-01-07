import React from 'react'
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';
import { useCookies } from 'react-cookie'

export const AdminLoggedInContainer = ({ children, curActiveScreen }) => {

    const [cookies, setCookie, removeCookie] = useCookies(['token']);

    const logout = () => {
        removeCookie('token');
    };

    return (
        <div className='h-full w-full bg-app-black'>

            <div className="h-full w-full flex">
                {/* This first div will be the left panel */}
                <div className='h-ful w-1/5 bg-black flex flex-col justify-between pb-10'>
                    <div>
                        <div className='logoDiv p-6'>
                            <img src={spotify_logo} alt='spotify logo' width={125} />
                        </div>
                        <div className="py-5">
                            <IconText
                                iconName={"material-symbols:home"}
                                displayText={"Dashboard"}
                                targetLink={"/dashboard"}
                                active={curActiveScreen === "dashboard"}
                            />
                            <IconText
                                iconName={"ri:user-fill"}
                                displayText={"Users"}
                                targetLink={"/users"}
                                active={curActiveScreen === "users"}
                            />
                            <IconText
                                iconName={"entypo:music"}
                                displayText={"Songs"}
                                targetLink={"/songs"}
                                active={curActiveScreen === "songs"}
                            />
                            <IconText
                                iconName={"material-symbols:add-box"}
                                displayText={"Playlists"}
                                targetLink={"/playlist"}
                                active={curActiveScreen === "playlists"}
                            />
                            <IconText
                                iconName={"mdi:cards-heart"}
                                displayText={"Liked Songs"}
                                targetLink={"/artistLikedSongs"}
                                active={curActiveScreen === "artistLikedSongs"}
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
                        <div className='border border-gray-400 text-white rounded-full px-3 py-1.5 font-semibold mt-3 mr-7'>
                            <Link to="/uploadsong">
                                Upload Song
                            </Link>
                        </div>
                        <div className='border border-gray-400 bg-white rounded-full px-3 py-1.5 mt-3 mr-28'>
                            <button className='font-semibold' onClick={() => logout()}>
                                Logout
                            </button>
                        </div>
                    </div>
                    <div className='content p-8 pt-0 overflow-auto'>
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AdminLoggedInContainer
