


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Resume from './Components/Resume';
import Homepage from './Components/Homepage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/resume" element={<Resume />} /> {/* Add this line */}
        {/* Other routes */}
      </Routes>
    </Router>
  );
}
export default App