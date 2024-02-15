import { HomePageVideos } from '../Types'
import { Link } from 'react-router-dom'

const SearchCard = ({ data }: { data: HomePageVideos }) => {
    return (
        <Link to={`/watch/${data.videoId}`}>
            <div className='flex md:gap-3 overflow-x-hidden bg-[#131212b5] transition-all ease-in hover:bg-gray-700 hover:scale-95 cursor-pointer '>
                <div className="relative">
                    <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
                        {data.videoDuration}
                    </span>
                    <img
                        src={data.videoThumbnail}
                        alt="thumbnail"
                        className="h-52 w-96 min-w-48 max-w-52"
                    />
                </div>
                <div className="flex gap-2 ml-1 flex-col">
                    <h3 className="max-w-2xl">
                        <div className='line-clamp-3 md:line-clamp-2'>
                            {data.videoTitle}
                        </div>
                    </h3>
                    <div className="text-xs text-gray-400">
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
                        <div className='flex items-center gap-2 text-xs text-gray-400'>
                            <img src={data.channelInfo.image} alt="channel" className='h-9 w-9 rounded-full' />
                            <span className='hover:text-white cursor-pointer'>{data.channelInfo.name}</span>
                        </div>
                    </div>
                    <div className="max-w-2xl line-clamp-2 text-sm text-gray-400">
                        <p>{data.videoDescription}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SearchCard
