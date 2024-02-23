import { Link, Outlet } from "react-router-dom";

export function Layout() {
  return (
    <>
      <header>
        <Link to="/">Home</Link>
        <Link to="/Statistic">Statictic</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
}
