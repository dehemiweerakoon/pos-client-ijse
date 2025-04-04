import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login/Login'
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './pages/Register/Register';
import Home from './pages/Home/Home';
import ProtectedUtills from './utills/ProtectedUtills';
import Category from './pages/Category/Category'
import Item from './pages/Item/Item';
import Cart from './components/Cart/Cart';
import CategoryList from './components/CategoryList/CategoryList';
import './App.css'
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route element={<ProtectedUtills/>}>
      <Route path='/home' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='category/:id' element={<Category/>}/>
      <Route path='/search/items' element={<CategoryList/>}/>
      <Route path='/items' element={<Item/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
