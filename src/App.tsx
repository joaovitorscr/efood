import { BrowserRouter } from 'react-router-dom'

import MyRoutes from './routes'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'
import { Provider } from 'react-redux'
import { store } from './store'
import Cart from './components/Cart'

export type Restaurant = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio?: [
    {
      foto: string
      preco: number
      id: number
      nome: string
      descricao: string
      porcao: string
    }
  ]
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <MyRoutes />
        <Footer />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
