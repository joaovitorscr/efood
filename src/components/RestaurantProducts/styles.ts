import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

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
`

export const CardTitle = styled.h3`
  font-size: 16px;
  font-weight: 900;
  padding-top: 8px;
`

export const CardDescription = styled.p`
  font-weight: 400;
  line-height: 22px;
  padding-top: 8px;
  padding-bottom: 8px;
`

export const CardLink = styled(Link)`
  background-color: ${colors.darkBg};
  color: ${colors.salmon};
  display: block;
  text-align: center;
  padding: 4px;
  text-decoration: none;
  font-weight: 700;
`
