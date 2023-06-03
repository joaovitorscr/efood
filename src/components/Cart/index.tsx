import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { RootReducer } from '../../store'
import { remove, close } from '../../store/reducers/cart'
import { getTotalPrice, parseToBrl } from '../../utils'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeItem = (id: number) => {
    dispatch(remove(id))
  }

  return (
    <S.CartContainer className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Sidebar>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} alt={item.nome} />
                  <div>
                    <h3>{item.nome}</h3>
                    <p>{parseToBrl(item.preco)}</p>
                  </div>
                  <button onClick={() => removeItem(item.id)} type="button" />
                </S.CartItem>
              ))}
            </ul>
            <S.TotalContainer>
              <p>Valor total</p>
              <span>{parseToBrl(getTotalPrice(items))}</span>
            </S.TotalContainer>
            <S.DeliverButton>Continuar com a entrega</S.DeliverButton>
          </>
        ) : (
          <p>
            O carrinho está vazio, adicione pelo menos um produto para continuar
            com a compra
          </p>
        )}
      </S.Sidebar>
    </S.CartContainer>
  )
}

export default Cart
