import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

export default function Card({ data }: { data: HomePageVideos }) {
    return (
        <Link to={`/watch/${data.videoId}`}>
            <div className='lg:w-72 w-64 h-fit flex gap-3 flex-col rounded-lg transition-all ease-in  cursor-pointer hover:scale-110'>
                <div className="relative">
                    <span className="absolute bottom-3 right-3 text-sm bg-[rgba(255,255,255,0.4)] text-black font-semibold px-2 py-0.5 z-10">
                        {data.videoDuration}
                    </span>
                    <img
                        src={data.videoThumbnail}
                        alt="thumbnail"
                        className="h-44 w-72 rounded-t-lg"
                    />
                </div>
                <div className="flex gap-2">
                    <div className="min-w-fit">
                        <div>
                            <img
                                src={data.channelInfo.image}
                                alt="channel"
                                className='h-9 w-9 rounded-full'
                            />
                        </div>
                    </div>
                    <div>
                        <h3>
                            <div className='line-clamp-2'>
                                {data.videoTitle}
                            </div>
                        </h3>
                        <div className="text-sm text-gray-400">
                            <div>
                                <div className='hover:text-white'>
                                    {data.channelInfo.name}
                                </div>
                            </div>
                            <div>
                                <span className="after:content-['.'] after:mx-1">
                                    {data.videoViews} views
                                </span>
                                <span>
                                    {data.videoAge}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}
