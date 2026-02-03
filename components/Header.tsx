'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const isActiveRoute = (itemHref: string, itemName: string) => {
    if (pathname === itemHref) return true;
    if (itemHref !== '/' && pathname.startsWith(itemHref)) return true;
    return false;
  };

  const navItems = [
    { name: 'HOME', href: '/', hasDropdown: false },
    { name: 'ABOUT', href: '/about', hasDropdown: true },
    { name: 'DEPARTMENTS', href: '/departments', hasDropdown: true },
    { name: 'GALLERY', href: '/gallery', hasDropdown: false },
    { name: 'FACILITIES', href: '/facilities', hasDropdown: true },
    { name: 'OTHERS', href: '/others', hasDropdown: true },
    { name: 'CONTACT', href: '/contact', hasDropdown: false },
  ];

  const dropdownMenus: { [key: string]: { name: string; href: string }[] } = {
    ABOUT: [
      { name: 'Our Vision And Mission', href: '/about/vision-mission' },
      { name: 'Our Trust', href: '/about/trust' },
      { name: 'Our Management', href: '/about/management' },
      { name: 'Our Institutions', href: '/about/institutions' },
      { name: "Principal's Message", href: '/about/principal-message' },
      { name: 'NCTE Approval', href: '/about/ncte-approval' },
    ],
    DEPARTMENTS: [
      { name: 'B.Ed Tamil', href: '/departments/tamil' },
      { name: 'B.Ed English', href: '/departments/english' },
      { name: 'B.Ed Zoology', href: '/departments/zoology' },
      { name: 'B.Ed Maths', href: '/departments/maths' },
      { name: 'B.Ed Chemistry', href: '/departments/chemistry' },
      { name: 'B.Ed Computer Science', href: '/departments/computer-science' },
      { name: 'B.Ed Commerce', href: '/departments/commerce' },
      { name: 'B.Ed Physics', href: '/departments/physics' },
      { name: 'B.Ed Botany', href: '/departments/botany' },
      { name: 'B.Ed History', href: '/departments/history' },
      { name: 'B.Ed Economics', href: '/departments/economics' },
      { name: 'B.Ed Political Science', href: '/departments/political-science' },
      { name: 'B.Ed Social Science', href: '/departments/social-science' },
      { name: 'B.Ed Microbiology', href: '/departments/microbiology' },
    ],
    FACILITIES: [
      { name: 'Library', href: '/facilities/library' },
      { name: 'Hostel', href: '/facilities/hostel' },
      { name: 'Class Room', href: '/facilities/class-room' },
      { name: 'Auditorium', href: '/facilities/auditorium' },
      { name: 'Transport', href: '/facilities/transport' },
      { name: 'WIFI', href: '/facilities/wifi' },
      { name: 'Ambulance Services', href: '/facilities/ambulance-services' },
      { name: 'Food Court', href: '/facilities/food-court' },
      { name: 'Bank & Post Office', href: '/facilities/bank-post-office' },
      { name: 'Hospital', href: '/facilities/hospital' },
      { name: 'Seminar Hall', href: '/facilities/seminar-hall' },
    ],
    OTHERS: [
      { name: 'BIOMATRIC LIST', href: '/others/biomatric-list' },
      { name: 'Balance Sheet', href: '/others/balance-sheet' },
      { name: 'Financial details', href: '/others/financial-details' },
      { name: 'Digital Campus', href: '/others/digital-campus' },
      { name: 'Faculty Details', href: '/others/faculty-details' },
      { name: 'Careers', href: '/others/careers' },
      { name: 'Alumni', href: '/others/alumni' },
      { name: 'Privacy policy', href: '/others/privacy-policy' },
    ],
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo.png"
                alt="JKKN College of Education"
                width={250}
                height={60}
                priority
                className="h-10 sm:h-12 lg:h-14 w-auto max-w-[180px] sm:max-w-[220px] lg:max-w-[250px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4 xl:space-x-6 2xl:space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button
                    className={`flex items-center text-sm font-semibold transition-colors duration-200 px-3 py-2 ${
                      isActiveRoute(item.href, item.name)
                        ? 'text-gray-800 border-b-2 border-[#1e7f4e]'
                        : 'text-gray-800 hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                    <svg
                      className="ml-1 h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className={`flex items-center text-sm font-semibold transition-colors duration-200 px-3 py-2 ${
                      isActiveRoute(item.href, item.name)
                        ? 'text-gray-800 border-b-2 border-[#1e7f4e]'
                        : 'text-gray-800 hover:text-gray-600'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.hasDropdown && activeDropdown === item.name && dropdownMenus[item.name] && (
                  <div className="absolute top-full left-0 pt-2 w-64 z-50">
                    <div className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100">
                      {dropdownMenus[item.name].map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-5 py-3 text-sm transition-colors duration-200 border-b border-gray-100 last:border-b-0 ${
                            pathname === subItem.href
                              ? 'bg-[#1e7f4e] text-white'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                          }`}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Search Icon */}
          <div className="hidden lg:flex lg:items-center">
            <button
              className="p-2 text-gray-800 hover:text-gray-600 transition-colors duration-200"
              aria-label="Search"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {!mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4 mobile-menu-scroll">
            <div className="space-y-1 pt-2 pb-safe">
              {navItems.map((item) => (
                <div key={item.name}>
                  <div
                    className={`flex items-center justify-between px-3 py-3 min-h-[48px] text-base font-semibold cursor-pointer rounded-lg ${
                      isActiveRoute(item.href, item.name)
                        ? 'text-gray-800 bg-gray-50 border-l-4 border-[#1e7f4e]'
                        : 'text-gray-800 hover:bg-gray-50 hover:text-gray-600 active:bg-gray-100'
                    }`}
                    onClick={() => {
                      if (item.hasDropdown) {
                        setActiveDropdown(activeDropdown === item.name ? null : item.name);
                      } else {
                        setMobileMenuOpen(false);
                      }
                    }}
                  >
                    <Link
                      href={item.href}
                      className="flex-1"
                      onClick={(e) => {
                        if (item.hasDropdown) {
                          e.preventDefault();
                        } else {
                          setMobileMenuOpen(false);
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                    {item.hasDropdown && (
                      <svg
                        className={`h-3 w-3 transition-transform duration-200 ${activeDropdown === item.name ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </div>

                  {/* Mobile Dropdown Menu */}
                  {item.hasDropdown && activeDropdown === item.name && dropdownMenus[item.name] && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-gray-200 pl-2">
                      {dropdownMenus[item.name].map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className={`block px-3 py-2.5 min-h-[44px] text-sm rounded-md flex items-center ${
                            pathname === subItem.href
                              ? 'bg-[#1e7f4e] text-white'
                              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800 active:bg-gray-100'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {/* Search in mobile menu */}
              <button
                className="flex w-full items-center px-3 py-3 min-h-[48px] text-base font-semibold text-gray-800 hover:bg-gray-50 hover:text-gray-600 active:bg-gray-100 rounded-lg"
                aria-label="Search"
              >
                <svg
                  className="h-5 w-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                SEARCH
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
