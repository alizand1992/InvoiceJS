import { Routes, Route } from 'react-router-dom';

import InvoicePage from './components/InvoicePage';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import SavedInvoices from './components/SavedInvoices';

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="invoice" element={<InvoicePage />} />
        <Route path="saved_invoices" element={<SavedInvoices />} />
      </Routes>
    </>
  );
}

export default App;
