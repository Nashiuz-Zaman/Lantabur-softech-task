// imports
import Image from 'next/image';
import SectionHeading from '@/components/shared/SectionHeading/SectionHeading';

// data
import { destinationsContent } from '@/uiData/homeUiContent';
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';

const page = () => {
   return (
      <>
         <InnerContainer>
            <section className='mt-customXs lg:mt-customMd xl:mt-custom2md mb-custom3md md:mb-customXl lg:mb-custom2xl'>
               <SectionHeading
                  text='Your Destinations'
                  modifyClasses='text-center text-2xl md:text-3xl lg:text-4xl xl:text-5xl !font-extrabold mb-7 md:mb-10'
               />

               <div className='grid grid-cols-2 md:grid-cols-3 w-full md:w-[80%] lg:w-[70%] gap-6 mx-auto'>
                  {destinationsContent.map(image => {
                     return (
                        <div
                           key={image.id}
                           className='w-full aspect-[16/10] overflow-hidden'
                        >
                           <Image
                              className='w-full h-full object-cover'
                              width={600}
                              height={400}
                              priority={true}
                              src={image.imageSource}
                              alt={image.alt}
                           />
                        </div>
                     );
                  })}
               </div>
            </section>
         </InnerContainer>
      </>
   );
};

export default page;
