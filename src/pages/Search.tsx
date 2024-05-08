import { useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import Spinner from '../components/Spinner';
import { HomePageVideos } from '../Types';
import { clearVideos } from '../store';
import { useNavigate } from 'react-router-dom';
import { getSearchPageVideos } from '../store/reducers/getSearchPageVideos';
import SearchCard from '../components/SearchCard';

function Search({ view, setView }: { view: boolean, setView: React.Dispatch<React.SetStateAction<boolean>> }) {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const videos = useAppSelector((state) => state.youtubeApp.videos);
    const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);

    useEffect(() => {
        dispatch(clearVideos());
        if (searchTerm === "")
            navigate("/")
        else {
            dispatch(getSearchPageVideos(false));
        }
    }, [dispatch, navigate, searchTerm]);

    return (
        <div className='max-h-screen overflow-hidden'>
            <div style={{ height: "7.5vh" }}>
                <Navbar view={view} setView={setView} />
            </div>
            <div className="flex w-screen" style={{ height: "92.5vh" }}>
                <Sidebar view={view} search={true} />
                {
                    videos.length ?
                        <InfiniteScroll
                            dataLength={videos.length}
                            next={() => dispatch(getSearchPageVideos(true))}
                            hasMore={videos.length < 500}
                            loader={<Spinner />}
                            height={"92.5vh"}
                        >
                            <div className='md:py-4 py-2 md:pl-8 flex flex-col gap-2 md:gap-5 w-full'>
                                {videos.map((item: HomePageVideos) => {
                                    return (
                                        <div className="md:my-5 my-2 overflow-x-hidden" key={item.videoId}>
                                            <SearchCard data={item} />
                                        </div>
                                    )
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

export default Search
