import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage/HomePage'
import ProdutoPage from './Pages/ProdutoPage'
import NameLogo from './components/NameLogo/NameLogo'
import { ProductContext, ProductProvider } from './contextApi/ProductContext'
import { useContext, useEffect } from 'react'
import IngredientePage from './Pages/IngredientePage'
import Bag from './Pages/Bag'
import Pagamento from './Pages/Pagamento'
import Concluido from './Pages/Concluido'




function AppRoutes() {

  const { setPageBack } = useContext(ProductContext)




  useEffect(() => {
    if (window.location.pathname === "/") {
      setPageBack(false);
    } else {
      setPageBack(true);
    }
  }, [setPageBack]);

  return (
    <ProductProvider>
      <BrowserRouter>
        <NameLogo />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
          <Route path="/produto/:id/ingredientes" element={<IngredientePage />} />
          <Route path="/produto/bag" element={<Bag />} />
          <Route path="/produto/bag/pagamento" element={<Pagamento />} />
          <Route path="/produto/bag/pagamento/concluido" element={<Concluido />} />

          <Route path="/*" element={<HomePage />} />

        </Routes>
      </BrowserRouter>
    </ProductProvider>

  )
}

export default AppRoutes 