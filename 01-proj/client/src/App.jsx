import { Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/mainlayout'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import AddProduct from './pages/AddProduct'
import Wishlist from './pages/Wishlist'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element = {<MainLayout/>}>
          <Route index element = {<Home/>}/>
          <Route path='/add' element={<AddProduct/>}/>
          <Route path='/wishlist' element={<Wishlist/>}/>
        </Route>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App
