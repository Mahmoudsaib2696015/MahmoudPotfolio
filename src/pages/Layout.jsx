import { Outlet } from "react-router-dom";
import { Suspense } from "react/cjs/react.production.min";
import NavBar from "../components/NavBar";
import Footer from "./Footer";
export default function Layout() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<>...</>}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}
