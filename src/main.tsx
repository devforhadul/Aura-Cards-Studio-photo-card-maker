import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import FrameCreate from "./pages/FrameCreate.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
   
  },
  {
    path: "/frame/:id",
    Component: FrameCreate
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
