import { Product } from '../components/RestaurantProducts'

export const getDescription = (description: string, cut: number) => {
  if (description.length > cut) {
    return description.slice(0, cut - 3) + '...'
  }

  return description
}

export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

export const getTotalPrice = (items: Product[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.preco) {
      return (accumulator += currentItem.preco)
    }
    return 0
  }, 0)
}
