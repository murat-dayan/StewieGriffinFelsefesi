import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {supabase} from '../../../supabase/supabase';

export const fetchImageUrls = createAsyncThunk(
  'supabase/fetchImageUrls',
  async (_, {rejectWithValue}) => {
    try {
      const {data, error} = await supabase.storage.from('wallpapers').list('', {
        limit: 100,
        offset: 0,
      });

      if (error) {
        throw new Error(error.message);
      }

      const urls = data.map(
        file =>
          supabase.storage.from('wallpapers').getPublicUrl(file.name).data
            .publicUrl,
      );

      return urls;
    } catch (err: any) {
      return rejectWithValue(err.message);
    }
  },
);

interface SupabaseState {
  imageUrls: string[];
  loading: boolean;
  error: string | null;
}

const initialState: SupabaseState = {
  imageUrls: [],
  loading: false,
  error: null,
};

const supabaseSlice = createSlice({
  name: 'supabase',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(fetchImageUrls.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchImageUrls.fulfilled, (state, action) => {
        state.loading = false;
        state.imageUrls = action.payload;
      })
      .addCase(fetchImageUrls.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default supabaseSlice.reducer;
