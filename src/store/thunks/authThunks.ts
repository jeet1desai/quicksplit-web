import { cookieStorage } from '@/lib/cookie';
import { clearUser } from '../slice/userSlice';

export const logoutThunk = () => async (dispatch: (action: any) => void) => {
  try {
    cookieStorage.clear();
    dispatch(clearUser());
  } catch (err) {
    dispatch(clearUser());
  }
};
