import { GiHamburgerMenu } from 'react-icons/gi'
import { BsBell, BsCameraVideo, BsYoutube } from 'react-icons/bs'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { TiMicrophone } from 'react-icons/ti'
import { IoAppsSharp } from 'react-icons/io5'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { changeSearchTerm, clearSearchTerm, clearVideos } from '../store'
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos'

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

    return (
        <div className="flex justify-between items-center px-10 h-14 bg-[#212121] opacity-95 sticky top-0 z-50 ">
            <div className="flex gap-8 items-center text-2xl">
                <div className='transition ease-in-out duration-300 cursor-pointer hover:bg-gray-700 active:scale-75 p-1 rounded-lg md:block hidden'>
                    <GiHamburgerMenu />
                </div>
                <Link to="/">
                    <div className="flex gap-1 items-center justify-center relative right-5">
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
                    <div className="flex bg-zinc-900 items-center h-10 px-4 pr-0">
                        <div className="flex gap-4 items-center pr-5">
                            <div>
                                <AiOutlineSearch className="text-xl" />
                            </div>
                            <input
                                type="text"
                                className='md:w-96 w-fit bg-zinc-900 focus:outline-none border-none'
                                value={searchTerm}
                                onChange={e => dispatch(changeSearchTerm(e.target.value))}
                            />
                            <AiOutlineClose
                                className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"
                                    }`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>
                        <button className='h-10 w-16 flex items-center justify-center bg-zinc-800 transition ease-in-out duration-300 cursor-pointer hover:bg-gray-600 active:scale-75' >
                            <AiOutlineSearch className='text-xl' />
                        </button>
                    </div>
                </form>
                <div className="p-3 text-xl bg-zinc-900 rounded-full transition ease-in-out duration-300 cursor-pointer hover:bg-gray-700 active:bg-gray-600 md:block hidden">
                    <TiMicrophone />
                </div>
            </div>
            <div className="md:flex gap-5 items-center text-xl hidden">
                <BsCameraVideo className='hover:bg-gray-700 active:scale-75 cursor-pointer' />
                <IoAppsSharp className='hover:bg-gray-700 active:scale-75 cursor-pointer' />
                <div className="relative">
                    <BsBell className='hover:bg-gray-700 active:scale-75 cursor-pointer' />
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
