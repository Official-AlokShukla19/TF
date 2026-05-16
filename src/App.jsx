import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Education from './pages/Education';
import Community from './pages/Community';
import Innovation from './pages/Innovation';

import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/education-growth" element={<Education />} />
          <Route path="/community-roots" element={<Community />} />
          <Route path="/innovative-horizons" element={<Innovation />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
