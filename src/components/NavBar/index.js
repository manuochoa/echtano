import React, {useState} from 'react';
import {
    ConnectButton,
    Footer,
    FooterImageContainer,
    NavBarContainer, NavBarFooter, NavBarFooterImageContainer,
    NavBarImgContainer,
    NavBarItem,
    NavBarWrapper
} from "./styled";
import Logo from "../Logo";
import navData from "./variables";
import arrow from "../../images/arrow-right.svg"
import goToIcon from "../../images/goToIcon.svg"
import Wallet from "../Wallet";
import {Link} from "react-router-dom";

export default function NavBar() {
    const [open, setOpen] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = (e) => {
        setOpen(!open)
    }

    return (
        <NavBarWrapper>
            {open && <Wallet handleClose={(e) => handleClose(e)}/>}
            <NavBarContainer>
                <Logo/>
                <ConnectButton to="" onClick={handleOpen}>
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
                <NavBarFooter>
                    <a href="https://echtano.vercel.app/">
                        Echtano.com
                        <NavBarFooterImageContainer>
                            <img src={goToIcon} alt=""/>
                        </NavBarFooterImageContainer>
                    </a>
                </NavBarFooter>
            </NavBarContainer>
        </NavBarWrapper>
    );
};
