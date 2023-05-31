import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Banner from '../../components/Banner'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import RestaurantProducts from '../../components/RestaurantProducts'
import { CardContainer } from './styles'

import { Restaurant } from '../../App'

const Restaurants = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<Restaurant>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((response) => response.json())
      .then((response) => setRestaurant(response))
  })

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
          <RestaurantProducts
            price={item.preco}
            portion={item.porcao}
            key={item.id}
            description={item.descricao}
            img={item.foto}
            title={item.nome}
          />
        ))}
      </CardContainer>
    </div>
  )
}

export default Restaurants
