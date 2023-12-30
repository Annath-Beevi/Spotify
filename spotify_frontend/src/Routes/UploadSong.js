import React, { useState } from 'react'
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import TextInput from '../Components/shared/TextInput'
import { Icon } from '@iconify/react'
import CloudinaryUpload from '../Components/shared/CloudinaryUpload'
import { makeAuthenticatedPOSTRequest } from '../utils/serverHelper'
import { useNavigate } from 'react-router-dom'

export const UploadSong = () => {

    const [name, setName] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [playlistUrl, setPlaylistUrl] = useState("");
    const [uploadedSongFileName, setUploadedSongFileName] = useState();
    const navigate = useNavigate()

    const submitSong = async () => {
        const data = {name, thumbnail, track: playlistUrl};
        const response = await makeAuthenticatedPOSTRequest(
            "/song/create",
            data
        );
        if (response.err) {
            alert("Could not create song");
            return;
        }
        alert("Success");
        navigate("/home");
    };

    return (
        <div className='h-full w-full flex'>
            {/* This first div will be the left panel */}
            <div className='h-ful w-1/5 bg-black flex flex-col justify-between pb-10'>
                <div>
                    <div className='logoDiv p-6'>
                        <img src={spotify_logo} alt='spotify logo' width={125} />
                    </div>
                    <div className="py-5">
                        <IconText iconName={"material-symbols:home"} displayText={"Home"} targetLink={"/home"}/>
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
                            targetLink="/myMusic"
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
                    <div className='border border-gray-100 bg-white flex items-center justify-center rounded-full w-10 h-10 font-bold mt-3 mr-28'>
                        AB
                    </div>
                </div>
                <div className='content p-8 pt-0 overflow-auto'>
                    <div className="text-2xl font-semibold mb-5 text-white mt-8">
                        Upload Your Music
                    </div>
                    <div className="w-2/3 flex space-x-3">
                        <div className="w-1/2">
                            <TextInput
                                label="Name"
                                labelClassName={"text-white"}
                                placeholder="Name"
                                value={name}
                                setValue={setName}
                            />
                        </div>
                        <div className="w-1/2">
                            <TextInput
                                label="Thumbnail"
                                labelClassName={"text-white"}
                                placeholder="Thumbnail"
                                value={thumbnail}
                                setValue={setThumbnail}
                            />
                        </div>
                    </div>
                    <div className='py-5'>
                        {uploadedSongFileName ? (
                            <div className="bg-white rounded-full p-3 w-1/3">
                                {uploadedSongFileName.substring(0, 35)}...
                            </div>
                        ) : (
                            <CloudinaryUpload
                                setUrl={setPlaylistUrl}
                                setName={setUploadedSongFileName}
                            />
                        )}
                    </div>
                    <div
                        className="bg-white w-40 flex items-center justify-center p-2 rounded-full cursor-pointer font-bold"
                        onClick={submitSong}
                    >
                        Submit Song
                    </div>
                </div>
            </div>
        </div>
    )
};
export default UploadSong