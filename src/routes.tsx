import { Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Restaurantes from './pages/Restaurantes'

const MyRoutes = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurantes" element={<Restaurantes />} />
  </Routes>
)

export default MyRoutes
