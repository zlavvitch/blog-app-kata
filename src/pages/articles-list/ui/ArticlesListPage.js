import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Article } from "../../../widgets/Article";
import { Spinner, ErrorMessage, uniqueKey } from "../../../shared";
import {
  fetchArticles,
  selectAllArticles,
  selectArticlesLoadingStatus,
  selectArticlesCount,
  selectArticlesPage,
} from "../../../entities/Articles";

import { ArticlesPagination } from "./ArticlesPagination";
import classes from "./ArticleList.module.scss";

export function ArticlesListPage() {
  const articles = useSelector(selectAllArticles);
  const articlesLoadingStatus = useSelector(selectArticlesLoadingStatus);
  const articlesCount = useSelector(selectArticlesCount);
  const currentPage = useSelector(selectArticlesPage);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles(currentPage));
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
    elements === null ? null : (
      <ArticlesPagination currentPage={currentPage} articlesCount={articlesCount} onChangePage={onChangePage} />
    );

  return (
    <div className={classes.ArticleList}>
      {elements}
      {spinner}
      {error}
      {pagination}
    </div>
  );
}
