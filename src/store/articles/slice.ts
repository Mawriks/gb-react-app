import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { api } from 'src/constants';
import { Article, ArticlesState } from './types';

const initialState: ArticlesState = {
  articles: [],
  loading: false,
  error: '',
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    addArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchArticles.pending, (state) => {
      state.loading = true;
      state.error = '';
      state.articles = [];
    });
    builder.addCase(
      fetchArticles.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        state.articles = action.payload;
        state.loading = false;
      }
    );
    builder.addCase(fetchArticles.rejected, (state, action: { error: any }) => {
      state.error = action.error.message;
      state.loading = false;
      state.articles = [];
    });
  },
});

export const fetchArticles = createAsyncThunk(
  'articles/fetchArticles',
  async () => {
    const response = await fetch(`${api}/v3/articles`);
    return response.json();
  }
);

export const { addArticles } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
