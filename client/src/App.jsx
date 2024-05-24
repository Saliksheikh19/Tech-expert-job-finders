import React, { useState } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// Import Pages
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import CoverLetter from "./pages/CoverLetter";
import WebsiteTemplate from "./pages/WebsiteTemplate";
import OrderAResumeService from "./pages/OrderAResumeService";
import JobAlert from "./pages/JobAlert";
import DashNavbar from "./components/Dashboard/DashNavbar";
import DashHome from "./pages/Dashboard/DashHome";
import DashSidebar from "./components/Dashboard/DashSidebar";
import DashTools from "./pages/Dashboard/DashTools";
import WebPageToPDF from "./pages/Dashboard/WebPageToPDF";
import WebPageToImage from "./pages/Dashboard/WebPageToImage";
import WebsiteScreenshots from "./pages/Dashboard/WebsiteScreenshots";

import DashTemplate from "./pages/Dashboard/DashTemplate";
import DashResume from "./pages/Dashboard/DashResume";
import DashCoverLetter from "./pages/Dashboard/DashCoverLetter";

import BlogsPage from "./pages/Dashboard/BlogsPage";
import JobsAlert from "./pages/Dashboard/JobsAlert";

import ResumeForm from "./components/Dashboard/ResumeForm";


const AuthenticatedRoutes = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

// Define routes for unauthenticated users without layout
const UnauthenticatedRoutes = () => {
  return <Outlet />;
};

const DashboardRoutes = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      <div className="mainDashboardCont relative">
        <DashNavbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="subDashCont min-h-dvh flex">
          <DashSidebar
            isSidebarOpen={isSidebarOpen}
            setIsSidebarOpen={setIsSidebarOpen}
          />
          <div
            className={` ${
              isSidebarOpen ? "w-[82%] ps-[18%]" : "w-[90%] ps-[10%]"
            } pt-[7rem] flex-1 bg-coral-light transition-all duration-500`}
          >
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <AuthenticatedRoutes />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/jobalert",
        element: <JobAlert />,
      },
      {
        path: "/orderaresumeservice",
        element: <OrderAResumeService />,
      },
      {
        path: "/resume",
        element: <Resume />,
      },
      {
        path: "/coverletter",
        element: <CoverLetter />,
      },
      {
        path: "/websiteTemplate",
        element: <WebsiteTemplate />,
      },
    ],
  },
  {
    path: "/",
    element: <UnauthenticatedRoutes />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/",
    element: <DashboardRoutes />,
    children: [
      {
        path: "/app",
        element: <DashHome />,
      },
      {
        path: "/app/tools",
        element: <DashTools />,
      },
      {
        path: "/app/tools/web-to-pdf",
        element: <WebPageToPDF />,
      },
      {
        path: "/app/tools/web-to-image",
        element: <WebPageToImage />,
      },
      {
        path: "/app/tools/website-screenshots",
        element: <WebsiteScreenshots />,
      },
      
{
        path: "/app/myresume",
        element: <DashResume />,
      },
      {
        path: "/app/template",
        element: <DashTemplate />,
      },
      {
        path: "/app/coverletter",
        element: <DashCoverLetter />,
      },
{
        path: "/app/blogspage",
        element: <BlogsPage/>,
      },
      { 
        path: "/app/jobsalert",
        element: <JobsAlert/>,
},{
        path: "/app/myresume/details",
        element: <ResumeForm />,

      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
