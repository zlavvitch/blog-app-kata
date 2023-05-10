import formatArticle from "../utilites/formatArticle";

import { ARTICLE_FETCHED, ARTICLE_FETCHING_LOADING, ARTICLE_FETCHING_ERROR } from "./actionTypes";

export const articleFetched = (article) => ({
  type: ARTICLE_FETCHED,
  playload: article,
});

export const articleFetchingLoading = () => ({
  type: ARTICLE_FETCHING_LOADING,
});

export const articleFetchingError = () => ({
  type: ARTICLE_FETCHING_ERROR,
});

export const fetchArticle = (slug) => async (dispatch) => {
  dispatch(articleFetchingLoading());

  try {
    const res = await fetch(`https://blog.kata.academy/api/articles/${slug}`);

    // console.log(res);
    if (!res.ok) {
      if (res.status === 500) {
        throw new Error(`Could not fetch article, status ${res.status}`);
      }
    }

    const data = await res.json();
    const formatData = formatArticle(data.article);

    dispatch(articleFetched(formatData));
  } catch (err) {
    dispatch(articleFetchingError());
    throw err.message;
  }
};
