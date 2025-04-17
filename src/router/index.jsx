import { createBrowserRouter } from "react-router-dom";

import Home from "../views/Home";
import Movie from "../views/Movie";
import MovieDetail from "../views/MovieDetail";
import FIlter from "../views/FIlter";
import Layout from "../components/Layout";
import MovieForm from "../views/MovieForm";

export default createBrowserRouter(
    [
        {
            element: <Layout/>,
            children: [
                {
                    path: "/movie",
                    element: <Movie />,
                },
                {
                    path: "/movie/:id",
                    element: <MovieDetail />,
                },
                {
                    path: "/production-house/:id",
                    element: <FIlter />,
                },
                {
                    path: "/add-movie",
                    element: <MovieForm/>
                }
            ]
        },
        {
            path: "/",
            element: <Home />,
        },
        
    ]
)