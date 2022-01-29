import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main container">
        <Switch>
          <Route path="/" component={Home} exact />
        </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
