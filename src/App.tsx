import Cart from "./components/Cart"
import Products from "./components/Products"
import { CartProvider } from "./context/cart"

function App() {
  

  return (
    <CartProvider>
      <main className="bg-slate-700 min-h-screen flex flex-col justify-center items-center p-12">
        <Cart/>
        <div>
          <Products/>
        </div>
      </main>
    </CartProvider>
  )
}

export default App
