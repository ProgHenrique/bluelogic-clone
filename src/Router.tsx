import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import AboutUs from './pages/about-us'
import Cases from './pages/cases'
import Contact from './pages/contact'
import DefaultLayout from './layout/default-layout'
import { useEffect } from 'react'

export default function Router() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location])

  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/cases" element={<Cases />} />
        <Route path="/contato" element={<Contact />} />
      </Route>
    </Routes>
  )
}
