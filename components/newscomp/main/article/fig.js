
import Image from 'next/image'
export default function Fig({ imgSrc, authorName, authorUrl, licenseName, licenseUrl, imgP}) {
    
    return (
                  <figure className="w-full sm:px-[50px] mb-[40px] mt-[60px]">
                            <div className="relative h-[20em] w-[100%]">
    <Image unoptimized   style={{objectFit:"cover"}} fill priority={true} className="" src={imgSrc} alt="City Skyline"/>
                            </div>

    <figcaption className="mt-2 text-sm text-center text-gray-500 dark:text-gray-400">{imgP} Photo by <a className="underline" href={authorUrl} rel="noopener noreferrer nofollow" target="_blank">{authorName}</a> licensed under <a className="underline" href={ licenseUrl} rel="noopener noreferrer nofollow" target="_blank">{licenseName }</a>.</figcaption>
</figure>
    )
}