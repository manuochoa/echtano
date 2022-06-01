import styled from "styled-components";
import logo from "../../images/logo.svg"

const PageLogo = styled.div`
  width: 100%;
  max-width: 150px;
  @media (max-width: 768px) {
    max-width: 115px;
    margin: 0 20px;
  }
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