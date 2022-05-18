import styled from "styled-components";
import logo from "../../images/logo.svg"

const PageLogo = styled.div`
  width: 100%;
  max-width: 150px;
  img {
    width: 100%;
  }
`

const Logo = () => {
    return(
        <PageLogo>
            <img src={logo} alt=""/>
        </PageLogo>
    )
}

export default Logo;