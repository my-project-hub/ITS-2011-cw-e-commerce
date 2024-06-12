import AdminDashboard from './page/admin/admin-dashboard.page.tsx';
import AdminLogin from './page/admin/admin-login.page.tsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProduct from './page/admin/admin-products.page.tsx';
import AdminAddProduct from './page/admin/admin-add-product.page.tsx';
import CusotmerLogin from './page/cusotmer/customer-login.page.tsx';
import CustomerRegister from './page/cusotmer/customer-regiseter.page.tsx';
import CustomerHome from './page/cusotmer/customer-home.page.tsx';
import { WomensCasualWear } from './page/cusotmer/womens-wear/casual-wear.page.tsx';
import { WomensFormalWear } from './page/cusotmer/womens-wear/formal-wear.page.tsx';
import { WomensEthnicWear } from './page/cusotmer/womens-wear/ethnic-wear.page.tsx';
import { WomensLingerieInnerWear } from './page/cusotmer/womens-wear/lingerie-innerwear.page.tsx';
import { WomensNightWear } from './page/cusotmer/womens-wear/night-wear.page.tsx';
import { WomenSportsWear } from './page/cusotmer/womens-wear/sports-wear.page.tsx';
import WomenAccessories from './page/cusotmer/womens-wear/accessories.page.tsx';
import ProductView from './page/cusotmer/product-view.page.tsx';

function App() {

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
          <Route path='login' element={<CusotmerLogin />}/>
          <Route path='register' element={<CustomerRegister />}/>
          <Route path='/categories/women/casual-wear' element={<WomensCasualWear />}/>
          <Route path='/categories/women/formal-wear' element={<WomensFormalWear />}/>
          <Route path='/categories/women/ethnic-wear' element={<WomensEthnicWear />}/>
          <Route path='/categories/women/lingerie-wear' element={<WomensLingerieInnerWear />}/>
          <Route path='/categories/women/nightwear-wear' element={<WomensNightWear />}/>
          <Route path='/categories/women/sports-wear' element={<WomenSportsWear />}/>
          <Route path='/categories/women/accessories' element={<WomenAccessories />}/>
          <Route path='/categories/top/product/featured/:productId' element={<ProductView />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
