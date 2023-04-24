import { createSlice, createAsyncThunk, nanoid, PayloadAction } from '@reduxjs/toolkit';
import { getArticles } from '../utils/api';
import { Article } from '../types';
import { Source } from '../../sources/types';

interface ArticlesState {
  articles: Article[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
  selectedSource: Source;
  titleParams: string;
}

const initialState: ArticlesState = {
  articles: [],
  status: 'idle',
  error: undefined,
  selectedSource: { id: 'all', name: 'All' },
  titleParams: '',
};

// THUNK MIDDLEWARES
interface FetchArticlesArgs {
  selectedSource: Source;
  titleParams: string;
}

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({ selectedSource, titleParams }: FetchArticlesArgs): Promise<Article[]> => {
    const { articles } = await getArticles(selectedSource.id, titleParams);
    return articles;
  }
);

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setSource: (state, action: PayloadAction<Source>) => {
      state.selectedSource = action.payload;
    },
    setTitleParams: (state, action: PayloadAction<string>) => {
      state.titleParams = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.articles = action.payload.map((article) => ({ ...article, id: nanoid() }));
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectArticles = (state: { articles: typeof initialState }) => state.articles.articles;
export const getArticlesStatus = (state: { articles: typeof initialState }) =>
  state.articles.status;
export const getArticlesError = (state: { articles: typeof initialState }) => state.articles.error;
export const getSelectedSource = (state: { articles: typeof initialState }) =>
  state.articles.selectedSource;
export const getTitleParams = (state: { articles: typeof initialState }) =>
  state.articles.titleParams;

export const { setSource, setTitleParams } = articlesSlice.actions;

export default articlesSlice.reducer;
