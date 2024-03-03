import { GiHamburgerMenu } from 'react-icons/gi'
import { BsBell, BsCameraVideo, BsSunFill, BsYoutube } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { IoAppsSharp } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'
import { useColorMode } from '@chakra-ui/react'
import { TbMoonFilled } from 'react-icons/tb'

const Navbar = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
    const handleSearch = () => {
        if (location.pathname !== "/search")
            navigate("/search");
        else {
            dispatch(clearVideos());
            dispatch(getSearchPageVideos(false));
        }
    };
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div className={`flex justify-between items-center px-3 md:px-10 h-14 ${colorMode === "dark" ? 'bg-[#212121]' : 'bg-gray-200 border-gray-300'} opacity-95 sticky top-0 z-50 border-b`}>
            <div className="flex gap-8 items-center text-2xl">
                <div onClick={toggleColorMode} className={`transition ease-in-out duration-300 cursor-pointer active:scale-75 md:p-3 rounded-lg ${colorMode === "dark" ? 'hover:bg-gray-700 bg-[#212125] border-[#212129]' : 'hover:bg-slate-400 bg-slate-300 border-gray-300'} border shadow-lg hover:scale-105`}>
                    {/* <GiHamburgerMenu /> */}
                    {colorMode === "dark" ?
                        <BsSunFill color='white' />
                        :
                        <TbMoonFilled color='#212121' />
                    }
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center relative right-5" onClick={() => dispatch(clearSearchTerm())}>
                        <BsYoutube className='text-3xl text-red-600' />
                        <span className="text-xl md:block hidden font-medium">YouTube</span>
                    </div>
                </Link>
            </div>
            <div className="flex items-center justify-center gap-5">
                <form onSubmit={e => {
                    e.preventDefault();
                    handleSearch();
                }}
                >
                    <div className={`flex items-center h-10 px-4 pr-0 rounded-full border-[rgba(255,255,255,0.1)] ${colorMode === "dark" ? "bg-zinc-900" : "bg-zinc-100"} border`}>
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className="text-xl text-gray-500" />
                            </div>
                            <input
                                type="text"
                                className={`md:w-96 w-full ${colorMode === "dark" ? "bg-zinc-900" : "bg-zinc-100"} focus:outline-none border-none`}
                                value={searchTerm}
                                onChange={e => dispatch(changeSearchTerm(e.target.value))}
                            />
                            <AiOutlineClose
                                className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>
                        <button className={`h-10 w-16 flex items-center justify-center ${colorMode === "dark" ? "bg-zinc-800 hover:bg-gray-600" : "bg-zinc-300 hover:bg-gray-400"} transition ease-in-out duration-300 cursor-pointer active:scale-75 rounded-r-full px-2 border border-[rgba(255,255,255,0.1)]`} >
                            <AiOutlineSearch className='text-xl' />
                        </button>
                    </div>
                </form>
                <div className={`p-3 text-xl rounded-full transition ease-in-out duration-300 cursor-pointer ${colorMode === "dark" ? 'bg-zinc-900 hover:bg-gray-700 active:bg-gray-600' : "bg-zinc-300 hover:bg-gray-500/30 active:bg-gray-400"} md:block hidden`}>
                    <TiMicrophone />
                </div>
            </div>
            <div className="md:flex gap-5 items-center text-xl hidden">
                <BsCameraVideo className='active:scale-75 cursor-pointer' />
                <IoAppsSharp className=' active:scale-75 cursor-pointer' />
                <div className="relative">
                    <BsBell className=' active:scale-75 cursor-pointer' />
                    <span className="absolute bottom-2 left-2 text-xs bg-red-600 rounded-full px-1">
                        9+
                    </span>
                </div>
                <img src="/user.png" alt="" className=' bg-[#f1f1f1] w-9 h-9 rounded-full ml-3 transition ease-in-out duration-300 hover:scale-110 active:scale-90 cursor-pointer' />
            </div>
        </div>
    )
}

export default Navbar
