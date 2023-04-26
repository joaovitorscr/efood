import { CardList } from './styles'

import sushi from '../../assets/images/food/sushi.png'
import spaghetti from '../../assets/images/food/spaghetti.png'
import RestaurantCard from '../../components/RestaurantCard'
import Header from '../../components/Header'

const Home = () => (
  <>
    <Header />
    <div className="container">
      <CardList>
        <li>
          <RestaurantCard
            title="Hioki Sushi"
            description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
            img={sushi}
            rate="4.5"
            path="/restaurantes"
            cardInfo={['Destaque da semana', 'Japonesa']}
          />
        </li>
        <li>
          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            img={spaghetti}
            rate="4.5"
            path="/restaurantes"
            cardInfo={['Italiana']}
          />
        </li>
        <li>
          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            img={spaghetti}
            rate="4.5"
            path="/restaurantes"
            cardInfo={['Italiana']}
          />
        </li>
        <li>
          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            img={spaghetti}
            rate="4.5"
            path="/restaurantes"
            cardInfo={['Italiana']}
          />
        </li>
        <li>
          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            img={spaghetti}
            rate="4.5"
            path="/restaurantes"
            cardInfo={['Italiana']}
          />
        </li>
        <li>
          <RestaurantCard
            title="La Dolce Vita Trattoria"
            description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
            img={spaghetti}
            rate="4.5"
            path="/restaurantes"
            cardInfo={['Italiana']}
          />
        </li>
      </CardList>
    </div>
  </>
)

export default Home
