import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import UsesPage from "./components/UsesPage";
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main container">
        <Switch>
          <Route path="/" component={Home} exact title="Saurav Khare"/>
          <Route path="/uses" component={UsesPage} title="Uses"/>
        </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
