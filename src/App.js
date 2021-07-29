import './App.css';
import Header from './components/Header';
import Routes from './routes';
import CartProvider from './context/Cart'

function App() {
  return (
    <CartProvider>
      <Routes />
    </CartProvider>
  );
}

export default App;
