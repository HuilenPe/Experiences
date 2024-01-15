import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import routes from './router/Router'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>
)
