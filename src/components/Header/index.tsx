import { Background } from '../../styles'
import { Logo, SubTitulo } from './styles'

import headerBg from '../../assets/images/fundo.svg'
import logo from '../../assets/images/logo.svg'

const Header = () => (
  <Background style={{ backgroundImage: `url(${headerBg})` }}>
    <a href="/">
      <Logo src={logo} alt="eFood" />
    </a>
    <SubTitulo>
      Viva experiências gastronômicas no conforto da sua casa
    </SubTitulo>
  </Background>
)

export default Header
