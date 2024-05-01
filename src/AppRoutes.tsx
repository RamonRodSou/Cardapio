import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProdutoPage from './Pages/ProdutoPage'

function AppRoutes() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/produto" element={<ProdutoPage/>} />
      </Routes>
    </BrowserRouter>

  )
}

export default AppRoutes
