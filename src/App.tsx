import Home from './pages/Home'
import Login from './pages/Login'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

export function App() {

  return (
    <>
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Header/>
      <div className='flex-1 p-6'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />}/>
      </Routes>
      </div>
      <Footer/>
    </div>
    </>
  )
}

export default App
