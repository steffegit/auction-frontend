import Home from './pages/Home'
import Post from './pages/Post'

import 'swiper/css'
import './styles.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { SiteContextProvider } from './components/Context/Context'

function App() {
  return (
    <SiteContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/post" element={<Post />} />
        </Routes>
      </Router>
    </SiteContextProvider>
  )
}

export default App
