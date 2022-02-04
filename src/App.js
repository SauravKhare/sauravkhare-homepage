import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/Navbar';
import UsesPage from "./components/UsesPage";
import './styles.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main className="main container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="uses" element={<UsesPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p className="hero-text">Go Back! Nothing Here.</p>
            </main>
          }
        />
      </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
