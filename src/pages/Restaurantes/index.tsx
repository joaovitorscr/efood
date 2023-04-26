import Banner from '../../components/Banner'
import HeaderRestaurante from '../../components/HeaderRestaurante'
import RestaurantProducts from '../../components/RestaurantProducts'
import { CardContainer } from './styles'

import pizza from '../../assets/images/food/pizza.png'

const Restaurantes = () => (
  <div>
    <HeaderRestaurante />
    <Banner />
    <CardContainer className="container">
      <RestaurantProducts
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        img={pizza}
        path="/"
        title="Pizza Marguerita"
      />
      <RestaurantProducts
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        img={pizza}
        path="/"
        title="Pizza Marguerita"
      />
      <RestaurantProducts
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        img={pizza}
        path="/"
        title="Pizza Marguerita"
      />
      <RestaurantProducts
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        img={pizza}
        path="/"
        title="Pizza Marguerita"
      />
      <RestaurantProducts
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        img={pizza}
        path="/"
        title="Pizza Marguerita"
      />
      <RestaurantProducts
        description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
        img={pizza}
        path="/"
        title="Pizza Marguerita"
      />
    </CardContainer>
  </div>
)

export default Restaurantes
