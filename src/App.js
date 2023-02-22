import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Search from './components/Search'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/google' element={<Search/>}/>
      </Routes>
    </Router>

  )
}

export default App

