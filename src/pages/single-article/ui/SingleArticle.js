import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import Article from "../../../widgets/Article";
import { Spinner, ErrorMessage } from "../../../shared";
import { fetchArticle, selectSingleArticle, selectArticleLoadingStatus } from "../../../entities/Article";

function SingleAtriclePage() {
  const { slug } = useParams();
  const article = useSelector(selectSingleArticle);
  const articleLoadingStatus = useSelector(selectArticleLoadingStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchArticle(slug));
  }, []);

  const isEmpty = JSON.stringify(article) === "{}";
  const elements = isEmpty ? null : <Article article={article} content={false} />;
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

export default SingleAtriclePage;
