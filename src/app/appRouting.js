import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Page404 from "../pages/page404";
import SignInPage from "../pages/sign-in";
import SignUpPage from "../pages/sign-up";
import ProfilePage from "../pages/profile";

import BaseLayout from "./layouts/BaseLayout";

const ArticlesListPage = lazy(() => import("../pages/articles-list"));
const SingleArticlePage = lazy(() => import("../pages/single-article"));

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<ArticlesListPage />} />
        <Route path="/articles" element={<ArticlesListPage />} />
        <Route path="/articles/:slug" element={<SingleArticlePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}

export default Routing;
