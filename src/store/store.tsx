import { configureStore } from '@reduxjs/toolkit';
import articlesReducer from '../features/articles/store/articlesSlice';

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {articles: ArticlesState}
export type AppDispatch = typeof store.dispatch;
