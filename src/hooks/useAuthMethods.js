'use client';

import { useRouter } from 'next/navigation';

// redux
import { useDispatch } from 'react-redux';
import { setProfileData } from '@/lib/redux/features/auth/authSlice';

// utils
import { axiosSecure } from '@/lib/axios/axios';
import { showToast } from '@/utils/toastify';

const useAuthMethods = () => {
   const dispatch = useDispatch();
   const router = useRouter();

   const logout = async () => {
      const res = await axiosSecure.get('/logout');

      if (res.data.status === 'success') {
         dispatch(setProfileData(null));
         router.push('/')
         showToast('Logged Out', 'success');
      }
   };

   return { logout };
};

export default useAuthMethods;
