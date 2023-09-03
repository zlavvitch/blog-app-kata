import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { Article } from "../../../widgets/Article";
import { Spinner, ErrorMessage } from "../../../shared";
import { getArticle, selectSingleArticle, selectArticleLoadingStatus } from "../../../entities/Article";

export function SingleAtriclePage() {
  const { slug } = useParams();
  const article = useSelector(selectSingleArticle);
  const articleLoadingStatus = useSelector(selectArticleLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getArticle(slug));
  }, [dispatch, slug]);

  const isEmpty = JSON.stringify(article) === "{}";
  const elements = isEmpty ? null : <Article article={article} articleContent />;
  const spinner = articleLoadingStatus !== "loading" ? null : <Spinner />;
  const error = articleLoadingStatus !== "error" ? null : <ErrorMessage />;

  return (
    <div>
      {elements}
      {spinner}
      {error}
    </div>
  );
}
