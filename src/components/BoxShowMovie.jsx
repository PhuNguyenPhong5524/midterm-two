import BoxMovie from "./Home/BoxMovie";



const BoxShowMovie = ({movies, handleDetail, loading}) => {
    return (
        <div className="grid grid-cols-6 gap-[30px]" >
            {
                loading ? (
                    Array.from({length: 6}).map((_, index) => (
                        <div key={index} className="w-full h-[250px] rounded-[12px] bg-slate-800 animate-pulse flex justify-center items-center">
                            <img src="/images/loading-img.png" alt="" className="w-[50px] h-[50px] object-cover rounded-[12px] animate-spin" />
                        </div>
                    ))
                ) : (
                    movies.slice(1, 7).map((item) => 
                        <BoxMovie key={item.id} item={item} handleDetail={handleDetail}/>
                    )
                )
            }
        </div>
    )
}

export default BoxShowMovie;