const initialState = {
  articles: [],
  articlesCount: 0,
  articlesLoadingStatus: "",
};

// eslint-disable-next-line default-param-last
const articles = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLES_FETCHED":
      return {
        ...state,
        articles: action.playload.articles,
        articlesCount: action.playload.articlesCount,
        articlesLoadingStatus: "idle",
      };

    case "ARTICLES_FETCHING_LOADING":
      return { ...state, articlesLoadingStatus: "loading" };

    case "ARTICLES_FETCHING_ERROR":
      return { ...state, articlesLoadingStatus: "error" };

    default:
      return state;
  }
};

export default articles;

// case "ARTICLES_FETCHING":
//   return { ...state, articles: action.playload.articles, articlesCount: action.playload.articlesCount };

// case "ARTICLES_PAGE_CHANGE":
//   return { ...state, articlesOffset: action.playload.articlesOffset };
