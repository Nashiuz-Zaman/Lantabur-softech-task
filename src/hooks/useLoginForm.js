'use client';

// next
import { useRouter } from 'next/navigation';

// custom hook
import useFormVisiblity from './useFormVisiblity';

// redux
import { useDispatch } from 'react-redux';
import {
   setProfileData,
   setLoginErrors,
   setLoginLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';
import { axiosSecure } from '@/lib/axios/axios';

const useLoginForm = () => {
   const dispatch = useDispatch();
   const { closeLoginFormWithBackdrop } = useFormVisiblity();
   const router = useRouter();

   const validateInputs = inputs => {
      const { email, password } = inputs;
      const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

      const foundErrors = [];

      if (email === '') {
         foundErrors.push('Must provide an email address');
      } else if (!emailRegex.test(email)) {
         foundErrors.push('Must provide a valid email address');
      }

      if (password === '') {
         foundErrors.push('Must provide a password');
      }

      return foundErrors;
   };

   // handle normal login
   const handleLoginEmail = async e => {
      e.preventDefault();

      // reset errors
      dispatch(setLoginErrors([]));

      const form = e.target;
      const email = form.email.value;
      const password = form.password.value;

      const dataObject = {
         email,
         password,
      };

      const foundErrors = validateInputs(dataObject);

      // if there are erros return from here
      if (foundErrors.length > 0) {
         dispatch(setLoginErrors(foundErrors));
         return;
      }

      try {
         dispatch(setLoginLoading(true));
         // firebase login api call
         const result = null;

         //  if firebase login is successful, check database for profile data
         if (result.user) {
            const loginResponse = await axiosSecure.post('/login', {
               email: result.user.email,
            });

            if (loginResponse.data.success) {
               const profileData = loginResponse.data.user;
               dispatch(setProfileData(profileData));
              
               // set profile and the jwt token in the localstorage
               localStorage.setItem(
                  'tokenExists',
                  loginResponse.data.tokenExists
               );

               closeLoginFormWithBackdrop();

               router.push('/');

               showToast('Logged In Successfully', 'success');
               dispatch(setLoginLoading(false));
            }
         }
      } catch (error) {
         dispatch(setLoginErrors(["Email/Password doesn't match. Try again."]));
         dispatch(setLoginLoading(false));
      }
   };

   return {
      handleLoginEmail,
   };
};

export default useLoginForm;
