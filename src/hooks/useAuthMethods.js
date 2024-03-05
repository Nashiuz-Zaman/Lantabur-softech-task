// utils
import { axiosSecure } from '@/lib/axios/axios';
import { showToast } from '@/utils/toastify';

const useAuthMethods = () => {
   const logout = async () => {
      const res = await axiosSecure.get('/logout');

      if (res.data.status === 'success') {
         showToast('Logged Out', 'success');
      }
   };

   return { logout };
};

export default useAuthMethods;
