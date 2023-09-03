import { Outlet } from "react-router-dom";

function BaseLayout() {
  return (
    <main className="app__content">
      <Outlet />
    </main>
  );
}

export default BaseLayout;
