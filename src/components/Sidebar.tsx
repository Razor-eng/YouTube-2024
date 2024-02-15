import { MdHistory, MdHomeFilled, MdOutlineFeedback, MdOutlineFlag, MdOutlineHelpOutline, MdOutlineSlowMotionVideo, MdOutlineSmartDisplay, MdOutlineSportsVolleyball, MdOutlineVideoLibrary, MdOutlineWatchLater, MdSettings, MdSubscriptions, MdThumbUpOffAlt } from 'react-icons/md'
import { TbDeviceGamepad2, TbMusic } from 'react-icons/tb'
import { FaRegCompass } from 'react-icons/fa'
import { GiFilmStrip } from 'react-icons/gi'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Sidebar = ({ search }: { search: boolean }) => {
    const [val, setVal] = useState("Home")
    const navigate = useNavigate();
    function getHome(name: string) {
        if (name == "Home") {
            navigate("/");
        }
    }

    const mainLink = [
        {
            icon: <MdHomeFilled className='text-xl' />,
            name: "Home"
        },
        {
            icon: <FaRegCompass className='text-xl' />,
            name: "Explore"
        },
        {
            icon: <MdOutlineSlowMotionVideo className='text-xl' />,
            name: "Shorts"
        },
        {
            icon: <MdSubscriptions className='text-xl' />,
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
        <div className={`w-2/12 h-[100%] bg-[#212121] pr-5 overflow-x-hidden pb-8 sidebar ${search ? "md:block hidden" : ""}`}>
            <ul className="flex flex-col border-b-2 border-gray-700 lg:w-[109%] w-[140%]">
                {mainLink.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={
                                `pl-6 py-3 hover:bg-zinc-600 hover:text-red-600 ${name === val ? "bg-zinc-700 text-red-600" : ""}`
                            }
                        >
                            <a href='#' className='flex items-center gap-5' onClick={() => { setVal(name); getHome(name) }}>
                                {icon}
                                <span className="text-sm tracking-wider lg:block hidden">
                                    {name}
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 lg:w-[109%] w-[140%]">
                {secondaryLink.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={
                                `pl-6 py-3 hover:bg-zinc-600 hover:text-red-600 ${name === val ? "bg-zinc-700 text-red-600" : ""}`
                            }
                        >
                            <a href='#' className='flex items-center gap-5' onClick={() => setVal(name)}>
                                {icon}
                                <span className="text-sm tracking-wider lg:block hidden">
                                    {name}
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 lg:w-[109%] w-[140%]">
                {subscriptionLink.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={
                                `pl-6 py-3 hover:bg-zinc-600 hover:text-red-600 ${name === val ? "bg-zinc-700 text-red-600" : ""}`
                            }
                        >
                            <a href='#' className='flex items-center gap-5' onClick={() => setVal(name)}>
                                {icon}
                                <span className="text-sm tracking-wider lg:block hidden">
                                    {name}
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="flex flex-col border-b-2 border-gray-700 lg:w-[109%] w-[140%]">
                {helpLink.map(({ icon, name }) => {
                    return (
                        <li
                            key={name}
                            className={
                                `pl-6 py-3 hover:bg-zinc-600 hover:text-red-600 ${name === val ? "bg-zinc-700 text-red-600" : ""}`
                            }
                        >
                            <a href='#' className='flex items-center gap-5' onClick={() => setVal(name)}>
                                {icon}
                                <span className="text-sm tracking-wider lg:block hidden">
                                    {name}
                                </span>
                            </a>
                        </li>
                    )
                })}
            </ul>
            <ul className="lg:flex gap-2 flex-wrap text-sm p-4 text-zinc-400 hidden">
                {textLinks[0].map((name) => {
                    return <li key={name}>{name}</li>
                })}
            </ul>
            <ul className="lg:flex gap-2 flex-wrap text-sm p-4 text-zinc-400 hidden">
                {textLinks[1].map((name) => {
                    return <li key={name}>{name}</li>
                })}
            </ul>
            <span className="px-4 text-sm text-zinc-400 lg:block hidden">&copy; 2024 Google</span>
            <br />
        </div>
    )
}

export default Sidebar
