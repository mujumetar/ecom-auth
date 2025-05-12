import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import Login from './components/Login'
import Products from './components/Products'
import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { showCart } from './features/cartSlice'
import Alert from './components/Alert'
import { useEffect, useState } from 'react'
import { showAlert } from './features/alertSlice'
import { postDataApi } from './features/cartAction'




function App() {
  let auth = useSelector(state => state.auth.auth)
  let cart = useSelector(state => state.cart.cartList)
  let cartData = useSelector(state => state.cart)
  let alert = useSelector(state => state.alert)
  let showCart = useSelector(state => state.cart.showCart)
  const [first, setFirst] = useState(true)

  console.log(cart)
  console.log(auth)

  const dispatch = useDispatch()


  useEffect(() => {
    // if (first) {
    //   setFirst(false)
    //   return;
    // }

    // dispatch(postDataApi(cartData, auth))

    const fetchData = async () => {

      const res = await fetch(`https://e-com-e88fa-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify( cartData )
        })
      const data = await res.json();
      return data;
    }
    fetchData()
  }, [cartData])


console.log(cartData)

return (

  <>
    {alert.status && <Alert alert={alert} />}
    {auth && <Navbar />}
    {!auth && <Login />}
    {auth && <Products />}
    {showCart && <Cart />}
  </>
)
}

export default App