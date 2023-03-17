import './App.css';
import { LandingPage } from './components/landingPage/LandingPage';
import { Home } from './components/home/Home';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <Routes>
          {/* <Route exact path='/' element={<LandingPage />} /> */}
          <Route exact path='/' element={<Home />} />
        </Routes>
    </div>
  );
}

export default App;
