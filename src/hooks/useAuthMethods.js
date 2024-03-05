'use client';

// redux
import { useDispatch } from 'react-redux';
import { setProfileData } from '@/lib/redux/features/auth/authSlice';

// utils
import { axiosSecure } from '@/lib/axios/axios';
import { showToast } from '@/utils/toastify';

const useAuthMethods = () => {
   const dispatch = useDispatch();

   const logout = async () => {
      const res = await axiosSecure.get('/logout');

      if (res.data.status === 'success') {
         dispatch(setProfileData(null));
         showToast('Logged Out', 'success');
      }
   };

   return { logout };
};

export default useAuthMethods;
