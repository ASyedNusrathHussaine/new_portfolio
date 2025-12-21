import { useState } from 'react';

interface HeaderProps {
  activeSection: string;
}

function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setOpen(false);
  };

  return (
    <header className="bg-white border-b border-gray-200 relative">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-gray-900">
          SYED NUSRATH HUSSAINE
        </h1>
        <nav className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-slate-900'
                  : 'text-gray-600 hover:text-slate-900'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
        <button
          className="md:hidden text-gray-600"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-sm">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left w-full py-2 px-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-slate-900'
                    : 'text-gray-600 hover:text-slate-900'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
