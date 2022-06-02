import styled from "styled-components";

export const WalletWrapper = styled.div`
  width: 100%;
  max-width: 480px;
  border-radius: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({theme}) => theme.colors.white};
  @media (max-width: 425px) {
    margin: 0 15px;
  }
`

export const WalletContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  position: relative;
`

export const CrossIconContainer = styled.div`
  width: 100%;
  max-width: 20px;
  position: absolute;
  top: 3%;
  right: 3%;
  cursor: pointer;
  img {
    width: 100%;
  }
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
    font-weight: 500;
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
  border-left: 4px solid  rgba(171, 105, 204, 0.53);;
  margin: 20px 0;
  color: ${({theme}) => theme.colors.purple};
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  transition: all 0.3s;
  cursor: pointer;
  p {
    opacity: 0;
  }
  &:hover {
    opacity: 1;
    border-image: linear-gradient(180deg, #7517F8 0%, #E323FF 100%);
    border-image-slice: 1;
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

