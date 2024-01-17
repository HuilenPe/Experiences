import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'
import NewPage from '@/pages/NewPage'
import LoginPage from '@/pages/LoginPage'
import Layout from '@/components/Layout'

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/login' element={<LoginPage />} />
      <Route path='/' element={<Layout><HomePage /></Layout>} />
      <Route path='/news' element={<Layout><NewPage /></Layout>} />
    </Routes>
  </BrowserRouter>
)

export default routes