import React, { useState, useEffect } from 'react'
import AdminLoggedInContainer from '../../containers/AdminLoggedInContainer'
import {makeAuthenticatedGETRequest} from "../../utils/serverHelper";

const Playlists = () => {
    const [Playlists, setPlaylists] = useState([]);

    useEffect(() => {
        const getPlaylistData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/allplaylist"
            );
            setPlaylists(response.playlist);
        };
        getPlaylistData();
    }, []);

    return (
        <AdminLoggedInContainer curActiveScreen={"playlists"}>
            <div className="text-white text-xl pt-8 font-semibold">
                Playlists
            </div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {Playlists.map((item) => {
                    return (
                        <Card
                            key={JSON.stringify(item)}
                            title={item.name}
                            description=""
                            imgUrl={item.thumbnail}
                        />
                    );
                })}
            </div>
        </AdminLoggedInContainer>
    )
}

export default Playlists

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