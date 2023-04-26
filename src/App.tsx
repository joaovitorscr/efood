import { BrowserRouter } from 'react-router-dom'

import MyRoutes from './routes'

import { GlobalStyle } from './styles'

import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MyRoutes />
      <Footer />
    </BrowserRouter>
  )
}

export default App
