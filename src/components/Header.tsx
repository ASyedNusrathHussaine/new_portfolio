import { useState, useEffect, useRef } from 'react';

interface HeaderProps {
  activeSection: string;
}

function Header({ activeSection }: HeaderProps) {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLDivElement | null>(null);

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

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    function onClickOutside(e: MouseEvent | TouchEvent) {
      const target = e.target as Node;
      if (open && navRef.current && !navRef.current.contains(target)) {
        setOpen(false);
      }
    }

    document.addEventListener('keydown', onKey);
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('touchstart', onClickOutside);

    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('touchstart', onClickOutside);
    };
  }, [open]);

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
          className="md:hidden text-gray-600 p-2 rounded focus:outline-none focus:ring"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
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

      {/* Overlay to improve tap target and close on outside click */}
      {open && <div className="fixed inset-0 z-20 bg-black/20 md:hidden" aria-hidden onClick={() => setOpen(false)} />}

      {open && (
        <nav ref={navRef} id="mobile-menu" className="md:hidden absolute left-0 right-0 top-full bg-white border-t border-gray-100 shadow-sm z-30">
          <div className="max-w-6xl mx-auto px-6 py-3 flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left w-full py-3 px-2 text-sm font-medium transition-colors ${
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
