import AdminDashboard from './page/admin-dashboard.page';
import AdminLogin from './page/admin-login.page'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminProduct from './page/admin-products.page';

function App() {

  return (
    <>
      <BrowserRouter basename='/admin'>
        <Routes>
          <Route path='/login' element={<AdminLogin />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
          <Route path='/products' element={<AdminProduct />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
