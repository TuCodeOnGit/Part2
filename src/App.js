import { Route, Routes, BrowserRouter, Navigate } from 'react-router-dom'

// Pages
import Index from './Pages/Index'
import Detail from './Pages/Detail'
import Register from './Pages/Register'
// Components
import Header from './Components/Header'
import Menu from './Components/Menu'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Menu />
        <Routes>
          <Route exact path='/' element={<Index />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/register' element={<Register />} />
          <Route path='*' element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
