import styled from "styled-components";

const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,0.5382528011204482) 100%, rgba(9,9,121,1) 100%);
  background-attachment: fixed;
  overflow: hidden;
  z-index: 100000;
  filter: blur(3px);`

export default ModalContainer;