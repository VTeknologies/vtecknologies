import React, { Suspense, lazy, useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Route, HashRouter, Routes, useLocation } from "react-router-dom";
import Wrapper from "./components/Wrapper";

const Home = lazy(() => import("./components/Home/index"));
const Privacy = lazy(() => import("./components/Privacy"));
const Terms = lazy(() => import("./components/Terms/index"));
const About = lazy(() => import("./components/About/index"));
const ErrorPage = lazy(() => import("./error-page"));
const Todo = lazy(() => import("./components/AllProducts/Todo"));
const PDC = lazy(() => import("./components/AllProducts/PDC"));
const Twilio = lazy(() => import("./components/AllProducts/Twilio"));
const Simplepay = lazy(() => import("./components/AllProducts/Simplepay"));
const Intercom = lazy(() => import("./components/AllProducts/Intercom"));
const Payspace = lazy(() => import("./components/AllProducts/Payspace"));
const AllProductsLayout = lazy(() => import("./components/AllProducts/AllProductsLayout"));
const ApprovalApp = lazy(() => import("./components/AllProducts/ApprovalAutomation"));
const Scheduler = lazy(() => import("./components/AllProducts/Scheduler"));
const StickyNotes = lazy(() => import("./components/About/StickyNotes"));
const Xero = lazy(() => import("./components/AllProducts/Xero"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AppRouter() {
  return (
    <HashRouter basename="/">
      <ScrollToTop />
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-[#D687EB] border-t-transparent rounded-full animate-spin"></div></div>}>
        <Routes>
          <Route path="/" element={<Wrapper />}>
            <Route index element={<Home />} />
            <Route path="app" element={<Home />} />
            <Route path="app/terms" element={<Terms />} />
            <Route path="app/about" element={<About />} />
            <Route path="app/privacy" element={<Privacy />} />
            <Route path="app/todo" element={<Todo />} />
            <Route path="all" element={<AllProductsLayout />} />
            <Route path="pdc" element={<PDC />} />
            <Route path="twilio" element={<Twilio />} />
            <Route path="simplepay" element={<Simplepay />} />
            <Route path="intercom" element={<Intercom />} />
            <Route path="payspace" element={<Payspace />} />
            <Route path="approval" element={<ApprovalApp />} />
            <Route path="scheduler" element={<Scheduler />} />
            <Route path="stickynotes" element={<StickyNotes />} />
            <Route path="xero" element={<Xero />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
