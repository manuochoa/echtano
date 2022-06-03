import React from 'react';
import {FooterContainer, FooterIMageContainer, FooterItem, FooterWrapper} from "./styled";
import footerData from "./variables";
import {useLocation} from "react-router-dom";

export default function Footer() {
    const location = useLocation();


    return (
        <FooterWrapper>
            <FooterContainer>
                {
                    footerData.map(item => {
                        return (
                            <FooterItem key={item.id} to={item.link} active={location.pathname === item.link}>
                                <FooterIMageContainer>
                                    {item.icon}
                                </FooterIMageContainer>
                                {item.name}
                            </FooterItem>
                        )
                    })
                }
            </FooterContainer>
        </FooterWrapper>
    );
};
