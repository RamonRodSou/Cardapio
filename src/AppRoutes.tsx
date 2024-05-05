import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProdutoPage from './Pages/ProdutoPage'
import NameLogo from './components/NameLogo/NameLogo'
import { ProductProvider } from './contextApi/ProductContext'

function AppRoutes() {

  return (
    <ProductProvider>

       <BrowserRouter>
        < NameLogo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProdutoPage /> } />
        </Routes>
      </BrowserRouter> 

      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
        </Routes>
      </BrowserRouter> */}


    </ProductProvider>






  )
}

export default AppRoutes
