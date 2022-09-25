import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Books from './pages/Books'
import New from './pages/New'
import Update from './pages/Update'
import './App.css';

function App() {
  return (
    <div>
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
