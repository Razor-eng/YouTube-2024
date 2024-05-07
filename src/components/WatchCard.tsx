import { Link } from "react-router-dom"
import { RecommendedVideos } from "../Types"

const WatchCard = ({ data }: { data: RecommendedVideos }) => {
    return (
        <Link to={`/watch/${data.videoId}`}>
            <div className="flex gap-3 hover:scale-105 transition-all ease-in-out">
                <div className="relative min-w-fit">
                    <span className="absolute bottom-3 right-3 text-sm bg-gray-900 px-2 py-0.5 z-10">
                        {data.videoDuration}
                    </span>
                    <img
                        src={data.videoThumbnail}
                        className="h-24 w-44 rounded-md"
                        alt="thumbnail"
                    />
                </div>
                <div className="flex gap-1 flex-col">
                    <h4 className="text-sm font-semibold">
                        <div className="line-clamp-2">
                            {data.videoTitle}
                        </div>
                    </h4>
                    <div className="text-xs text-zinc-500">
                        <div>
                            {data.channelInfo.name}
                        </div>
                        <div>
                            <span className="after:content-['•'] after:mx-1">
                                {data.videoViews} views
                            </span>
                            <span>{data.videoAge}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default WatchCard
