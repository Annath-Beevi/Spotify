import React, { useState, useEffect } from 'react'
import AdminLoggedInContainer from '../../containers/AdminLoggedInContainer'
import {makeAuthenticatedGETRequest} from "../../utils/serverHelper";

const Dashboard = () => {

    const [users, setUsers] = useState([])
    const [userCount, setUserCount] = useState(0)
    const [songs, setSongs] = useState([])
    const [songCount, setSongCount] = useState(0)
    const [playlist, setPlaylist] = useState([])
    const [playlistCount, setPlaylistCount] = useState(0)
    const [likedSongs, setLikedSongs] = useState([])
    const [likedSongsCount, setLikedSongsCount] = useState(0)

    useEffect(() => {
        const getUserData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/auth/get/allusers"
            );
            setUsers(response);
            setUserCount(response.users.length)
        };
        getUserData();
    }, [users]);

    useEffect(() => {
        const getSongData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/allsongs"
            );
            setSongs(response);
            setSongCount(response.songs.length)
        };
        getSongData();
    }, [songs]);

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/allplaylist"
            );
            setPlaylist(response);
            setPlaylistCount(response.playlist.length)
        };
        getPlaylistData();
    }, [playlist]);

    useEffect(() => {
        const getLikedSongData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/liked/get/alllikedsongs"
            );
            setLikedSongs(response);
            setLikedSongsCount(response.liked.length)
        };
        getLikedSongData();
    }, [likedSongs]);


    return (
        <AdminLoggedInContainer curActiveScreen="dashboard">
            <div className="text-white text-xl pt-8 font-semibold">
                Dashboard
            </div>
            <div className="py-6 grid gap-20 grid-cols-5 flex items-center">
                <div className="bg-indigo-500 w-full px-28 py-16 rounded cursor-pointer">
                    <div className='text-white font-semibold text-lg -ml-8'>USERS</div>
                    <div className='text-white font-semibold text-lg -ml-3'>{userCount}</div>
                </div>
                <div className="bg-yellow-500 w-full px-28 py-16 rounded cursor-pointer">
                    <div className='text-white font-semibold text-lg -ml-9'>SONGS</div>
                    <div className='text-white font-semibold text-lg -ml-3'>{songCount}</div>
                </div>
                <div className="bg-green-500 w-full px-28 py-16 rounded cursor-pointer">
                    <div className='text-white font-semibold text-lg -ml-10'>PLAYLISTS</div>
                    <div className='text-white font-semibold text-lg -ml-3'>{playlistCount}</div>
                </div>
                <div className="bg-red-500 w-full px-28 py-12 rounded cursor-pointer mr-10">
                    <div className='text-white font-semibold text-lg -ml-9'>LIKED SONGS</div>
                    <div className='text-white font-semibold text-lg -ml-3'>{likedSongsCount}</div>
                </div>
            </div>
        </AdminLoggedInContainer>
    )
}

export default Dashboard