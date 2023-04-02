import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import { getAllArticles, getArticlesBySource, getArticlesByTitle } from '../utils/api';

const initialState = {
  articles: [],
  status: 'idle',
  error: null,
  source: { value: 'all', label: 'All' },
  titleParams: '',
};

// THUNK MIDDLEWARES
export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async ({selectedSource, titleParams}, ...args) => {
    console.log(args);
    
    try {
      if (selectedSource.value === 'all' && !titleParams) {
        const { articles } = await getAllArticles();
        return articles;
      }
      if (!titleParams) {
        const { articles } = await getArticlesBySource(selectedSource.value);
        return articles;
      }      
      const { articles } = await getArticlesByTitle(selectedSource.value, titleParams);
      return articles;
    } catch (error) {
      return error.message;
    }
  }
);


export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setTitleParams: (state, action) => {
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
        state.articles = action.payload.map(article => ({...article, id: nanoid()}));
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectArticles = (state) => state.articles.articles;
export const getArticlesStatus = (state) => state.articles.status;
export const getArticlesError = (state) => state.articles.error;
export const getSelectedSource = (state) => state.articles.source;
export const getTitleParams = (state) => state.articles.titleParams;

export const { setSource, setTitleParams } = articlesSlice.actions;

export default articlesSlice.reducer;

  // export const fetchAll = createAsyncThunk('articles/fetchAll', async () => {
  //   try {
  //     const { articles } = await getAllArticles();
  //     return articles;
  //   } catch (error) {
  //     return error.message;
  //   }
  // });
  // export const fetchBySource = createAsyncThunk('articles/fetchBySource', async (source) => {
  //   try {
  //     const { articles } = await getArticlesBySource(source);
  //     return articles;
  //   } catch (error) {
  //     return error.message;
  //   }
  // });
  
  // export const fetchByTitle = createAsyncThunk('artilces/fetchByTitle', async (params, source) => {
  //   try {
  //     const { articles } = await getArticlesByTitle(params, source);
  //     return articles;
  //   } catch (error) {
  //     return error.message;
  //   }
  // });