import styled from 'styled-components'
import { Background, colors } from '../../styles'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderText = styled.p`
  color: ${colors.salmon};
  font-size: 18px;
  font-weight: 900;
`

export const Header = styled(Background)`
  height: 186px;
`
