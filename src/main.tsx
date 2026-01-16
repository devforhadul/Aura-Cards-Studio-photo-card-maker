import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import FrameCreate from "./pages/FrameCreate.tsx";
import RootLayout from "./layout/RootLayout.tsx";
import App from "./App.tsx";
import { AllFramePage } from "./pages/AllFramePage.tsx";
import { UploadFramePage } from "./pages/UploadFramePage.tsx";
import NotFound from "./pages/NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <App />,
      },
      {
        path: "all-frame",
        element: <AllFramePage />,
      },
      {
        path: "/frame/:id",
        element: <FrameCreate />,
      },
      {
        path: "add-frame",
        element: <UploadFramePage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
