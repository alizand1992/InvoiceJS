import { Routes, Route } from 'react-router-dom';

import InvoicePage from './components/InvoicePage';
import HomePage from './components/HomePage';
import Menu from './components/Menu';
import SavedInvoices from './components/SavedInvoices';
import { useState } from 'react';

function App() {
  const [ id, setId ] = useState(null);

  const loadInvoice = (id) => {
    setId(id);
  }

  const unloadInvoice = () => {
    setId(null);
  }

  return (
    <>
      <Menu unloadInvoice={unloadInvoice} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="invoice" element={<InvoicePage id={id} />} />
        <Route path="saved_invoices" element={<SavedInvoices loadInvoice={loadInvoice} id={id} />} />
      </Routes>
    </>
  );
}

export default App;
