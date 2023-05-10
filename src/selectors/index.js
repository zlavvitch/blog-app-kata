export const selectAllArticles = (state) => state.articles.articles;
export const selectArticlesOffset = (state) => state.articles.articlesOffset;
export const selectArticlesCount = (state) => state.articles.articlesCount;
export const selectArticlesLoadingStatus = (state) => state.articles.articlesLoadingStatus;

export const selectSingleArticle = (state) => state.article.article;
export const selectArticleLoadingStatus = (state) => state.article.articleLoadingStatus;
