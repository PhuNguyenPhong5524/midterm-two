
import CaretRightIcon from "../icons/CaretRightIcon";


const BoxMovie = ({item, handleDetail}) => {
    return (
        <div className="flex flex-col items-center relative" >
            <div 
                className="
                    relative overflow-hidden rounded-[12px] transform transition-all 
                    ease-in-out duration-300 group
                "
            >
                <img
                    src={item.image}
                    alt="Banner"
                    className="
                        w-full h-[250px] object-cover rounded-[12px] 
                        group-hover:scale-105 transition-all ease-in-out duration-300
                    "
                />
                <div 
                    className="
                        bg-movie absolute bottom-0 left-0 w-full h-[180px]
                    "
                >
                    <span 
                        className="
                            text-[15px] font-sans text-center py-[10px] absolute bottom-0 left-0 w-full
                            text-[#b4b4b4]
                        "
                    >
                        Episode {item.episode}
                    </span>   
                </div>
                <div
                    onClick={() => handleDetail(item.id)}
                    className="
                        absolute top-[95px] right-1/2 translate-x-1/2 w-[50px] h-[50px] bg-[#192026]/70 opacity-0 rounded-full flex 
                        justify-center items-center text-[#ffffff] transform transition-transform duration-300 ease-in-out 
                        group-hover:opacity-100 scale-0 group-hover:scale-100 z-[30] cursor-pointer hover:scale-110 hover:bg-[#1e6cb1]
                        
                    "
                >
                    <CaretRightIcon size={50} />
                </div>
                
            </div>
            <span className=" text-[16px] font-semibold text-center py-[10px]">
                {item.movieName}  
            </span>
        </div>
    )
}

export default BoxMovie;