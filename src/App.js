// PAGES
import Home from './pages/Home'
import Post from './pages/Post'
import NotFoundPage from './pages/NotFoundPage'
import Bid from './pages/Bid'
import Login from './pages/Login'
import Search from './pages/Search'
import BidForm from './pages/BidForm'

// COMPONENTS
import TopBar from './components/TopBar'
import Footer from './components/Footer'

// STYLES
import 'swiper/css'
import 'swiper/css/navigation'

import './styles.css'

// OTHER
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SiteContextProvider } from './components/Context/Context'
import { UserContextProvider } from './components/Context/UserContext'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <SiteContextProvider>
      <UserContextProvider>
        <Router>
          <TopBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post" element={<Post />} />
            {/* this is just for preview bid */}
            <Route path="/bids/:id" element={<Bid />} />
            {/* and this is for form bid */}
            <Route path="/bid/:id" element={<BidForm />} />
            <Route path="/search" element={<Search />} />
            <Route
              path="/login"
              element={
                <ProtectedRoute user={false}>
                  <Login />
                </ProtectedRoute>
              }
            />
            <Route path="/*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </Router>
      </UserContextProvider>
    </SiteContextProvider>
  )
}

export default App
