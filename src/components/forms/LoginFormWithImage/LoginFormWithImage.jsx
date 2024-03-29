// react
import PropTypes from 'prop-types';

// next
import Image from 'next/image';

// components
import LoginForm from './LoginForm/LoginForm';

const LoginFormWithImage = ({ imageSource }) => {
   return (
      <div
         className={`grid bg-white grid-cols-1 2md:grid-cols-[1fr_max-content] rounded-2xl overflow-hidden mx-auto w-[17.875rem] xs:w-max 2md:w-[47.5rem] lg:w-[55rem] shadow-medium login-custom-focus`}
      >
         {/* image */}
         <div className='hidden 2md:block w-full h-full overflow-hidden'>
            <Image
               width={700}
               height={500}
               className='!w-full !h-full !object-cover'
               src={imageSource}
               alt='cover image'
            />
         </div>

         {/* login form */}
         <div className='w-full flex items-center'>
            <LoginForm />
         </div>
      </div>
   );
};

LoginFormWithImage.propTypes = {
   imageSource: PropTypes.any,
};

export default LoginFormWithImage;
