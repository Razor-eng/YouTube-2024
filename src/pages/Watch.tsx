import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getRecommendedVideos } from "../store/reducers/getRecommendedVideos";
import { getVideoDetails } from "../store/reducers/getVideoDetails";
import { BiLike, BiDislike } from "react-icons/bi";
import { PiShareFatLight } from "react-icons/pi";
import { BsThreeDots } from "react-icons/bs";
import WatchCard from "../components/WatchCard";
import Sidebar from "../components/Sidebar";
import { LiaDownloadSolid } from "react-icons/lia";
import { useColorMode } from "@chakra-ui/react";
export default function Watch({ view, setView }: { view: boolean, setView: React.Dispatch<React.SetStateAction<boolean>> }) {
    const [showMoreStatus, setShowMoreStatus] = useState<boolean>(false);
    const { colorMode } = useColorMode();
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const currentPlaying = useAppSelector(
        (state) => state.youtubeApp.currentPlaying
    );
    const recommendedVideos = useAppSelector(
        (state) => state.youtubeApp.recommendedVideos
    );
    useEffect(() => {
        if (id) {
            dispatch(getVideoDetails(id));
            setShowMoreStatus(false);
        } else {
            navigate("/");
        }
    }, [id, navigate, dispatch]);

    useEffect(() => {
        if (currentPlaying && id) dispatch(getRecommendedVideos(id));
    }, [currentPlaying, dispatch, id]);

    return (
        <>
            {currentPlaying && currentPlaying?.videoId === id && (
                <div className="max-h-screen overflow-hidden">
                    <div style={{ height: "7.5vh" }}>
                        <Navbar view={view} setView={setView} />
                    </div>
                    <div className="flex w-full" style={{ height: "92.5vh" }}>
                        <div className="md:hidden">
                            <Sidebar view={view} search={false} />
                        </div>
                        <div className="flex lg:flex-row flex-col gap-y-10 gap-x-5 lg:p-7 mx-2 md:mr-0 lg:w-full overflow-auto">
                            <div className="max-w-[100%] lg:max-w-[70%]">
                                <div>
                                    <iframe
                                        width="100%"
                                        height="502"
                                        src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                                        title="YouTube video player"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="md:rounded-md rounded-xl md:h-[502px] h-96"
                                    ></iframe>
                                    <div className="mt-5">
                                        <p className="text-xl font-semibold">{currentPlaying.videoTitle}</p>
                                        <div className="flex lg:flex-row flex-col justify-between mt-1">
                                            <div className="flex items-center gap-5 mr-5 mt-4">
                                                <img
                                                    src={currentPlaying.channelInfo.image}
                                                    alt=""
                                                    className="rounded-full h-12 w-12"
                                                />
                                                <div className="w-5/6">
                                                    <h5 className="">
                                                        <strong>{currentPlaying.channelInfo.name}</strong>
                                                    </h5>
                                                    <h6 className="text-zinc-500 text-xs">
                                                        {currentPlaying.channelInfo.subscribers} subscribers
                                                    </h6>
                                                </div>
                                                <button className={`rounded-full ${colorMode === 'dark' ? 'bg-zinc-300 text-black' : 'bg-black text-white'} p-2 px-4 hover:opacity-80 text-sm tracking-wide font-bold md:font-semibold transition-all ease-in duration-150`}>
                                                    Subscribe
                                                </button>
                                            </div>
                                            <div className="flex items-center lg:gap-4 gap-8 lg:mt-0 mt-4">
                                                <button className={`${colorMode === 'dark' ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-100'} rounded-full text-zinc-500 flex items-center px-3 py-2`}>
                                                    <div className="flex items-center gap-2 cursor-pointer pr-3 border-r border-zinc-400">
                                                        <BiLike className="text-xl" />
                                                        <strong className="font-medium">{currentPlaying.videoLikes}</strong>
                                                    </div>
                                                    <div className="cursor-pointer pl-3">
                                                        <BiDislike className="text-xl" />
                                                    </div>
                                                </button>
                                                <div className={`${colorMode === 'dark' ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-100'} rounded-full text-zinc-500 flex gap-2 items-center px-3 py-2`}>
                                                    <PiShareFatLight className="text-xl" />
                                                    <strong className="font-medium">Share</strong>
                                                </div>
                                                <div className={`${colorMode === 'dark' ? 'bg-zinc-700 text-zinc-300' : 'bg-zinc-100'} rounded-full text-zinc-500 flex gap-2 items-center px-3 py-2`}>
                                                    <LiaDownloadSolid className="text-xl" />
                                                    <strong className="font-medium">Download</strong>
                                                </div>
                                                <div className={`${colorMode === 'dark' ? 'bg-zinc-700' : 'bg-zinc-100'} rounded-full text-zinc-500 flex gap-2 items-center px-3 py-2`}>
                                                    <BsThreeDots className="text-xl" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className={`flex gap-2 flex-col my-5 pb-3 ${colorMode === 'dark' ? 'bg-zinc-700' : 'bg-zinc-100'} rounded-lg p-3`}>
                                            <div className="text-sm font-semibold">
                                                <span className="after:content-['•'] after:mx-1">
                                                    {currentPlaying.videoViews} views
                                                </span>
                                                <span> {currentPlaying.videoAge} ago</span>
                                            </div>
                                            <div
                                                className={`${!showMoreStatus ? "max-h-12 overflow-hidden" : ""} text-[14px] font-medium w-11/12`}
                                            >
                                                <pre
                                                    style={{
                                                        fontFamily: `"Roboto", sans-serif`,
                                                    }}
                                                    className="whitespace-pre-wrap"
                                                >
                                                    {currentPlaying.videoDescription}
                                                </pre>
                                            </div>
                                            <div>
                                                <button
                                                    className="text-sm font-semibold cursor-pointer"
                                                    onClick={() => setShowMoreStatus(!showMoreStatus)}
                                                >
                                                    ...{showMoreStatus ? "less" : "more"}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:mr-2 mr-3 lg:ml-6 lg:w-[30%] flex flex-col gap-3">
                                {getRecommendedVideos.length &&
                                    recommendedVideos?.map((item) => {
                                        return <WatchCard data={item} key={item.videoId} />;
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}