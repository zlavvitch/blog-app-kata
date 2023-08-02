/* eslint-disable import/prefer-default-export */
import { format } from "date-fns";

export const formatArticle = (article) => ({
  slug: article.slug,
  title: article.title,
  likesCount: article.favoritesCount,
  tags: article.tagList,
  text: article.body,
  // liked: article.favorited,
  description: article.description,
  username: article.author.username,
  updatedDate: format(new Date(article.updatedAt), "MMMM d, yyyy"),
  imagePath: article.author.image,
});
