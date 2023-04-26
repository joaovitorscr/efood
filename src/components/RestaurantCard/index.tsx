import * as S from './styles'

import star from '../../assets/images/food/card/star.png'

type Props = {
  img: string
  title: string
  description: string
  rate: string
  path: string
  cardInfo: string[]
}

const RestaurantCard = ({
  img,
  title,
  description,
  rate,
  path,
  cardInfo
}: Props) => (
  <S.Card>
    <S.CardImg style={{ backgroundImage: `url(${img})` }}>
      <S.CardInfoContainer>
        {cardInfo.map((info) => (
          <S.CardInfo key={info}>{info}</S.CardInfo>
        ))}
      </S.CardInfoContainer>
    </S.CardImg>
    <S.Description>
      <S.CardTitle>
        {title}
        <S.CardRating>
          <span>{rate}</span>
          <img src={star} alt="" />
        </S.CardRating>
      </S.CardTitle>
      <S.About>{description}</S.About>
      <S.CardButton to={path}>Saiba mais</S.CardButton>
    </S.Description>
  </S.Card>
)

export default RestaurantCard
