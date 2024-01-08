import React, { useState, useEffect } from 'react'
import AdminLoggedInContainer from '../../containers/AdminLoggedInContainer'
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";

const AdminLikedSongs = () => {
    const [likedSongs, setLikedSongs] = useState([])

    useEffect(() => {
        const getLikedSongData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/liked/get/alllikedsongs"
            );
            setLikedSongs(response.liked);
            console.log(response.liked)
        };
        getLikedSongData();
    }, []);
    return (
        <AdminLoggedInContainer curActiveScreen={"adminLikedSongs"}>
            <div className="text-white text-xl pt-8 font-semibold">
                Liked Songs
            </div>
            {likedSongs._id && (
                <div className="py-5 grid gap-5 grid-cols-5">
                    {likedSongs.map((item) => {
                        return (
                            <Card
                                key={JSON.stringify(item)}
                                title={item.songs.name}
                                description=""
                                imgUrl={item.songs.thumbnail}
                            />
                        );
                    })}
                </div>
            )}

        </AdminLoggedInContainer>
    )
}

export default AdminLikedSongs

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className="bg-black bg-opacity-40 w-full p-4 rounded-lg cursor-pointer">
            <div className="pb-4 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className="text-white font-semibold py-3">{title}</div>
            <div className="text-gray-500 text-sm">{description}</div>
        </div>
    );
};