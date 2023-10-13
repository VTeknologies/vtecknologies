import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms/index";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/app" element={<App />}>
      {/* <Route path="app" element={<App />} />
      <Route path="terms" element={<Terms />} />
      <Route path="privacy" element={<Privacy />} /> */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);
