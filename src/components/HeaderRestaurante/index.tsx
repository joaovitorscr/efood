import { Header, HeaderContainer, HeaderText } from './styles'

import headerBg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'
import { open } from '../../store/reducers/cart'

import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const HeaderRestaurante = () => {
  const { items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  return (
    <Header style={{ backgroundImage: `url(${headerBg})` }}>
      <HeaderContainer className="container">
        <HeaderText>Restaurantes</HeaderText>
        <a href="/">
          <img src={logo} alt="eFood" />
        </a>
        <HeaderText>
          <button onClick={() => dispatch(open())}>
            {items.length} produto(s) no carrinho
          </button>{' '}
        </HeaderText>
      </HeaderContainer>
    </Header>
  )
}

export default HeaderRestaurante
