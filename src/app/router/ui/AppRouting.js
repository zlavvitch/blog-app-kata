// import { lazy } from "react";
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

// import { useCallback, useMemo } from "react";

// import { routeConfig } from "../../../shared/config/routeConfig/routeConfig";
// import { ArticlesListPage } from "../../../pages";

// const routes = useMemo(() => Object.values(routeConfig), []);

// const renderWithWrapper = useCallback((route) => {
//   if (route.path === "articles") {
//     <Route index key={route.path} element={route.element} />;
//   }

//   return (
//     <Route
//       key={route.path}
//       path={route.path}
//       element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
//     />
//   );
// }, []);
// <RequireAuth></RequireAuth>;

// export function AppRouting() {
//   const routes = useMemo(() => Object.values(routeConfig), []);

//   const renderWithWrapper = useCallback((route) => {
//     if (route.path === "articles") {
//       <Route index key={route.path} element={route.element} />;
//     }

//     return (
//       <Route
//         key={route.path}
//         path={route.path}
//         element={route.authOnly ? <RequireAuth>{route.element}</RequireAuth> : route.element}
//       />
//     );
//   }, []);

//   return (
//     <Routes>
//       <Route path="/" element={<BaseLayout />}>
//         {routes.map(renderWithWrapper)}
//       </Route>
//     </Routes>
//   );
// }

// if (route.path === "articles") {
//   <Route index key={route.path} element={route.element} />;
// }

// if (route.path === "profile" || route.path === "articles/:slug/edit" || route.path === "new-article") {
//   return <Route key={route.path} path={route.path} element={<RequireAuth>{route.element}</RequireAuth>} />;
// }

// return <Route key={route.path} path={route.path} element={route.element} />;

// <Route path="*" element={<Page404 />} />

// const { ArticlesListPage } = lazy(() => import("../pages/articles-list"));
// const { SingleArticlePage } = lazy(() => import("../pages/article-single"));

// import {
//   Page404,
//   SignInPage,
//   SignUpPage,
//   ProfilePage,
//   ArticleNewPage,
//   ArticleEditPage,
//   ArticlesListPage,
//   SingleAtriclePage,
// } from "../../../pages";

// {Object.values(routeConfig).map(({ path, element }) => (
// <Route key={path} path={path} element={element} />
// ))}

// export default AppRouting;

// import {
//   Page404,
//   SignInPage,
//   SignUpPage,
//   ProfilePage,
//   ArticleNewPage,
//   ArticleEditPage,
//   ArticlesListPage,
//   SingleAtriclePage,
// } from "../../../pages";

// <Route path="/articles" element={<ArticlesListPage />} />
// <Route path="/articles/:slug" element={<SingleAtriclePage />} />
// <Route path="/articles/:slug/edit" element={<ArticleEditPage />} />
// <Route path="/new-article" element={<ArticleNewPage />} />
// <Route path="/sign-in" element={<SignInPage />} />
// <Route path="/sign-up" element={<SignUpPage />} />
// <Route path="/profile" element={<ProfilePage />} />
