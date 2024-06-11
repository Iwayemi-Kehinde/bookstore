import { createBrowserRouter } from "react-router-dom"
import App from "../App.js"
import Home from "../home/Home"
import Shop from "../shop/Shop"
import About from "../components/About"
import Blog from "../components/Blog"

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
  }
])