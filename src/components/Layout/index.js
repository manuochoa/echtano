import React from 'react';
import {Content, LayoutWrapper} from "./styled";
import NavBar from "../NavBar";
import Footer from "../Footer";
import { Outlet } from 'react-router-dom';

export default function Layout() {
    return (
        <LayoutWrapper>
            <NavBar/>
            <Content>
                <Outlet />
            </Content>
            <Footer/>
        </LayoutWrapper>
    );
};
