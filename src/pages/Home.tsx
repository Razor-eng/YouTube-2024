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
import { FaRegCompass } from 'react-icons/fa';

const Home = ({ view, setView }: { view: boolean, setView: React.Dispatch<React.SetStateAction<boolean>> }) => {
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
        <div className='h-screen w-screen overflow-hidden'>
            <div style={{ height: "7.5vh" }}>
                <Navbar view={view} setView={setView} />
            </div>
            <div className="flex w-screen" style={{ height: "92.5vh" }}>
                <Sidebar view={view} search={false} />
                {
                    videos.length ?
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getHomePageVideos(true))}
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={"92.5vh"}
                        >
                            <div className="py-1 px-8">
                                <div className='text-zinc-400 md:hidden'>
                                    <FaRegCompass className='text-2xl' />
                                </div>
                                <div className={`${view ? 'md:grid-cols-4' : 'md:grid-cols-3'} grid gap-x-12 md:gap-x-6 md:gap-y-10 grid-cols-1 gap-y-8 py-4 z-10 overflow-y-scroll`}>
                                    {videos.map((item: HomePageVideos) => {
                                        return <Card data={item} key={item.videoId} />;
                                    })}
                                </div>
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
