import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;
  const isAdmin = location.pathname.startsWith('/admin');

  const publicLinks = [
    { path: '/', label: 'About' },
    { path: '/programs', label: 'Programs' },
    { path: '/registration', label: 'Registration' },
    { path: '/contact', label: 'Contact' },
  ];

  const adminLinks = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/batches', label: 'Batches' },
    { path: '/admin/placements', label: 'Placements' },
    { path: '/admin/reports', label: 'Reports' },
  ];

  const links = isAdmin ? adminLinks : publicLinks;

  return (
    <header className="bg-white border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <div className="bg-[#2596be] p-2 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="font-bold text-lg leading-tight">TN - Autoskill</div>
              <div className="text-xs text-gray-600">Logistics Training</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path)
                    ? 'text-[#2596be]'
                    : 'text-gray-700 hover:text-[#2596be]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            {!isAdmin && (
              <Link to="/admin">
                <Button variant="outline" size="sm">Admin</Button>
              </Link>
            )}
            {isAdmin && (
              <Link to="/">
                <Button variant="outline" size="sm">Public Site</Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 ${
                  isActive(link.path)
                    ? 'text-[#2596be]'
                    : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {!isAdmin && (
              <Link to="/admin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="mt-2">Admin</Button>
              </Link>
            )}
            {isAdmin && (
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <Button variant="outline" size="sm" className="mt-2">Public Site</Button>
              </Link>
            )}
          </nav>
        )}
      </div>
    </header>
  );
}
