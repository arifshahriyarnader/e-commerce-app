import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Contact, Home, Layout } from "./pages";
import { AdminLayout, AddProducts, Inventory, AdminProfile } from './pages/adminLayout';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        <Route path="/admin" element={<Layout><AdminLayout /></Layout>}>
            <Route path="inventory" element={<Inventory />} />
            <Route path="add-products" element={<AddProducts />} />
            <Route path="admin-profile" element={<AdminProfile />} />
        </Route>
      </Routes>
    </Router>

  );
}

export default App;
