import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import publicRoutes from "./variables";

export default function Router () {
  return (
    <BrowserRouter>
      <Routes>
          {
              publicRoutes.map(route => {
                  return(
                      <Route key={route.id} path={route.route} element={route.component} exact/>
                  )
              })
          }
      </Routes>
    </BrowserRouter>
  );
};
