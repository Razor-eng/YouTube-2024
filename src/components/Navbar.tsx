import { RxHamburgerMenu } from "react-icons/rx";
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
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";

const Navbar = ({ view, setView }: { view: boolean, setView: React.Dispatch<React.SetStateAction<boolean>> }) => {
    const location = useLocation();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
    const [search, setSearch] = useState(false);

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
        <div className={`flex items-center md:px-5 ${search ? '' : 'px-3 justify-between'} h-14 ${colorMode === "dark" ? 'bg-[#212121]' : 'bg-white border-gray-300'} opacity-95 md:sticky fixed w-full top-0 z-50 border-b`}>
            <div className="flex gap-8 items-center text-2xl">
                <div onClick={() => setView(!view)} className={`transition md:block hidden ease-in-out duration-300 cursor-pointer md:p-2 rounded-full ${colorMode === "dark" ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200'}`}>
                    <RxHamburgerMenu />
                </div>
                <Link to="/" className="p-2">
                    <div className={`flex ml-4 gap-2 items-center justify-center relative right-5 ${search ? 'hidden' : 'flex'}`} onClick={() => dispatch(clearSearchTerm())}>
                        <BsYoutube className='text-3xl text-red-600' />
                        <span className="md:text-xl text-lg tracking-normal font-bold md:tracking-tighter">YouTube</span>
                    </div>
                    <div
                        className={`${search ? 'block text-xl' : 'hidden'}`}
                        onClick={() => setSearch(false)}
                    >
                        <BiArrowBack />
                    </div>
                </Link>
            </div>
            <div className={`md:flex items-center justify-center gap-5 ${search ? 'w-full pr-2' : 'hidden'}`}>
                <form onSubmit={e => {
                    e.preventDefault();
                    handleSearch();
                }}
                >
                    <div className={`flex items-center px-4 pr-0 rounded-full border bg-transparent  ${colorMode === "dark" ? "border-zinc-700 " : "border-zinc-300 "} border`}>
                        <div className="flex items-center pr-5 w-full">
                            <input
                                type="text"
                                className={`md:w-96 placeholder:text-zinc-500 w-full focus:outline-none border-none bg-transparent`}
                                value={searchTerm}
                                placeholder="Search"
                                onBlur={() => setSearch(false)}
                                onChange={e => dispatch(changeSearchTerm(e.target.value))}
                            />
                            <AiOutlineClose
                                className={`text-xl cursor-pointer ${!searchTerm ? "invisible" : "visible"}`}
                                onClick={() => dispatch(clearSearchTerm())}
                            />
                        </div>
                        <button className={`h-10 w-16 flex items-center justify-center ${colorMode === "dark" ? "bg-zinc-800 hover:bg-zinc-700" : "bg-zinc-200 hover:bg-zinc-300"} transition ease-in-out duration-300 cursor-pointer active:scale-75 rounded-r-full px-2 border border-[rgba(255,255,255,0.1)]`} >
                            <AiOutlineSearch className='text-xl' />
                        </button>
                    </div>
                </form>
                <div className={`p-3 text-xl rounded-full transition ease-in-out duration-300 cursor-pointer ${colorMode === "dark" ? 'bg-zinc-800 hover:bg-zinc-700 active:bg-zinc-600' : "bg-zinc-200 hover:bg-zinc-300 active:bg-zinc-400"} md:block hidden`}>
                    <TiMicrophone />
                </div>
            </div>
            <div className="flex gap-5 items-center text-xl">
                <div onClick={toggleColorMode} className={`transition ease-in-out duration-300 cursor-pointer md:p-2 ml-1 rounded-full ${colorMode === "dark" ? 'hover:bg-zinc-700' : 'hover:bg-zinc-200'} ${search ? 'hidden' : 'flex'}`}>
                    {colorMode === "dark" ?
                        <BsSunFill color='white' />
                        :
                        <TbMoonFilled color='#212121' />
                    }
                </div>
                <div className={`gap-5 items-center ${search ? 'hidden' : 'flex'}`}>
                    <BsCameraVideo className='active:scale-75 cursor-pointer hidden md:block' />
                    <IoAppsSharp className=' active:scale-75 cursor-pointer hidden md:block' />
                    <div className="relative">
                        <BsBell className=' active:scale-75 cursor-pointer' />
                        <span className="absolute bottom-2 left-2 text-xs text-white bg-red-600 rounded-full px-1">
                            9+
                        </span>
                    </div>
                    <AiOutlineSearch className='md:hidden active:scale-75 cursor-pointer text-2xl' onClick={() => setSearch(true)} />
                    <img src="/user.png" alt="" className='bg-zinc-200 w-9 h-9 rounded-full md:ml-3 transition ease-in-out duration-300 hover:scale-110 active:scale-90 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Navbar
