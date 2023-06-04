import { Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './routes/Home'
import Dashboard from './routes/Dashboard'
import Events from './routes/Events'
import YourBenefits from './routes/YourBenefits'
import './App.sass'

export default function App() {
  return (
    <div className='container'>
      <Navbar />

      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/dashboard' element={ <Dashboard /> } />
        <Route path='/events' element={ <Events /> } />
        <Route path='/your-benefits' element={ <YourBenefits /> } />
      </Routes>
    </div>
  )
}