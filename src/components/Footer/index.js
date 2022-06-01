import React from 'react';
import {FooterContainer, FooterIMageContainer, FooterItem, FooterWrapper} from "./styled";
import footerData from "./variables";

export default function Footer() {
    return (
        <FooterWrapper>
            <FooterContainer>
                {
                    footerData.map(item => {
                        return (
                            <FooterItem key={item.id} to={item.link}>
                                <FooterIMageContainer>
                                    <img src={item.icon} alt=""/>
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
