


const Banner = ({movie, loading}) => {

    return (
        <div className="relative overflow-hidden rounded-[12px]">
            {
                loading ? (
                    <div className="w-full h-[500px] bg-slate-800 animate-pulse"></div>
                ) : (
                    movie && (
                        <a href="/" className="group">
                            <img
                                src={movie.imageBanner}
                                alt="Banner"
                                className="w-full h-[500px] object-cover rounded-[12px] group-hover:scale-105 transition-all ease-in-out duration-300"
                            />
                            <div 
                                className="
                                    absolute top-0 left-0 w-full h-full bg-[#000000] opacity-20 
                                    transition-all ease-in-out duration-300 group-hover:opacity-50 
                                "
                            >
                            </div>
                            <div className="absolute bottom-[40px] left-[50px] transform text-white w-[45%]">
                                <h1 className="text-[36px] font-bold mb-4">{movie.movieName}</h1>
                                <p 
                                    className="
                                        text-lg text-[#e0e0e0] transform transition-all ease-in-out 
                                        duration-300 group-hover:text-[#ffffff] line-clamp-4
                                    "
                                > 
                                    {movie.description}
                                </p>
                            </div>
                        </a>
                    )
                )
            }
        </div>
    );
};

export default Banner;