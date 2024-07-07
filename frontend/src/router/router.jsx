import { createBrowserRouter } from "react-router-dom"
import App from "../App.js"
import Home from "../home/Home"
import Shop from "../shop/Shop"
import About from "../components/About"
import Blog from "../components/Blog"
import DashboardLayout from "../dashboard/DashboardLayout"
import Dashboard from "../dashboard/Dashboard"
import UploadBook from "../dashboard/UploadBook"
import EditBook from "../dashboard/EditBook.jsx"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/shop",
        element: <Shop />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/blog",
        element: <Blog />
      },
      {
        path: "/book/:id",
        element: <SingleBook />,
        loader: ({params}) => fetch(`localhost:3000/book/${params.id}`)
      }
    ]
  },
  {
    path: "/admin/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/admin/dashboard",
        element: <Dashboard />
      }, 
      {
        path: "/admin/dashboard/upload",
        element: <UploadBook />
      },
      {
        path: "/admin/dashboard/manage",
        element: <ManageBooks />
      },
      {
        path: "/admin/dashboard/edit/:id",
        element: <EditBook />,
        loader: ({params}) => fetch(`http://localhost:5000/book/${params.id}`)
      }
    ]
  }
])