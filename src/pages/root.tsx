import { RouterProvider } from "react-router-dom"
import { router } from "../main"
import { GlobalStyle } from "../styles/globals"

export const Root: React.FC = () => {
  return <>
    <GlobalStyle/>
    <RouterProvider router={router}/>
  </>
  
}