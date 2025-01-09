import {configureStore} from '@reduxjs/toolkit';
import supabaseReducer from './slices/supabaseSlice';

export const store = configureStore({
  reducer: {
    supabase: supabaseReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
