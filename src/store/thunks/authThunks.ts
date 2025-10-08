import { cookieStorage } from '@/lib/cookie';
import { clearUser } from '../slice/userSlice';

export const logoutThunk = () => async (dispatch: (action: any) => void) => {
  try {
    cookieStorage.removeItem('access_token');
    cookieStorage.removeItem('refresh_token');
    dispatch(clearUser());
  } catch (err) {
    dispatch(clearUser());
  }
};
