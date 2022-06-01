import styled from "styled-components"
import {Link} from "react-router-dom";

export const FooterWrapper = styled.footer`
  display: none;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    background-color: ${({theme}) => theme.colors.secondaryBlack};
    padding: 20px 0;
    justify-content: center;
    align-items: center;
}
`

export const FooterContainer = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterItem = styled(Link)`
  width: 100%;
  max-width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
`

export const FooterIMageContainer = styled.div`
  width: 100%;
  max-width: 20px;
  img {
    width: 100%;
  }
`