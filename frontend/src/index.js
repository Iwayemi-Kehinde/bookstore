import ReactDOM from "react-dom/client"
import { RouterProvider } from "react-router-dom"
import {router} from "./router/router.jsx"
import App from "./App.js"
import "./index.css"

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <App /> 
  </RouterProvider>
)