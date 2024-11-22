import Link from 'next/link'
import Image from 'next/image'


export default function Articlelist({ listData }) {
    
    const makeList = () => {

        var res = [];

        for (var i = 0; i < listData.length; i++){
            res.push(
               <Link
  key={i}
  href={listData[i].page_link_rel}
  className="hover:bg-gray-200 mb-[30px] rounded-md px-[10px] sm:px-[20px] border items-center border-black max-w-[740px] flex flex-col sm:h-[160px]"
>
  {/* Category Text */}
<div className="flex w-full  mt-3  text-sm font-bold text-gray-400 ">
    
                        {listData[i].category} &#x2022; {listData[i].date}
   
  </div>

  {/* Main Content: Image and Text */}
  <div className="flex flex-col py-[20px] sm:py-[0px] gap-y-[10px] sm:gap-y-[0px] sm:flex-row items-center w-full">
   
    <div className="flex flex-col justify-center px-4 sm:px-0">
      <h1 className="font-['IBM_Plex_Sans'] text-2xl font-bold text-black mb-2">
        {listData[i].title}
      </h1>
      
                        </div>
                         <div className="flex items-center justify-center flex-shrink-0">
      <Image
        className="object-cover border border-black rounded-md max-h-[108px] w-[200px] h-auto"
        unoptimized
        width={200}
        height={108}
        src={listData[i].img_link_rel}
        alt="City Skyline"
      />
    </div>
  </div>
</Link>



            )
        }

        return res;

    }

    return (<>
        
      

        <div className="flex flex-col  items-center w-full mb-[200px]">
            
      
           {makeList()}
            
        </div>
       

       
    </>
    )
}