import React from 'react'
import spotify_logo from '../assets/images/spotify_logo_white.svg'
import IconText from '../Components/shared/IconText'
import { Icon } from '@iconify/react'
import { Link } from 'react-router-dom';

const freshNewMusic = [
    {
        title: "New in Dance",
        description: "Latest floor fillers to kickstart your party.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003e466a80b9f7ba71077ad3a71",
    },
    {
        title: "Latest Romance Telugu",
        description: "Bringing out the best of latest love tracks.",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003b58feb605ab427bbbea0b80a",
    },
    {
        title: "New Music Hindi",
        description: "Get the party started with 'Sher Khul Gaye' from Fighter!",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003190ed69711df232773553f77",
    },
    {
        title: "Latest Love Tamil",
        description: "Check out the Latest Romance Tracks",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003dfb6d013f153589cfa8f5602",
    },
    {
        title: "Best English Songs",
        description: "Playlist of all trending Instagram songs",
        imgUrl: "https://image-cdn-fa.spotifycdn.com/image/ab67706c0000bebbe4a55d4a028c4c8ef80af3fc",
    },
];

const throwback = [
    {
        title: "Best English Songs",
        description: "The Biggest and Hottest English Hits",
        imgUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbf5a16e8bd75f9aa5dc9f962c",
    },
    {
        title: "All Out 10s Malayalam",
        description: "Best of 2010's from Mollywood Cover",
        imgUrl: "https://i.scdn.co/image/ab67706f000000031c5dd1144207cb05d9e153e8",
    },
    {
        title: "All Out 00s Hindi",
        description: "Bollywood songs that ruled hearts in the Y2K decade",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003078ab114c8a966e7dd0434ee",
    },
    {
        title: "00s Chill Tami",
        description: "Something Hits from 00s Cover",
        imgUrl: "https://i.scdn.co/image/ab67706f000000035fe929d9fee2443ee027a81b",
    },
    {
        title: "All Out 2010s",
        description: "The biggest songs of the 2010s",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003ce2e62a258c09741e20dccc9",
    },
];

const topTrends = [
    {
        title: "English Top-Hits",
        description: "English Top-Hits 2022-23",
        imgUrl: "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbd63f49da5d71a0c9524b95c9",
    },
    {
        title: "I-Pop Superhits",
        description: "Biggest hits from your favourite pop stars",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003bf97e56d80c5c0d8b59f3cfc",
    },
    {
        title: "Trending Now Malayalam",
        description: "Every song that's Trending NOW from Mollywood!",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003cead379351c7aca9fefb589b",
    },
    {
        title: "Hot Hits Punjabi",
        description: "Catch the hottest Punjabi tracks",
        imgUrl: "https://i.scdn.co/image/ab67706f00000003118ecaf6c5151716f13fd0b1",
    },
    {
        title: "Best of Desi Hits 2023",
        description: "Our editor's picks for best Desi songs of the year",
        imgUrl: "https://i.scdn.co/image/ab67706f0000000322577b3db1e8be5cb4a9c550",
    },
];


export const Home = () => {
    return (
        <div className='h-full w-full flex'>
            {/* This first div will be the left panel */}
            <div className='h-ful w-1/5 bg-black flex flex-col justify-between pb-10'>
                <div>
                    <div className='logoDiv p-6'>
                        <img src={spotify_logo} alt='spotify logo' width={125} />
                    </div>
                    <div className="py-5">
                        <IconText iconName={"material-symbols:home"} displayText={"Home"} active />
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
                    <div className='border border-gray-400 text-white rounded-full px-2 py-1 font-bold mt-3 mr-5'>
                        <a className='hover:border-white cursor-pointer' href='https://www.spotify.com/us/premium/?utm_source=app&utm_medium=desktop&utm_campaign=upgrade&ref=desktop_loggedin_upgrade_button'>
                            Upgrade
                        </a>
                    </div>
                    <div className='border border-gray-100 text-white flex items-center justify-center rounded-full px-2 py-1 font-bold mt-3 mr-60 cursor-pointer'>
                        <Link to="/login">
                            Login
                        </Link>

                    </div>
                </div>
                <div className='content p-8 pt-0 overflow-auto'>
                    <PlaylistView
                        titleText="Fresh New Music"
                        cardsData={freshNewMusic}
                    />
                    <PlaylistView
                        titleText="Throwback"
                        cardsData={throwback}
                    />
                    <PlaylistView
                        titleText="Top Trends"
                        cardsData={topTrends}
                    />
                </div>
            </div>
        </div>
    )
};

const PlaylistView = ({ titleText, cardsData }) => {
    return (
        <div className='text-white mt-6'>
            <div className='text-2xl font-semibold mb-5'>{titleText}</div>
            <div className="w-full flex justify-between space-x-4">
                {
                    // cardsData will be an array
                    cardsData.map((item) => {
                        return (
                            <Card
                                title={item.title}
                                description={item.description}
                                imgUrl={item.imgUrl}
                            />
                        );
                    })
                }
            </div>
        </div>
    )
}

const Card = ({ title, description, imgUrl }) => {
    return (
        <div className='bg-black bg-opacity-30 w-1/5 p-4 rounded-lg'>
            <div className="pb-2 pt-2">
                <img className="w-full rounded-md" src={imgUrl} alt="label" />
            </div>
            <div className='text-white font-bold py-3'>{title}</div>
            <div className='text-gray-500 text-sm'>{description}</div>
        </div>
    )
}

export default Home
