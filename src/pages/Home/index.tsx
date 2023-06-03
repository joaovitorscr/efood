import { getDescription } from '../../utils/index'
import { useGetRestaurantListQuery } from '../../services/api'

import { CardList } from './styles'

import RestaurantCard from '../../components/RestaurantCard'
import Header from '../../components/Header'

const Home = () => {
  const { data: restaurant } = useGetRestaurantListQuery()

  if (!restaurant) {
    return <h3>Carregando...</h3>
  }

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
