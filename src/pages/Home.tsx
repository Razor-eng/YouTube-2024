import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { getHomePageVideos } from '../store/reducers/getHomePageVideos'
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import Card from '../components/Card';
import { clearVideos } from '../store';

const Home = () => {
    const dispatch = useAppDispatch();
    const videos = useAppSelector((state) => state.youtubeApp.videos);

    useEffect(() => {
        return () => {
            dispatch(clearVideos());
        }
    }, [dispatch]);

    useEffect(() => {
        dispatch(getHomePageVideos(false))
    }, [dispatch]);

    return (
        <div className='max-h-screen overflow-hidden'>
            <div style={{ height: "7.5vh" }}>
                <Navbar />
            </div>
            <div className="flex" style={{ height: "92.5vh" }}>
                <Sidebar search={false} />
                {
                    videos.length ?
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getHomePageVideos(true))}
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={"92.5vh"}
                        >
                            <div className="grid lg:gap-y-14 lg:gap-x-16 lg:grid-cols-4 md:gap-x-4 md:gap-y-4 md:grid-cols-2 grid-cols-1 gap-y-4 p-8">
                                {videos.map((item: HomePageVideos) => {
                                    return <Card data={item} key={item.videoId} />;
                                })}
                            </div>
                        </InfiniteScroll>
                        :
                        <Spinner />
                }
            </div>
        </div>
    )
}

export default Home
