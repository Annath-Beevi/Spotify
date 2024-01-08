import React, { useState, useEffect } from 'react'
import AdminLoggedInContainer from '../../containers/AdminLoggedInContainer'
import { makeAuthenticatedGETRequest } from '../../utils/serverHelper';

const Songs = () => {

    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/allsongs"
            );
            setSongData(response.songs);
            console.log(songData)
        };
        getData();
    }, []);

    return (
        <AdminLoggedInContainer curActiveScreen="songs">
            <div className="text-white text-xl font-semibold pb-4 pl-2 pt-8">
                Songs
            </div>
            <div className="space-y-3 overflow-auto">
                {songData.map((item) => {
                    return <SingleSongCard info={item} />;
                })}
            </div>
        </AdminLoggedInContainer>
    )
}

export default Songs

const SingleSongCard = ({ info }) => {
    return (
        <div className="flex hover:bg-gray-400 hover:bg-opacity-20 p-2 rounded-sm">
            <div
                className="w-12 h-12 bg-cover bg-center"
                style={{
                    backgroundImage: `url("${info.thumbnail}")`,
                }}
            ></div>
            <div className="flex w-full">
                <div className="text-white flex justify-center  flex-col pl-4 w-5/6">
                    <div className="cursor-pointer hover:underline">
                        {info.name}
                    </div>
                    <div className="text-xs text-gray-400 cursor-pointer hover:underline">
                        {info.artist.firstName + " " + info.artist.lastName}
                    </div>
                </div>
                <div className="w-1/6 flex items-center justify-center">
                    <button className='border border-gray-400 text-white rounded-full px-3 py-1.5 font-semibold'>
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
};
