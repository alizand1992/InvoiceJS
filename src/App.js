import { Routes, Route } from 'react-router-dom';

import InvoicePage from './components/InvoicePage';
import HomePage from './components/HomePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="invoice" element={<InvoicePage />} />
    </Routes>
  );
}

export default App;
