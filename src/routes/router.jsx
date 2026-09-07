import { createBrowserRouter } from "react-router";
import RootLayouts from "../Layouts/RootLayouts";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import AboutUs from "../pages/AboutUs/AboutUs";

export const router = createBrowserRouter([
    {
        path:"/",
        Component:RootLayouts,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:'coverage',
                Component:Coverage,
                loader:()=> fetch('/warehouses.json').then(res=>res.json())
            },
            {
                path:'about',
                Component:AboutUs
            }
        ]
    }
])