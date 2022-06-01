import React from 'react';
import {Content, LayoutWrapper} from "./styled";
import NavBar from "../NavBar";
import Footer from "../Footer";

export default function Layout({children}) {
    return (
        <LayoutWrapper>
            <NavBar/>
            <Content>
                {children}
            </Content>
            <Footer/>
        </LayoutWrapper>
    );
};
