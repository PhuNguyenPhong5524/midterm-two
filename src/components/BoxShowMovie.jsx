import BoxMovie from "./Home/BoxMovie";



const BoxShowMovie = ({movies, handleDetail}) => {
    return (
        <div className="grid grid-cols-6 gap-[30px]" >
            {
                movies.slice(1, 7).map((item) => 
                    <BoxMovie key={item.id} item={item} handleDetail={handleDetail}/>
                )
            }
        </div>
    )
}

export default BoxShowMovie;