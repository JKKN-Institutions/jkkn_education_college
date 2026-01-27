import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function SeminarHall() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Seminar Hall Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#1e7f4e' }}>
            SEMINAR HALL
          </h1>

          {/* Images Grid */}
          <div className="flex justify-center mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2">
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src="/images/seminar-hall-1.jpg"
                  alt="Seminar hall event"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <div className="relative w-full h-[250px] md:h-[300px]">
                <Image
                  src="/images/seminar-hall-2.jpg"
                  alt="Seminar hall event"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6">
            {/* Bulleted List */}
            <ul className="space-y-4 ml-6">
              <li
                className="text-base md:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Our seminar hall is spacious and comfortable, perfect for hosting events and seminars of all kinds.
              </li>
              <li
                className="text-base md:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Equipped with modern amenities, such as a fully air-conditioned environment, stage, projector, sound system, and lighting equipment, our hall ensures that every attendee can learn in comfort and convenience.
              </li>
              <li
                className="text-base md:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                With high-speed Wi-Fi and ample parking facilities, our venue is designed to make event planning a breeze.
              </li>
              <li
                className="text-base md:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Our team of skilled technicians and support staff are available to help with event setup and ensure that everything runs smoothly and efficiently.
              </li>
              <li
                className="text-base md:text-lg leading-relaxed text-justify"
                style={{
                  color: '#4a5568',
                  listStyleType: 'disc',
                  paddingLeft: '0.5rem'
                }}
              >
                Whether you&apos;re hosting a large conference or a small workshop, our seminar hall is the perfect space for your event. Contact us today to learn more about our facilities and how we can help make your event a success!
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
