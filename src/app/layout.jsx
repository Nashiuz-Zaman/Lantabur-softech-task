// react
import PropTypes from 'prop-types';

// font
import { Inter } from 'next/font/google';

// components
import Backdrop from '@/components/shared/Backdrop/Backdrop';
import AuthComponent from '@/components/shared/AuthComponent/AuthComponent';

// redux
import ReduxProvider from '@/lib/redux/ReduxProvider';

// react toastify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Slide } from 'react-toastify';

// styles
import './globals.css';

// init font
const inter = Inter({ subsets: ['latin'] });

// meta data
export const metadata = {
   title: 'Waves - Making your travelling dreams a reality',
   description:
      "Discover. Explore. Unwind. Your exotic adventure begins with us.",
};

const RootLayout = ({ children }) => {
   return (
      <html lang='en'>
         <body className={`${inter.className} text-textPrimary`}>
            <ReduxProvider>
               {/* react toastify */}
               <ToastContainer
                  position='top-center'
                  autoClose={2000}
                  transition={Slide}
                  hideProgressBar
                  newestOnTop
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme='light'
               />

               {/* auth Component */}
               <AuthComponent />

               {/* backdrop component */}
               <Backdrop />
               {children}
            </ReduxProvider>
         </body>
      </html>
   );
};

RootLayout.propTypes = {
   children: PropTypes.any,
};

export default RootLayout;
