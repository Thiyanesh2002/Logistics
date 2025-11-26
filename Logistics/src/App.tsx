import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/pages/HomePage';
import { ProgramsPage } from './components/pages/ProgramsPage';
import { RegistrationPage } from './components/pages/RegistrationPage';
import { ContactPage } from './components/pages/ContactPage';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { BatchManagement } from './components/admin/BatchManagement';
import { PlacementTracking } from './components/admin/PlacementTracking';
import { Reports } from './components/admin/Reports';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/programs" element={<ProgramsPage />} />
            <Route path="/registration" element={<RegistrationPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/batches" element={<BatchManagement />} />
            <Route path="/admin/placements" element={<PlacementTracking />} />
            <Route path="/admin/reports" element={<Reports />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </div>
    </Router>
  );
}
