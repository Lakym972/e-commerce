import { createContext, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import HeaderLayout from "./layout/HeaderLayout.jsx";
import HomePage from "./pages/home/index.jsx";
import ProductsPage from "./pages/products/index.jsx";
import ProductPage from "./pages/product/index.jsx";
import CartPage from "./pages/cart/index.jsx";
import LoginPage from "./pages/login/index.jsx";
import AccountPage from "./pages/account/index.jsx";
import RegisterPage from "./pages/register/index.jsx";
import CartContextProvider from './context/CartContext/CartContextProvider.jsx';

const router = createBrowserRouter([
  {
    element: <HeaderLayout/>,
    children: [
    {path: '/', element: <HomePage/>},
    {path: '/nos-produits', element: <ProductsPage/>},
    {path: '/produit/:id', element: <ProductPage/>},
    {path: '/panier', element: <CartPage/>},
    {path: '/connexion', element: <LoginPage/>},
    {path:'/mon-compte', element: <AccountPage/>},
    {path: "/inscription", element: <RegisterPage/>},
    ]
  }
])

export const UserContext = createContext(null)

function App() {
  const [user, setUser] = useState(null);
  return (
    <CartContextProvider>
    <UserContext.Provider value={{ user, setUser }}>
    <RouterProvider router={router}>
      <HeaderLayout />
    </RouterProvider>
  </UserContext.Provider>
  </CartContextProvider>

  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
