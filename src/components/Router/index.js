import React, {useEffect} from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import publicRoutes from "./variables";
import Layout from "../Layout";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    {
                        publicRoutes.map(route => {
                            return (
                                <Route key={route.id} path={route.route} element={route.component} exact/>
                            )
                        })
                    }
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
