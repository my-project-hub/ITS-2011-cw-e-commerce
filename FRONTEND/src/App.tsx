// import 'dotenv/config'
import AdminDashboard from './page/admin/admin-dashboard.page.tsx';
import AdminLogin from './page/admin/admin-login.page.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProduct from './page/admin/admin-products.page.tsx';
import AdminAddProduct from './page/admin/admin-add-product.page.tsx';
import CusotmerLogin from './page/cusotmer/customer-login.page.tsx';
import CustomerRegister from './page/cusotmer/customer-regiseter.page.tsx';
import CustomerHome from './page/cusotmer/customer-home.page.tsx';
import ProductView from './page/cusotmer/product-view.page.tsx';
import ProductList from './page/cusotmer/product-list.page.tsx';

function App() {

  // dotenv.config()
  

  return (
    <>
      <BrowserRouter basename='/admin'>
        <Routes>
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/products' element={<AdminProduct />} />
          <Route path='/products/add' element={<AdminAddProduct />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter basename='/'>
        <Routes>
        <Route path='/' element={<CustomerHome />}/>
          <Route path='/login' element={<CusotmerLogin />}/>
          <Route path='/register' element={<CustomerRegister />}/>
          <Route path='/categories/top/product/featured/:productId' element={<ProductView />}/>
          <Route path='/category/:categoryName/:subCategory' element={<ProductList />}/>
          <Route path='/category/:categoryName/:subCategory/:productId' element={<ProductView />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
