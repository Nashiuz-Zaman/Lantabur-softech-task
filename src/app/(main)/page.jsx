// components
import InnerContainer from '@/components/containers/InnerContainer/InnerContainer';
import Banner from '@/components/page-related/home/Banner/Banner';
import WhoWeAre from '@/components/page-related/home/WhoWeAre/WhoWeAre';
import LoginModal from '@/components/forms/LoginModal/LoginModal';
import RegistrationModal from '@/components/forms/RegistrationModal/RegtistrationModal';

const Home = () => {
   return (
      <>
         <section className='mt-customXs lg:mt-customMd xl:mt-custom2md mb-custom3md md:mb-customXl lg:mb-custom2xl'>
            <InnerContainer>
               <Banner />
            </InnerContainer>
         </section>

         <section
            id='learn-more'
            className='mb-custom3md md:mb-customXl lg:mb-custom2xl'
         >
            <InnerContainer>
               <WhoWeAre />
            </InnerContainer>
         </section>

         {/* forms */}
         <InnerContainer>
            <LoginModal />
            <RegistrationModal />
         </InnerContainer>
      </>
   );
};

export default Home;
