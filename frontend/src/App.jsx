import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './style.scss'
import Books from './pages/Books'
import New from './pages/New'
import Update from './pages/Update'

function App() {
  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route path='/' element={<Books /> } />
          <Route path='/new' element={<New /> } />
          <Route path='/update' element={<Update /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
