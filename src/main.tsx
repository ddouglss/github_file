import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import UserRepos from "./components/UserRepos.tsx";

import {createBrowserRouter, RouterProvider} from "react-router-dom";

import Home from './routes/Home'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,

            },
            { path: "/:login/repos", element: <UserRepos /> },
        ],
    },
]);
//determinar o caminho da paginas
createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <RouterProvider router ={router}/>
    </StrictMode>,
)
