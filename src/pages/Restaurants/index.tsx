import { useParams } from 'react-router-dom'

import { useGetRestaurantQuery } from '../../services/api'

import { CardContainer } from './styles'

import Banner from '../../components/Banner'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import RestaurantProducts from '../../components/RestaurantProducts'

const Restaurants = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetRestaurantQuery(id!)

  if (!restaurant) {
    return <>Carregando...</>
  }

  return (
    <div>
      <HeaderRestaurante />
      <Banner
        title={restaurant.titulo}
        cover={restaurant.capa}
        type={restaurant.tipo}
      />
      <CardContainer className="container">
        {restaurant.cardapio?.map((item) => (
          <RestaurantProducts key={item.id} product={item} />
        ))}
      </CardContainer>
    </div>
  )
}

export default Restaurants
