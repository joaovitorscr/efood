import {
  Card,
  CardContent,
  CardDescription,
  CardLink,
  CardTitle
} from './styles'

type Props = {
  img: string
  title: string
  description: string
  path: string
}

const RestaurantProducts = ({ description, img, path, title }: Props) => (
  <Card>
    <CardContent>
      <img src={img} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
      <CardLink to={path}>Adicionar ao carrinho</CardLink>
    </CardContent>
  </Card>
)

export default RestaurantProducts
