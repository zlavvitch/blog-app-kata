import { Route, Routes } from "react-router-dom";

import {
  Page404,
  SignInPage,
  SignUpPage,
  ProfilePage,
  ArticleNewPage,
  ArticleEditPage,
  ArticlesListPage,
  SingleAtriclePage,
} from "../../../pages";
import BaseLayout from "../../layouts/BaseLayout";

import { RequireAuth } from "./RequireAuth";

export function AppRouting() {
  return (
    <Routes>
      <Route path="/" element={<BaseLayout />}>
        <Route index element={<ArticlesListPage />} />
        <Route path="/articles/:slug" element={<SingleAtriclePage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route
          path="/articles/:slug/edit"
          element={
            <RequireAuth>
              <ArticleEditPage />
            </RequireAuth>
          }
        />
        <Route
          path="/new-article"
          element={
            <RequireAuth>
              <ArticleNewPage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <ProfilePage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
}
