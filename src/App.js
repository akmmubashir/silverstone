import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Home } from './Pages/Home';

function App() {
	return (
		<div className="bg-[#1a1a1a]">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
		</div>
	);
}

export default App;
