import React, { useState, useEffect } from 'react'
import LoggedInContainer from '../../containers/LoggedInContainers';
import { makeAuthenticatedGETRequest } from '../../utils/serverHelper';
import { useContext } from "react"
import songContext from '../../contexts/songContext'

const Home = () => {

    const [songData, setSongData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/song/get/allsongs"
            );
            console.log(response)
            setSongData(response.songs);
        };
        getData();
    }, []);

    return (
        <LoggedInContainer curActiveScreen="artistHome">
            <PlaylistView
                titleText="Fresh New Music"
                cardsData={songData} />
        </LoggedInContainer>
    );
};

export default Home;

const PlaylistView = ({ titleText, cardsData }) => {

    return (
        <div className='text-white mt-6 cursor-pointer'>
            <div className='text-2xl font-semibold mb-5'>{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                info={item}
                                playSound={() => { }}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

const Card = ({ info }) => {
    const { currentSong, setCurrentSong } = useContext(songContext)
    return (
        <div className='bg-black bg-opacity-30 w-1/5 p-4 rounded-lg' onClick={() => {
            setCurrentSong(info)
        }}>
            <div className="pb-2 pt-2">
                <img className="w-full rounded-md" src={info.thumbnail} alt="label" />
            </div>
            <div className='text-white font-bold py-3'>{info.name}</div>
            <div className='text-gray-500 text-sm'>{info.description}</div>
        </div>
    )
}
