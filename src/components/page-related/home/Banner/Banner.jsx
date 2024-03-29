// next js
import Image from 'next/image';

// components
import BannerText from '@/components/page-related/home/Banner/BannerText/BannerText';

// data
import { homeTopBannerTextContent } from '@/uiData/homeUiContent';

const Banner = () => {
   // extract heading and subheading
   const { heading, subheading } = homeTopBannerTextContent;

   return (
      <div className='grid grid-cols-1 gap-12 sm:gap-[5rem] lg:gap-0 lg:grid-cols-2 items-center'>
         {/* banner text part */}
         <BannerText
            heading={heading}
            subheading={subheading}
            modifyClasses='lg:animate-fadeInFromLeft'
         />

         {/* banner image part */}
         <div className='w-full h-full sm:w-[80%] lg:w-full mx-auto animate-[fade-in_600ms_ease-out_forwards] lg:animate-fadeInFromRight'>
            <Image
               width={600}
               height={450}
               priority={true}
               quality={100}
               src='https://i.postimg.cc/NjfLgJjg/banner.webp'
               className='!w-full !h-full !object-cover rounded-l-full rounded-tr-full shadow-medium'
               alt='Sea beach'
            />
         </div>
      </div>
   );
};

export default Banner;
