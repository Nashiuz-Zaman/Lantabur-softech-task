'use client';

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

         const loginResponse = await axiosSecure.post('/login', {
            loginData: dataObject,
         });

         dispatch(setLoginLoading(false));

         if (loginResponse.data.status === 'failed') {
            dispatch(setLoginErrors([loginResponse.data.message]));
            return;
         }

         if (loginResponse.data.status === 'success') {
            dispatch(setProfileData(loginResponse.data.user));
            closeLoginFormWithBackdrop();
            showToast('Logged In Successfully', 'success');
         }
      } catch (error) {
         dispatch(setLoginErrors([error.message]));
         dispatch(setLoginLoading(false));
      }
   };

   return {
      handleLoginEmail,
   };
};

export default useLoginForm;
