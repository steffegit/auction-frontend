import Home from './pages/Home'
import Post from './pages/Post'

import 'swiper/css'
import './styles.css'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopBar from './components/TopBar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </Router>
  )
}

export default App
