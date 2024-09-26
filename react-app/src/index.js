import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, HashRouter, Routes } from "react-router-dom";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms/index";
import About from "./components/About/index";
import ErrorPage from "./error-page";
import Home from "./components/Home/index";
import Wrapper from "./components/Wrapper";
import Todo from "./components/AllProducts/Todo";
import PDC from "./components/AllProducts/PDC";
import Twilio from "./components/AllProducts/Twilio";
import AllProductsLayout from "./components/AllProducts/AllProductsLayout";
import ApprovalApp from "./components/AllProducts/ApprovalAutomation";
import Scheduler from "./components/AllProducts/Scheduler";
import StickyNotes from "./components/About/StickyNotes";

function AppRouter() {
  return (
    <HashRouter basename="/">
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
          <Route path="approval" element={<ApprovalApp />} />
          <Route path="scheduler" element={<Scheduler />} />
          <Route path="stickynotes" element={<StickyNotes />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
