import Home from './pages/Home'
import Post from './pages/Post'
import NotFoundPage from './pages/NotFoundPage'
import Bid from './pages/Bid'
import Login from './pages/Login'

import TopBar from './components/TopBar'
import Footer from './components/Footer'

import 'swiper/css'
import 'swiper/css/navigation'

import './styles.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SiteContextProvider } from './components/Context/Context'

function App() {
  return (
    <SiteContextProvider>
      <Router>
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
          <Route path="/bids/:id" element={<Bid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </Router>
    </SiteContextProvider>
  )
}

export default App
