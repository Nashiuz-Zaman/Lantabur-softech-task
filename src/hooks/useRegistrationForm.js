'use client';

// next
import { useRouter } from 'next/navigation';

// hooks
import useFormVisiblity from './useFormVisiblity';

// utils
import { axiosSecure } from '@/lib/axios/axios';

// redux
import { useDispatch } from 'react-redux';
import {
   setProfileData,
   setRegistrationErrors,
   setRegistrationLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { showToast } from '@/utils/toastify';

// custom hook body starts here
const useRegistrationForm = () => {
   // initial data and function extractions
   const dispatch = useDispatch();
   const router = useRouter();
   const { closeSignupFormWithBackdrop } = useFormVisiblity();

   // registration password validation
   const validatePassword = password => {
      const passwordErrors = [];

      const capitalLetterRegExp = /[A-Z]/;
      const specialCharsRegExp = /[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/;

      if (password.length < 6) {
         passwordErrors.push('Passwords must be 6 characters');
      }

      if (!capitalLetterRegExp.test(password)) {
         passwordErrors.push('Passwords must contain a capital letter');
      }

      if (!specialCharsRegExp.test(password)) {
         passwordErrors.push('Passwords must contain a special character');
      }

      return passwordErrors;
   };

   const validateInputs = inputs => {
      const { userName, email, password } = inputs;
      const emailRegex = /[a-z0-9._]+@[a-z0-9]+.[a-z]+/g;

      const foundErrors = [];

      if (userName === '') {
         foundErrors.push('Must provide an username');
      }

      if (email === '') {
         foundErrors.push('Must provide an email address');
      } else if (!emailRegex.test(email)) {
         foundErrors.push('Must provide a valid email address');
      }

      if (password === '') {
         foundErrors.push('Must provide a password');
      } else {
         foundErrors.push(...validatePassword(password));
      }

      return foundErrors;
   };

   // function to run when the form is submitted
   const handleSignup = async e => {
      e.preventDefault();
      // reset errors
      dispatch(setRegistrationErrors([]));

      const form = e.target;
      const userName = form.name.value;
      const email = form.email.value;
      const password = form.password.value;

      const dataObject = {
         userName,
         email,
         password,
      };

      const foundErrors = validateInputs(dataObject);

      // if there are erros return from here
      if (foundErrors.length > 0) {
         dispatch(setRegistrationErrors(foundErrors));
         return;
      }

      // if there are no basic errors code will reach this line
      try {
         dispatch(setRegistrationLoading(true));
         const user = {
            name: dataObject.userName,
            password: dataObject.password,
            email: dataObject.email,
         };

         const signupResponse = await axiosSecure.post('/users', {
            user,
         });
         dispatch(setRegistrationLoading(false));
         console.log(signupResponse);
         // if success
         if (signupResponse?.data?.status === 'success') {
            dispatch(setProfileData(signupResponse.data.user));
            showToast('Signup Successful', 'success');

            closeSignupFormWithBackdrop();
            router.push('/');
         }
      } catch (error) {
         if (error) {
            dispatch(setRegistrationLoading(false));
            dispatch(setRegistrationErrors([error.message]));
         }
      }
   };

   return {
      handleSignup,
   };
};

export default useRegistrationForm;
