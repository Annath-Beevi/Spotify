import { useEffect, useState } from "react";
import UserLoggedInContainer from "../../containers/UserLoggedInContainer";
import { makeAuthenticatedGETRequest } from "../../utils/serverHelper";

const LikedSongs = () => {
    const [likedSongDetails, setLikedSongDetails] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/liked/get/likedsongs"
            );
            setLikedSongDetails(response.data);
            console.log(response)
        };
        getData();
    }, []);

    console.log(likedSongDetails)

    return (
        <UserLoggedInContainer curActiveScreen={"likedSongs"}>
            <div className="text-white text-xl pt-8 font-semibold">
                Liked Songs
            </div>
            <div className="py-5 grid gap-5 grid-cols-5">
                {likedSongDetails.map((item) => {
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
        </UserLoggedInContainer>
    );
};

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

export default LikedSongs;
