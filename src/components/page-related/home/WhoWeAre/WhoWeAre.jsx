// next
import Image from 'next/image';

// components
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

// data
import { WhoWeAreContent } from '@/uiData/homeUiContent';

const WhoWeAre = () => {
   const { imageSource, heading, description } = WhoWeAreContent;

   return (
      <>
         {/* heading */}
         <SectionHeading
            text={heading}
            modifyClasses='text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl !font-extrabold mb-7 md:mb-10'
         />

         <div className='w-full sm:w-[80%] md:w-[70%] lg:w-[50%] mx-auto aspect-[16/10] mb-8 md:mb-10 shadow-large'>
            <Image
               src={imageSource}
               width={900}
               height={600}
               className='object-cover w-full h-full'
               alt='Company group photo'
               placeholder='blur'
               blurDataURL={imageSource}
            />
         </div>

         {/* description */}
         <p className='w-full md:w-[80%] 2xl:w-[65%] lg:text-xl font-medium mx-auto sm:text-center !leading-relaxed'>
            {description}
         </p>
      </>
   );
};

export default WhoWeAre;
