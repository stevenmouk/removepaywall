

import Fig from './fig'
export default function Header({ title,date, firstP, imgSrc, authorName, authorUrl, licenseName, licenseUrl, imgP,articleCategory}) {
    

    return (
        <>
           <div className="px-6 py-12  mb-[-10px]">
                <div className="w-full max-w-3xl mx-auto">
                     <h1 className="mb-3 text-4xl  font-[700] tracking-[0.8px] ibm md:leading-[1]  md:text-[42px]">
                         { title}
</h1>
                    
                    <p className="font-serif text-gray-400 ibm font-[700]  lbFont ">{articleCategory } &#x2022; {date}</p>
                </div>
                
            </div>


            <section className="px-4 md:px-6 mb-[50px] ">
   <div className="w-full max-w-3xl mx-auto">
      <div className="text-[#334155] font-serif leading-relaxed md:text-md md:leading-relaxed">
                        <p className="mb-7 last:mb-0"> { firstP}
                        </p>

                        
                       
                        <Fig imgSrc={imgSrc} authorName={authorName} authorUrl={authorUrl} licenseName={licenseName} licenseUrl={licenseUrl} imgP={imgP } />



                        
      </div>
   </div>
</section>

            

            </>
    )


}