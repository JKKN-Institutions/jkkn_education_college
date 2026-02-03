import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function Gallery() {
  const galleryImages = [
    {
      id: 1,
      src: '/images/gallery-1.jpg',
      alt: 'Students in traditional dress at college event'
    },
    {
      id: 2,
      src: '/images/gallery-2.jpg',
      alt: 'Computer lab with students'
    },
    {
      id: 3,
      src: '/images/gallery-3.jpg',
      alt: 'Students working in computer lab'
    },
    {
      id: 4,
      src: '/images/gallery-4.jpg',
      alt: 'Classroom with students'
    },
    {
      id: 5,
      src: '/images/gallery-5.jpg',
      alt: 'Computer lab session'
    },
    {
      id: 6,
      src: '/images/gallery-6.jpg',
      alt: 'Students at college event'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Gallery Section */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8" style={{ color: '#1e7f4e' }}>
            GALLERY
          </h1>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="relative w-full h-[200px] sm:h-[250px] md:h-[280px] lg:h-[300px] overflow-hidden rounded-lg"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
