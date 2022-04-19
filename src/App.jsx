import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import NavBar from "./components/NavBar";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import { lazy } from "react/cjs/react.production.min";

const Acceuil = lazy(() => import("./pages/Acceuil"));
const Qualifications = lazy(() => import("./pages/Qualifications"));
const Projets = lazy(() => import("./pages/Projets"));
const Contact = lazy(() => import("./pages/Contact"));

export default function App() {
  return (
    <>
      <StrictMode>
        <BrowserRouter>
          <HelmetProvider>
            <NavBar />
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Acceuil />} />
                <Route path="projet1" element={<Qualifications />} />
                <Route path="projet2" element={<Projets />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
            <NavBar />
          </HelmetProvider>
        </BrowserRouter>
      </StrictMode>
    </>
  );
}
