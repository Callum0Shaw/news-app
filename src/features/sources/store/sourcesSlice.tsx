import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { getAllSources } from '../utils/api';
import { Source } from '../types';

interface SourcesState {
  sources: Source[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: SourcesState = {
  sources: [],
  status: 'idle',
  error: undefined,
};

const fetchSources = createAsyncThunk('sources/fetchSources', async (): Promise<Source[]> => {
  const sources = await getAllSources();
  return sources;
});

export const sourcesSlice = createSlice({
  name: 'sources',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchSources.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchSources.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.sources = action.payload.map((source) => ({ id: source.id, name: source.name }));
      })
      .addCase(fetchSources.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const getSources = (state: { sources: typeof initialState }) => state.sources.sources;
export const getSourcesStatus = (state: { sources: typeof initialState }) => state.sources.status;

export default sourcesSlice.reducer;
