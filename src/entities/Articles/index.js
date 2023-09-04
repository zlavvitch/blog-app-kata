export { articlesReducer, articlesActions } from "./model/articlesSlice";

export { fetchArticles } from "./services";

export {
  selectAllArticles,
  selectArticlesOffset,
  selectArticlesCount,
  selectArticlesLoadingStatus,
  selectArticlesPage,
} from "./config/selectors";
