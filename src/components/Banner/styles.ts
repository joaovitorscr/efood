import styled from 'styled-components'
import { colors } from '../../styles'

export const BannerBg = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 280px;
  width: 100%;
  font-size: 32px;
  color: ${colors.white};
`

export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const BannerTitle = styled.h2`
  font-weight: 900;
`

export const BannerSubTitle = styled.h3`
  font-weight: 100;
  padding-top: 24px;
  padding-bottom: 124px;
`
