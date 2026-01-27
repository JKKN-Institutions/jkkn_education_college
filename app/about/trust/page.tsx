import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';

export default function OurTrust() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Our Trust Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="mx-auto max-w-7xl">
          {/* Page Title */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12" style={{ color: '#1e7f4e' }}>
            OUR TRUST
          </h1>

          {/* Photo with Ornate Frame */}
          <div className="flex justify-center mb-12">
            <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
              <Image
                src="/images/Our_Trust.webp"
                alt="Founder SHRI.J.K.K.NATARAJAH"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Founder Name */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-6" style={{ color: '#1e7f4e' }}>
            SHRI.J.K.K.NATARAJAH
          </h2>

          {/* Founder Title */}
          <h3 className="text-xl md:text-2xl font-bold text-center mb-12" style={{ color: '#1e7f4e' }}>
            FOUNDER OF J.K.K.RANGAMMAL CHARITABLE TRUST
          </h3>

          {/* Description Content */}
          <div className="max-w-6xl mx-auto space-y-6">
            <p className="text-base md:text-lg leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
              In the sixties, female children in Kumarapalayam had to walk 2.5 km for their schooling to the nearby town of Bhavani. Some parents hesitated to send their children, and some ceased their children's schooling altogether. This resulted in them staying at home or working in handlooms and dyeing industries. Realizing the need for women's education, a visionary philanthropist of the zone, Shri J.K.K. Natarajah, initiated a girls' school in the town in 1965, four years before the inception of the trust.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
              The Trust, J.K.K. Rangammal Charitable Trust, was established (Reg No: 33) in 1969 with the motto of providing literacy and women's empowerment, resulting in an upgraded socio-economic status for the people. Walking in the footsteps of her father, Smt. N. Sendamaraai, Managing Trustee, expanded the service by providing multi-disciplinary education to both genders. Now, under the umbrella, there are ten institutions, including Dental, Pharmacy, Nursing, Education, Engineering, Arts, and Science colleges and a Government Aided Girls' School and Matriculation schools.
            </p>

            <p className="text-base md:text-lg leading-relaxed text-justify" style={{ color: '#5a6c7d' }}>
              The Trust involves itself in many social service activities, inclusive of health-oriented services such as free dental camps, free treatments, and surgeries, blood donation camps, and motivational and entrepreneurship awareness camps. The trust also extends its charitable hands to provide medical support to the impoverished, help the destitute, provide natural calamity support, education, and scholarship support to poor students, and cultural support. A pioneering establishment of the zone since its inception, its grandeur service to society not only in terms of education but also community welfare activities is still immense.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
