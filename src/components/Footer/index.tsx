import { Container, Description, Logo } from './styles'

import instagram from '../../assets/images/footer/instagram.png'
import facebook from '../../assets/images/footer/facebook.png'
import twitter from '../../assets/images/footer/twitter.png'

import logo from '../../assets/images/logo.svg'

const Footer = () => (
  <Container>
    <Logo src={logo} alt="eFood" />
    <nav>
      <ul>
        <li>
          <a href="#">
            <img src={instagram} alt="Instagram" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={facebook} alt="Facebook" />
          </a>
        </li>
        <li>
          <a href="#">
            <img src={twitter} alt="Twitter" />
          </a>
        </li>
      </ul>
    </nav>
    <Description>
      A efood é uma plataforma para divulgação de estabelecimentos, a
      responsabilidade pela entrega, qualidade dos produtos é toda do
      estabelecimento contratado.
    </Description>
  </Container>
)

export default Footer
