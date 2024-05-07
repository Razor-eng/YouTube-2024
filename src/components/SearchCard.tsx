import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

const SearchCard = ({ data }: { data: HomePageVideos }) => {
    return (
        <Link to={`/watch/${data.videoId}`}>
            <div className='flex flex-col sm:flex-row md:gap-3 overflow-x-hidden transition-all ease-in hover:scale-105 group cursor-pointer border w-screen md:w-auto md:border-none p-4 md:p-0'>
                <div className="relative">
                    <span className="absolute bottom-3 right-3 text-sm text-white bg-zinc-700 rounded-md bg-opacity-70 font-semibold px-2 py-0.5 z-10">
                        {data.videoDuration}
                    </span>
                    <img
                        src={data.videoThumbnail}
                        alt="thumbnail"
                        className="w-full h-auto md:h-72 md:w-[480px] rounded-lg group-hover:rounded-none transition-all ease-in duration-150"
                    />
                </div>
                <div className="flex gap-2 ml-1 flex-col">
                    <h3 className="max-w-2xl">
                        <div className='line-clamp-3 md:line-clamp-2'>
                            {data.videoTitle}
                        </div>
                    </h3>
                    <div className="text-xs text-zinc-500">
                        <div>
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
                    <div className="min-w-fit my-2">
                        <div className='flex items-center gap-2 text-md text-zinc-500 font-semibold'>
                            <img src={data.channelInfo.image} alt="channel" className='h-9 w-9 rounded-full' />
                            <span className='hover:text-white cursor-pointer'>{data.channelInfo.name}</span>
                        </div>
                    </div>
                    <div className="max-w-2xl line-clamp-2 text-sm text-zinc-500">
                        <p>{data.videoDescription}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard
