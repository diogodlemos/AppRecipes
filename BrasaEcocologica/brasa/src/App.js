import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Initial from './pages/Initial';
import Orders from './pages/Orders';
import Products from './pages/Products';
import Work from './pages/Work';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route exact path="/" component={ Initial } /> */}
        <Route exact path="/" component={ Home } />
        <Route exact path="/products" component={ Products } />
        <Route exact path="/orders" component={ Orders } />
        <Route exact path="/work" component={ Work } />
        <Route exact path="/contact" component={ Contact } />

      </Switch>
    </BrowserRouter>
  );
}

export default App;
