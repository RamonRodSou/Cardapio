import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import HomePage from './Pages/HomePage'
import ProdutoPage from './Pages/ProdutoPage'
import NameLogo from './components/NameLogo/NameLogo'
import { ProductContext, ProductProvider } from './contextApi/ProductContext'
import { useContext, useEffect } from 'react'

function AppRoutes() {

  const { pageBack, setPageBack } = useContext(ProductContext)

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
          <Route path="/produto/:id" element={<ProdutoPage/>} />
        </Routes>
      </BrowserRouter>


    </ProductProvider>

  )
}

export default AppRoutes




{/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
        </Routes>
      </BrowserRouter> */}