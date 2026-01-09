'use client'
import Banner from "../components/Home/Banner";
import BoxShowMovie from "../components/BoxShowMovie";
import { useEffect, useState } from "react";
import useFetchData from "../api/api";


const HomePage = () => {
    
    const {data: movies, loading} = useFetchData('movies');
    const [isMoviesId, setisMoviesId] = useState(null);
    const [scroll, setScroll] = useState(0);
    const [loadingBanner, setLoadingBanner] = useState(false);

    useEffect(()=>{
        if(movies.length > 0 && !isMoviesId){
            setisMoviesId(movies[0].id);
        }
    },[movies]);

    const movie = movies.find((movie) => movie.id === isMoviesId);

    const handleDetail = (id) => {
        setLoadingBanner(true);
        setisMoviesId(id);
        setScroll(prev => prev + 1);

        setTimeout(() => {
            setLoadingBanner(false);
        }, 600);
    }

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }, [scroll])

    return (
        <div 
            className="
                max-w-[1180px] mx-auto h-[200vh]
        
            "
        >
                {/* Title & text Content */}
                    <div className="pt-[10px]">
                        <h1
                            className="
                                text-[30px] font-bold 
                            "
                        >
                            Explore 
                        </h1>
                        <p
                            className="
                                text-[20px] text-[#868686] py-[20px]
                            "
                        >
                            What are you gonna watch today ?
                        </p>
                    </div>
                {/* Banner */}
                    <Banner movie={movie} loading={loading} loadingBanner={loadingBanner} />
                {/* Box section new release */}
                    <div>
                        {/* Title */}
                            <h1
                                className="
                                    text-[30px] font-bold py-[20px]
                                "
                            >
                                New Release
                            </h1> 
                            <BoxShowMovie movies={movies} handleDetail={handleDetail} loading={loading}/>
                    </div>
        </div>
    )
}

export default HomePage;