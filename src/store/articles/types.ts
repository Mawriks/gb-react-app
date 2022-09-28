export interface Article {
  id: string;
  title: string;
  summary: string;
}

export interface ArticlesState {
  articles: Article[];
  loading: boolean;
  error: string;
}
