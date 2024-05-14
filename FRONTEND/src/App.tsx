import AdminDashboard from './page/admin-dashboard.page';
import AdminLogin from './page/admin-login.page'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {

  return (
    <>
      <BrowserRouter basename='/admin'>
        <Routes>
          <Route path='/' element={<AdminLogin />} />
          <Route path='/dashboard' element={<AdminDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
