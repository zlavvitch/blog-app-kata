/* eslint-disable indent */
import formatArticle from "../utilites/formatArticle";

import { ARTICLES_FETCHED, ARTICLES_FETCHING_LOADING, ARTICLES_FETCHING_ERROR } from "./actionTypes";

// eslint-disable-next-line no-underscore-dangle
const _baseURL = "https://blog.kata.academy/api/";

export const articlesFetched = (articles) => ({
  type: ARTICLES_FETCHED,
  playload: articles,
});

export const articlesFetchingLoading = () => ({
  type: ARTICLES_FETCHING_LOADING,
});

export const articlesFetchingError = () => ({
  type: ARTICLES_FETCHING_ERROR,
});

export const fetchArticles =
  (page = 1) =>
  async (dispatch) => {
    const limit = 5;
    const newPage = (page - 1) * limit;

    dispatch(articlesFetchingLoading());

    try {
      const res = await fetch(`${_baseURL}articles?limit=${limit}&offset=${newPage}`);

      if (!res.ok) {
        if (res.status === 500) {
          throw new Error("500", "Ошибка на сервере!");
        }

        throw new Error(`Could not fetch articles, status ${res.status}`);
      }

      const data = await res.json();
      const articles = data.articles.map(formatArticle);
      const formatData = { ...data, articles };

      dispatch(articlesFetched(formatData));
    } catch (err) {
      dispatch(articlesFetchingError());
      throw err.message;
    }
  };

// const formatArticles = (article) => ({
//   slug: article.slug,
//   title: article.title,
//   likesCount: article.favoritesCount,
//   tags: article.tagList,
//   text: article.body,
//   // liked: article.favorited,
//   description: article.description,
//   username: article.author.username,
//   updatedDate: format(new Date(article.updatedAt), "MMMM d, yyyy"),
//   imagePath: article.author.image,
// });
