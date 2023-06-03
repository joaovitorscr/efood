import { Restaurant } from '../../App'

import * as S from './styles'

import star from '../../assets/images/food/card/star.png'

const RestaurantCard = ({
  id,
  capa,
  tipo,
  titulo,
  avaliacao,
  descricao,
  destacado
}: Restaurant) => (
  <S.Card>
    <S.CardImg style={{ backgroundImage: `url(${capa})` }}>
      <S.CardInfoContainer>
        {destacado && <S.CardInfo>Destaque da semana</S.CardInfo>}
        <S.CardInfo>{tipo}</S.CardInfo>
      </S.CardInfoContainer>
    </S.CardImg>
    <S.Description>
      <S.CardTitle>
        {titulo}
        <S.CardRating>
          <span>{avaliacao}</span>
          <img src={star} alt="" />
        </S.CardRating>
      </S.CardTitle>
      <S.About>{descricao}</S.About>
      <S.CardButton to={`/restaurantes/${id}`}>Saiba mais</S.CardButton>
    </S.Description>
  </S.Card>
)

export default RestaurantCard
