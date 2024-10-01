import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminRoutes from './Routes/AdminRoutes';
import ClientsRoutes from './Routes/ClientsRoutes';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/admin*" element={<AdminRoutes />} />
          <Route path="/client*" element={<ClientsRoutes />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
