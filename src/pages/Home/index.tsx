import { useEffect, useState } from 'react'

import { getDescription } from '../../utils/index'
import { Restaurant } from '../../App'

import { CardList } from './styles'

import RestaurantCard from '../../components/RestaurantCard'
import Header from '../../components/Header'

const Home = () => {
  const [restaurant, setRestaurant] = useState<Restaurant[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((response) => response.json())
      .then((response) => setRestaurant(response))
  })

  return (
    <>
      <Header />
      <div className="container">
        <CardList>
          {restaurant.map((item) => (
            <li key={item.id}>
              <RestaurantCard
                id={item.id}
                titulo={item.titulo}
                capa={item.capa}
                tipo={item.tipo}
                avaliacao={item.avaliacao}
                descricao={getDescription(item.descricao, 250)}
                destacado={item.destacado}
              />
            </li>
          ))}
        </CardList>
      </div>
    </>
  )
}

export default Home
