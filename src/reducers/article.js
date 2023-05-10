const initialState = {
  article: {},
  articleLoadingStatus: "",
};

// eslint-disable-next-line default-param-last
const article = (state = initialState, action) => {
  switch (action.type) {
    case "ARTICLE_FETCHED":
      return {
        ...state,
        article: action.playload,
        articleLoadingStatus: "idle",
      };

    case "ARTICLE_FETCHING_LOADING":
      return { ...state, articleLoadingStatus: "loading" };

    case "ARTICLE_FETCHING_ERROR":
      return { ...state, articleLoadingStatus: "error" };

    default:
      return state;
  }
};

export default article;
