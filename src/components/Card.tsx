import React from 'react'
import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

export default function Card({ data }: { data: HomePageVideos }) {
    return (
        <Link to={`/watch/${data.videoId}`}>
            <div className='h-fit flex gap-3 flex-col rounded-lg transition-all ease-in border-t border-b md:border-none p-4 md:p-0 cursor-pointer hover:scale-105 group'>
                <div className="relative">
                    <span className="absolute bottom-3 right-3 text-sm bg-zinc-800 bg-opacity-70 text-white font-semibold px-2 py-0.5 z-10">
                        {data.videoDuration}
                    </span>
                    <img
                        src={data.videoThumbnail}
                        alt="thumbnail"
                        className="h-48 w-full group-hover:rounded-none rounded-lg object-fill"
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
                            <div className='line-clamp-2 text-sm font-bold md:font-semibold'>
                                {data.videoTitle}
                            </div>
                        </h3>
                        <div className="md:text-sm mt-1 text-zinc-500">
                            <div className='md:font-medium font-semibold'>
                                {data.channelInfo.name}
                            </div>
                            <div className='font-semibold md:font-normal'>
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
