'use client';

// react
import { useEffect } from 'react';

// redux
import { useDispatch } from 'react-redux';
import {
   setProfileData,
   setUserLoading,
} from '@/lib/redux/features/auth/authSlice';

// utils
import { axiosSecure } from '@/lib/axios/axios';

const useAuth = () => {
   const dispatch = useDispatch();

   // send an api request to check if session cookies exists, if yes then send the user data back
   useEffect(() => {
      const getUser = async () => {
         dispatch(setUserLoading(true));
         const res = await axiosSecure.get('/auth');
         dispatch(setUserLoading(false));

         if (res.data?.user) {
            console.log(res.data.user);
            dispatch(setProfileData(res.data?.user));

            return;
         }

         dispatch(setProfileData(null));
      };

      getUser();
   }, [dispatch]);
};

export default useAuth;
