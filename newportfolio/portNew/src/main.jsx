import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Thankyou from "./components/Thankyou.jsx"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} /> {/* Index route */}
      <Route path="/thankyou" element={<Thankyou />} /> {/* Thank you route */}
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
