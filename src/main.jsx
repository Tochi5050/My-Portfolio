import React from "react"
import ReactDOM from "react-dom/client"
import "../src/index.css"
import LandingPage from "./components/Landing-Page"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AboutPage from "./components/About-Page"
import Resume from "./components/Resume-Page"
import Portfolio from "./components/Portfolio"

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "about",
    element: <AboutPage />,
  },
  {
    path: "resume",
    element: <Resume />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
