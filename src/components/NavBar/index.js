import React from 'react';
import {ConnectButton, NavBarContainer, NavBarImgContainer, NavBarItem, NavBarWrapper} from "./styled";
import Logo from "../Logo";
import navData from "./variables";
import arrow from "../../images/arrow-right.svg"

export default function NavBar() {
    return (
        <NavBarWrapper>
            <NavBarContainer>
                <Logo/>
                <ConnectButton to="/">
                    <p>Connect Wallet</p>
                    <NavBarImgContainer>
                        <img src={arrow} alt=""/>
                    </NavBarImgContainer>
                </ConnectButton>
                {
                    navData.map(item => {
                        return (
                            <NavBarItem key={item.id} to={item.link}>
                                <NavBarImgContainer>
                                    <img src={item.icon} alt=""/>
                                </NavBarImgContainer>
                                <p>{item.name}</p>
                            </NavBarItem>

                        )
                    })
                }
            </NavBarContainer>
        </NavBarWrapper>
    );
};
