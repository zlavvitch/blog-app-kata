import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Article from "../Article";
import ArticlePagination from "../ArticlePagination";
import Spinner from "../Spinner";
import ErrorMessage from "../ErrorMessage";
import UniqueKey from "../../utilites/uniqueKey";
import { selectAllArticles, selectArticlesLoadingStatus } from "../../selectors";

import { fetchArticles } from "./articlesSlice";
import classes from "./ArticleList.module.scss";

function ArticleList() {
  const articles = useSelector(selectAllArticles);
  const articlesLoadingStatus = useSelector(selectArticlesLoadingStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticles());
  }, []);

  const renderArticles = (data) => {
    const renderData = data.map((article) => <Article key={UniqueKey()} article={article} />);

    const elements = articles.length === 0 ? null : renderData;

    return elements;
  };

  const elements = renderArticles(articles);
  const pagination = elements === null ? null : <ArticlePagination />;
  const spinner = articlesLoadingStatus !== "loading" ? null : <Spinner />;
  const error = articlesLoadingStatus !== "error" ? null : <ErrorMessage />;

  return (
    <div className={classes.ArticleList}>
      {elements}
      {spinner}
      {error}
      {pagination}
    </div>
  );
}

export default ArticleList;

// const { author, ...dataArticle } = article;

// return <Article key={UniqueKey()} article={dataArticle} author={author} />;
