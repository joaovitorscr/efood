import { Header, HeaderContainer, HeaderText } from './styles'

import headerBg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const HeaderRestaurante = () => (
  <Header style={{ backgroundImage: `url(${headerBg})` }}>
    <HeaderContainer className="container">
      <HeaderText>Restaurantes</HeaderText>
      <a href="/">
        <img src={logo} alt="eFood" />
      </a>
      <HeaderText>0 produto(s) no carrinho</HeaderText>
    </HeaderContainer>
  </Header>
)

export default HeaderRestaurante
