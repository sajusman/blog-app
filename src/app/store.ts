import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import blogsReducer from './reducers/blogsReducer';

export const store = configureStore({
  reducer: {
    blogs: blogsReducer
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
