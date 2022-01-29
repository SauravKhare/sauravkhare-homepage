import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Resume from "./components/Resume";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main container">
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/resume" component={Resume} exact />
        </Switch>
    </main>
    </BrowserRouter>
  );
}

export default App;
