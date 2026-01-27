import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function VisionMission() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Vision and Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16" style={{ color: '#1e7f4e' }}>
            OUR VISION AND MISSION
          </h1>

          {/* Vision Section */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2c3e50' }}>
                  Vision
                  <div className="w-16 h-1 mt-2" style={{ backgroundColor: '#1e7f4e' }}></div>
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#5a6c7d' }}>
                  To be a Leading Global Innovative Solutions provider for the ever changing needs of the society.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Eye Icon */}
                  <ellipse cx="100" cy="100" rx="90" ry="60" fill="#1e7f4e" fillOpacity="0.1" stroke="#1e7f4e" strokeWidth="4"/>
                  <circle cx="100" cy="100" r="40" fill="#1e7f4e" fillOpacity="0.2" stroke="#1e7f4e" strokeWidth="4"/>
                  <circle cx="100" cy="100" r="20" fill="#1e7f4e"/>
                  <circle cx="105" cy="95" r="8" fill="white"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div>
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#2c3e50' }}>
                  Mission
                  <div className="w-20 h-1 mt-2" style={{ backgroundColor: '#1e7f4e' }}></div>
                </h2>
                <p className="text-lg leading-relaxed" style={{ color: '#5a6c7d' }}>
                  Enabling a Platform for all to seize exponential opportunities through bioconvergence, thereby facilitating them to become Dynamic Leaders who shape the future.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Target Icon */}
                  <circle cx="100" cy="100" r="80" fill="#1e7f4e" fillOpacity="0.1" stroke="#1e7f4e" strokeWidth="4"/>
                  <circle cx="100" cy="100" r="55" fill="#1e7f4e" fillOpacity="0.15" stroke="#1e7f4e" strokeWidth="4"/>
                  <circle cx="100" cy="100" r="30" fill="#1e7f4e" fillOpacity="0.2" stroke="#1e7f4e" strokeWidth="4"/>
                  <circle cx="100" cy="100" r="12" fill="#1e7f4e"/>
                  {/* Arrow */}
                  <g transform="rotate(-45 100 100)">
                    <line x1="40" y1="100" x2="100" y2="100" stroke="#1e7f4e" strokeWidth="6" strokeLinecap="round"/>
                    <polygon points="35,100 50,95 50,105" fill="#1e7f4e"/>
                    <line x1="30" y1="90" x2="40" y2="100" stroke="#1e7f4e" strokeWidth="4" strokeLinecap="round"/>
                    <line x1="30" y1="110" x2="40" y2="100" stroke="#1e7f4e" strokeWidth="4" strokeLinecap="round"/>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
