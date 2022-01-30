import { Routes, Route } from 'react-router-dom';
import InvoicePage from './components/InvoicePage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<InvoicePage />} />
      <Route path="invoice" element={<InvoicePage />} />
    </Routes>
  );
}

export default App;
