import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";
import Footer from "./components/shared/Footer.jsx";
import About from "./components/About.jsx";
import OurServices from "./components/OurServices.jsx";
import Contact from "./components/Contact.jsx";
import SingleService from "./components/SingleService.jsx";

const RootLayout = ({ children }) => (
  <>
    <Navbar />
    {children}
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <RootLayout>
        <App />
      </RootLayout>
    ),
  },
  {
    path: "/about",
    element: (
      <RootLayout>
        <About />
      </RootLayout>
    ),
  },
  {
    path: "/services",
    element: (
      <RootLayout>
        <OurServices />
      </RootLayout>
    ),
  },
  {
    path: "/contact",
    element: (
      <RootLayout>
        <Contact />
      </RootLayout>
    ),
  },
  {
    path: "/supplies",
    element: (
      <RootLayout>
        <SingleService />
      </RootLayout>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
