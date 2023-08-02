export { articlesReducer, articlesActions } from "./model/articlesSlice";

export { fetchArticles } from "./services/fetchArticles";

export {
  selectAllArticles,
  selectArticlesOffset,
  selectArticlesCount,
  selectArticlesLoadingStatus,
} from "./config/selectors";
