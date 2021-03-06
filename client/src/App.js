import Home from "./pages/Home";
import Product from "./pages/Product";
import Result from "./pages/Result";
import Navbar from "./components/Navbar"
import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
import { CartProvider } from 'use-shopping-cart';
import { Toaster } from "react-hot-toast"

const queryClient = new QueryClient();
 
const stripePromise = loadStripe('pk_test_51IRLxmA2OWnwsOdP2XWwBnOsygwgg4RVoee7yBdU2btl8UOfu7Ur4eQYr0tclbOZ0XG8Q3sBtDZ2gBvjyRWCS3C400xJuFLTt6')

function App() {
  return(
    <QueryClientProvider client={queryClient}>
      <CartProvider mode="checkout-session" stripe={stripePromise} currency="USD">
      <BrowserRouter>
        <Toaster position="bottom-center" />
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/result' component={Result} />
          <Route path='/:productId' component={Product} />
        </Switch>
      </BrowserRouter>
      </CartProvider>
    </QueryClientProvider>
  )
}

export default App;
