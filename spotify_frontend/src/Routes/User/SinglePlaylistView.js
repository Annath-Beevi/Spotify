import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import UserLoggedInContainer from "../../containers/UserLoggedInContainer";
import {makeAuthenticatedGETRequest} from "../../utils/serverHelper";
import SingleSongCard from "../../Components/shared/SingleSongCard";

const SinglePlaylistView = () => {
    const [playlistDetails, setPlaylistDetails] = useState({});
    const {playlistId} = useParams();

    useEffect(() => {
        const getData = async () => {
            const response = await makeAuthenticatedGETRequest(
                "/playlist/get/playlist/" + playlistId
            );
            setPlaylistDetails(response);
            console.log(response);
        };
        getData();
    }, []);

    return (
        <UserLoggedInContainer curActiveScreen={"library"}>
            {playlistDetails._id && (
                <div>
                    <div className="text-white text-xl pt-8 font-semibold">
                        {playlistDetails.name}
                    </div>
                    <div className="pt-10 space-y-3">
                        {playlistDetails.songs.map((item) => {
                            return (
                                <SingleSongCard
                                    info={item}
                                    key={JSON.stringify(item)}
                                    playSound={() => {}}
                                />
                            );
                        })}
                    </div>
                </div>
            )}
        </UserLoggedInContainer>
    );
};

export default SinglePlaylistView;
