import styled from "styled-components";

export const WalletWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
`

export const WalletContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const WalletTextContainer = styled.div`
  width: 100%;
  max-width: 315px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  color: ${({theme}) => theme.colors.lightBlack};

  h1 {
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
  }

  p {
    color: ${({theme}) => theme.colors.grey};
    font-weight: 600;
    font-size: 16px;
    line-height: 180%;
    margin: 20px 0;
  }

  a {
  @extends p;
    color: ${({theme}) => theme.colors.black};
    font-weight: 500;
  }
`

export const UserWalletsList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const UserWallet = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: none;
  border-left: 4px solid;
  border-image: linear-gradient(180deg, #7517F8 0%, #E323FF 100%);
  border-image-slice: 1;
  margin: 20px 0;
  color: ${({theme}) => theme.colors.purple};
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  transition: all 0.3s;
  opacity: 0.5;
  cursor: pointer;
  p {
    opacity: 0;
  }
  &:hover {
    opacity: 1;
  }
  &:hover p {
    opacity: 1;
  }
`

export const UserWalletContainer = styled.div`
  width: 100%;
  max-width: fit-content;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.lightBlack};
  p {
    opacity: 1;
  }
`

export const UserWalletImageContainer = styled.div`
  width: 100%;
  max-width: 40px;
  margin: 0 20px;

  img {
    width: 100%;
  }
`

