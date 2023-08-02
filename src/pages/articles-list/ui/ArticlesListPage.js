import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Article from "../../../widgets/Article";
import { Spinner, ErrorMessage, uniqueKey } from "../../../shared";
import {
  fetchArticles,
  selectAllArticles,
  selectArticlesLoadingStatus,
  selectArticlesCount,
} from "../../../entities/Articles";

import ArticlePagination from "./ArticlesPagination";
import classes from "./ArticleList.module.scss";

function ArticlesListPage() {
  const articles = useSelector(selectAllArticles);
  const articlesLoadingStatus = useSelector(selectArticlesLoadingStatus);
  const articlesCount = useSelector(selectArticlesCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const onChangePage = (page) => {
    dispatch(fetchArticles(page));
  };

  const renderArticles = (data) => {
    const renderData = data.map((article) => <Article key={uniqueKey()} article={article} />);
    const elements = data.length === 0 ? null : renderData;

    return elements;
  };

  const elements = renderArticles(articles);
  const spinner = articlesLoadingStatus !== "loading" ? null : <Spinner />;
  const error = articlesLoadingStatus !== "error" ? null : <ErrorMessage />;
  const pagination =
    elements === null ? null : <ArticlePagination articlesCount={articlesCount} onChangePage={onChangePage} />;

  return (
    <div className={classes.ArticleList}>
      {elements}
      {spinner}
      {error}
      {pagination}
    </div>
  );
}

export default ArticlesListPage;
