import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import FrameCreate from "./pages/FrameCreate.tsx";
import RootLayout from "./layout/RootLayout.tsx";
import App from "./App.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "/frame/:id",
        element: <FrameCreate />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
