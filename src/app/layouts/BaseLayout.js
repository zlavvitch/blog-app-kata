import { Outlet } from "react-router-dom";

import AppHeader from "../../widgets/AppHeader";

// import "../App/App.scss";

// eslint-disable-next-line import/prefer-default-export
function BaseLayout() {
  return (
    <>
      <AppHeader />
      <main className="app__content">
        <Outlet />
      </main>
    </>
  );
}

export default BaseLayout;
