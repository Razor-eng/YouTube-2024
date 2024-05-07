import { MdHistory, MdHome, MdHomeFilled, MdOutlineFeedback, MdOutlineFlag, MdOutlineHelpOutline, MdOutlineHome, MdOutlineSlowMotionVideo, MdOutlineSmartDisplay, MdOutlineSportsVolleyball, MdOutlineSubscriptions, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSettings, MdSlowMotionVideo, MdSubscriptions, MdThumbUpOffAlt, MdVideoLibrary } from 'react-icons/md'
import { TbDeviceGamepad2, TbMusic } from 'react-icons/tb'
import { FiArrowDownCircle } from 'react-icons/fi'
import { FaRegCompass } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useColorMode } from '@chakra-ui/react'
import { IoAddCircleOutline } from 'react-icons/io5'

const Sidebar = ({ search, view }: { search: boolean, view: boolean }) => {
    const [val, setVal] = useState("Home");
    const [viewMore, setViewMore] = useState(false);
    const navigate = useNavigate();
    const { colorMode } = useColorMode();
    let year = new Date().getFullYear();

    function getHome(name: string) {
        if (name === "Home") {
            navigate("/");
        }
    }

    const MobileLink = [
        {
            icon: <MdOutlineHome />,
            icon2: <MdHome />,
            name: "Home",
        },
        {
            icon: <MdOutlineSlowMotionVideo />,
            icon2: <MdSlowMotionVideo />,
            name: "Shorts"
        },
        {
            icon: <IoAddCircleOutline />,
            icon2: <IoAddCircleOutline />,
            name: "Add"
        },
        {
            icon: <MdOutlineSubscriptions />,
            icon2: <MdSubscriptions />,
            name: "Subscriptions"
        },
        {
            icon: <MdOutlineVideoLibrary />,
            icon2: <MdVideoLibrary />,
            name: "Library"
        },
    ];

    const mainLink = [
        {
            icon: <MdHomeFilled />,
            name: "Home"
        },
        {
            icon: <FaRegCompass />,
            name: "Explore"
        },
        {
            icon: <MdOutlineSlowMotionVideo />,
            name: "Shorts"
        },
        {
            icon: <MdOutlineSubscriptions />,
            name: "Subscriptions"
        },
    ];

    const secondaryLink = [
        {
            icon: <MdOutlineVideoLibrary className='text-xl' />,
            name: "Library"
        },
        {
            icon: <MdHistory className='text-xl' />,
            name: "History"
        },
        {
            icon: <MdOutlineSmartDisplay className='text-xl' />,
            name: "Your Videos"
        },
        {
            icon: <MdOutlineWatchLater className='text-xl' />,
            name: "Watch Later"
        },
        {
            icon: <MdThumbUpOffAlt className='text-xl' />,
            name: "Liked Videos"
        },
    ];

    const subscriptionLink = [
        {
            icon: <TbMusic className='text-xl' />,
            name: "Music"
        },
        {
            icon: <MdOutlineSportsVolleyball className='text-xl' />,
            name: "Sport"
        },
        {
            icon: <TbDeviceGamepad2 className='text-xl' />,
            name: "Gaming"
        },
        {
            icon: <GiFilmStrip className='text-xl' />,
            name: "Films"
        },
    ];

    const helpLink = [
        {
            icon: <MdSettings className='text-xl' />,
            name: "Settings"
        },
        {
            icon: <MdOutlineFlag className='text-xl' />,
            name: "Report History"
        },
        {
            icon: <MdOutlineHelpOutline className='text-xl' />,
            name: "Help"
        },
        {
            icon: <MdOutlineFeedback className='text-xl' />,
            name: "Send Feedback"
        },
    ];

    const textLinks = [
        [
            "About",
            "Press",
            "Copyright",
            "Contact Us",
            "Creator",
            "Advertise",
            "Developers",
        ],
        [
            "Terms",
            "Privacy",
            "Policy & Safety",
            "How Youtube works",
            "Test new features",
        ]
    ]

    return (
        <div className={`h-screen overflow-y-scroll scrollHide relative ${view ? 'md:w-1/12' : 'md:w-3/12'}`}>
            <div className={` ${colorMode === "dark" ? 'bg-[#212121]' : 'bg-white'} pr-5 overflow-x-hidden pb-8 hidden md:block ${search ? "md:block hidden" : ""}`}>
                {view ?
                    <div className="md:flex ml-1 flex-col hidden md:w-[64px]">
                        {mainLink.map(({ icon, name }) => {
                            return (
                                <div
                                    key={name}
                                    className={
                                        `p-5 rounded-lg ${colorMode === "dark" ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} ${name === val ? `${colorMode === "dark" ? "text-white" : "text-black"}` : "text-zinc-500"} transition-all ease-in duration-150 cursor-pointer`
                                    }
                                    onClick={() => { setVal(name); getHome(name) }}
                                >
                                    <div className='flex gap-1 flex-col items-center justify-center'>
                                        <p className="text-2xl">
                                            {icon}
                                        </p>
                                        <span className="text-[10px]">{name}</span>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                    :
                    <>
                        <ul className={`flex flex-col border-b py-2 ${colorMode === 'dark' ? 'border-zinc-700' : 'border-gray-300'} lg:w-[109%] w-[140%]`}>
                            {mainLink.map(({ icon, name }) => {
                                return (
                                    <li
                                        key={name}
                                        className={
                                            `pl-4 md:ml-2 py-2 rounded-lg ${colorMode === "dark" ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} ${name === val ? `${colorMode === "dark" ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black"} font-extrabold` : "text-zinc-500"} transition-all ease-in duration-150`
                                        }
                                    >
                                        <a href='#' className='flex items-center gap-5' onClick={() => { setVal(name); getHome(name) }}>
                                            <p className='text-xl'>{icon}</p>
                                            <span className="text-sm font-semibold tracking-wide lg:block hidden">
                                                {name}
                                            </span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        <ul className={`hidden md:flex flex-col border-b py-2 ${colorMode === 'dark' ? 'border-zinc-700' : 'border-gray-300'} lg:w-[109%] w-[140%]`}>
                            {secondaryLink.map(({ icon, name }) => {
                                return (
                                    <li
                                        key={name}
                                        className={
                                            `pl-4 md:ml-2 py-2 rounded-lg ${colorMode === "dark" ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} ${name === val ? `${colorMode === "dark" ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black"} font-bold` : "text-zinc-500"} transition-all ease-in duration-150`
                                        }
                                    >
                                        <a href='#' className='flex items-center gap-5' onClick={() => setVal(name)}>
                                            {icon}
                                            <span className="text-sm font-semibold tracking-wide lg:block hidden">
                                                {name}
                                            </span>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                        {viewMore &&
                            <>
                                <ul className={`flex flex-col border-b ${colorMode === 'dark' ? 'border-zinc-700' : 'border-gray-300'} lg:w-[109%] w-[140%]`}>
                                    {subscriptionLink.map(({ icon, name }) => {
                                        return (
                                            <li
                                                key={name}
                                                className={
                                                    `pl-4 md:ml-2 py-2 rounded-lg ${colorMode === "dark" ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} ${name === val ? `${colorMode === "dark" ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black"} font-bold` : "text-zinc-500"} transition-all ease-in duration-150`
                                                }
                                            >
                                                <a href='#' className='flex items-center gap-5' onClick={() => setVal(name)}>
                                                    {icon}
                                                    <span className="text-sm font-semibold tracking-wide lg:block hidden">
                                                        {name}
                                                    </span>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className={`hidden md:flex flex-col border-b ${colorMode === 'dark' ? 'border-zinc-700' : 'border-gray-300'} lg:w-[109%] w-[140%]`}>
                                    {helpLink.map(({ icon, name }) => {
                                        return (
                                            <li
                                                key={name}
                                                className={
                                                    `pl-4 md:ml-2 py-2 rounded-lg ${colorMode === "dark" ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} ${name === val ? `${colorMode === "dark" ? "bg-zinc-700 text-white" : "bg-zinc-200 text-black"} font-bold` : "text-zinc-500"} transition-all ease-in duration-150`
                                                }
                                            >
                                                <a href='#' className='flex items-center gap-5' onClick={() => setVal(name)}>
                                                    {icon}
                                                    <span className="text-sm font-semibold tracking-wide lg:block hidden">
                                                        {name}
                                                    </span>
                                                </a>
                                            </li>
                                        )
                                    })}
                                </ul>
                                <ul className="lg:flex gap-2 flex-wrap p-4 text-xs font-semibold text-zinc-600 hidden">
                                    {textLinks[0].map((name) => {
                                        return <li key={name}>{name}</li>
                                    })}
                                </ul>
                                <ul className="lg:flex gap-2 flex-wrap text-xs font-semibold p-4 text-zinc-600 hidden">
                                    {textLinks[1].map((name) => {
                                        return <li key={name}>{name}</li>
                                    })}
                                </ul>
                                <span className="px-4 text-xs text-zinc-500 lg:block hidden">&copy; {year} Google LLC</span>
                                <br />
                            </>
                        }
                        {!viewMore &&
                            <div
                                className={`flex items-center justify-center my-2 ml-3 gap-1 bg-transparent w-full hover:no-underline px-5 rounded-md py-2 ${colorMode === 'dark' ? 'hover:bg-zinc-700 border-zinc-700' : 'hover:bg-zinc-200 border-zinc-300'} transition-all ease-in duration-200 border cursor-pointer relative`}
                                onClick={() => setViewMore(true)}
                            >
                                <button className='font-semibold text-sm'>
                                    View more
                                </button>
                                <FiArrowDownCircle size={16} className='absolute -bottom-2 text-zinc-400' />
                            </div>
                        }
                    </>
                }
            </div>
            <div className={`grid z-50 ${colorMode === "dark" ? 'bg-[#212121]' : 'bg-white'} grid-cols-5 h-fit items-center w-screen border-t ${colorMode === "dark" ? 'border-zinc-500' : 'border-zinc-400'} fixed md:hidden bottom-0`}>
                {MobileLink.map(({ icon, name, icon2 }, id) => {
                    return (
                        <div
                            key={id}
                            className={
                                `py-4 cursor-pointer ${colorMode === "dark" ? 'hover:bg-zinc-800' : 'hover:bg-zinc-100'} ${name === val ? `${colorMode === "dark" ? "text-white" : "text-black"}` : "text-zinc-500"} transition-all ease-in duration-150 cursor-pointer`
                            }
                            onClick={() => { setVal(name); getHome(name) }}
                        >
                            <div className='flex gap-1 flex-col items-center justify-center'>
                                <p className={`${id === 2 ? 'text-5xl' : 'text-3xl'}`}>
                                    {val === name ?
                                        icon2
                                        :
                                        icon
                                    }
                                </p>
                                {id !== 2 &&
                                    <span className="text-sm font-semibold">{name}</span>
                                }
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Sidebar
