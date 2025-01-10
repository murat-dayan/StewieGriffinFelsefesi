import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {supabase} from '../../../supabase/supabase';
import {readString} from 'react-native-csv';

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

export const fetchSeasonsCsvData = createAsyncThunk(
  'supabase/fetchSeasonsCsvData',
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await supabase.storage
        .from('seasonsdataset')
        .getPublicUrl('famiyguydataset.csv');

      if (!data || !data.publicUrl) {
        throw new Error('CSV dosyasının URL’si alınamadı.');
      }

      const csvUrl = data.publicUrl;

      const response = await fetch(csvUrl);

      if (!response.ok) {
        throw new Error('CSV File Can Not Taken');
      }

      const csvText = await response.text();

      const parsedData = readString(csvText, {
        header: false,
        skipEmptyLines: true,
      });

      return parsedData.data as Record<string, any>[];
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  },
);

interface SupabaseState {
  imageUrls: string[];
  seasonscsvData: Record<string, any>[];
  loading: boolean;
  error: string | null;
}

const initialState: SupabaseState = {
  imageUrls: [],
  seasonscsvData: [],
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
      })
      .addCase(fetchSeasonsCsvData.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSeasonsCsvData.fulfilled, (state, action) => {
        state.loading = false;
        state.seasonscsvData = action.payload; // CSV verilerini kaydet
      })
      .addCase(fetchSeasonsCsvData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default supabaseSlice.reducer;
