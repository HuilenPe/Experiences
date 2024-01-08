import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '@/pages/HomePage'

const routes = (
  <BrowserRouter>
    <Routes>
      <Route path='/home' element={<HomePage />} />
    </Routes>
  </BrowserRouter>
)

export default routes