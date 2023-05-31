import styled from 'styled-components'
import { colors } from '../../styles'

export const Card = styled.div`
  background-color: ${colors.salmon};
  width: 320px;
  margin-bottom: 32px;
  color: ${colors.darkBg};
  font-size: 14px;
  margin-top: 56px;
`

export const CardContent = styled.div`
  margin: 8px;

  img {
    width: 304px;
    height: 167px;
  }
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;
`

export const CardDescription = styled.h2`
  font-weight: 400;
  line-height: 22px;
  padding-top: 8px;
  padding-bottom: 8px;
  font-size: 16px;
`

export const CardButton = styled.button`
  background-color: ${colors.darkBg};
  color: ${colors.salmon};
  padding: 4px;
  font-weight: 700;
  font-size: 14px;
  width: 100%;
  border: none;
  cursor: pointer;
`

export const OpenCardInfo = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;

    button {
      border: none;
      background-color: transparent;
    }

    img {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.73);
    cursor: pointer;
  }
`

export const ModalContent = styled.div`
  background-color: ${colors.salmon};
  display: flex;
  width: 1024px;
  padding: 32px;
  color: white;
  position: relative;
  z-index: 1;

  img {
    width: 280px;
    height: 280px;
    margin-right: 24px;
    object-fit: cover;
  }

  ${CardTitle} {
    font-size: 18px;
    padding-top: 0;
  }

  ${CardButton} {
    width: 218px;
    margin-top: 16px;
  }

  ${CardDescription} {
    p {
      margin-top: 16px;
    }
  }
`
