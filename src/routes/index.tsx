import { createBrowserRouter } from "react-router-dom"
import DashboardLayout from "../layouts/DashboardLayout"
import Dashboard from "../pages/Dashboard"
import Login from "../pages/Login"
import Opportunity from "../pages/Opportunity"
import Plan from "../pages/Plan"
import Research from "../pages/Research"
import Auth from "../pages/Auth"
import Bidding from "../pages/Bidding"
import Quote from "../pages/Quote"
import Install from "../pages/Install"
import Verify from "../pages/Verify"
import ProjectDetail from "../pages/ProjectDetail"
import BasicData from "../pages/BasicData"
import Permissions from "../pages/Permissions"
import SystemSettings from "../pages/SystemSettings"

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "projects/opportunity",
        element: <Opportunity />,
      },
      {
        path: "projects/plan",
        element: <Plan />,
      },
      {
        path: "projects/research",
        element: <Research />,
      },
      {
        path: "projects/auth",
        element: <Auth />,
      },
      {
        path: "projects/bidding",
        element: <Bidding />,
      },
      {
        path: "projects/quote",
        element: <Quote />,
      },
      {
        path: "projects/install",
        element: <Install />,
      },
      {
        path: "projects/verify",
        element: <Verify />,
      },
      {
        path: "projects/:id",
        element: <ProjectDetail />,
      },
      {
        path: "settings/data",
        element: <BasicData />,
      },
      {
        path: "settings/permissions",
        element: <Permissions />,
      },
      {
        path: "settings/system",
        element: <SystemSettings />,
      },
    ],
  },
])
