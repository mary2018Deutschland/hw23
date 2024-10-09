import { configureStore } from '@reduxjs/toolkit';
import authReduser from './slices/authSlice';
import { checkTokenExpirationMiddleware } from '../../middlewares/token';
const store = configureStore({
  reducer: {
    auth: authReduser,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware().concat(checkTokenExpirationMiddleware);
  },
});
export default store;
