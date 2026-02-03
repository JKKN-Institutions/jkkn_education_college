import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function ZoologyDepartment() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{
        background: 'linear-gradient(135deg, #003d5c 0%, #005a7f 100%)'
      }}>
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div>
              {/* NCTE Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 mb-8"
                   style={{ borderColor: '#ff6633' }}>
                <svg className="w-5 h-5" style={{ color: '#ff6633' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-base font-semibold" style={{ color: '#ff6633' }}>
                  NCTE Approved | TNTEU Affiliated
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span style={{ color: '#ffffff' }}>B.Ed </span>
                <span style={{ color: '#ff6633' }}>Zoology</span>
              </h1>

              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold mb-6" style={{ color: '#ffffff' }}>
                Bachelor of Education in Biological Sciences
              </h2>

              <p className="text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8 lg:mb-12" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                Embark on a transformative journey to become a skilled Zoology educator. Our comprehensive 2-year program equips you with modern pedagogical techniques, laboratory teaching methods, and hands-on practical experience in biological sciences education.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6 sm:mb-8 lg:mb-12">
                {/* Years */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#ff6633' }}>2</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>YEARS</div>
                </div>

                {/* Seats */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#ff6633' }}>50</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>SEATS</div>
                </div>

                {/* Placement */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#ff6633' }}>92%</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>PLACEMENT</div>
                </div>

                {/* Semesters */}
                <div className="p-6 rounded-lg text-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                  <div className="text-4xl font-bold mb-2" style={{ color: '#ff6633' }}>4</div>
                  <div className="text-sm font-semibold tracking-wide" style={{ color: '#ffffff' }}>SEMESTERS</div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                        style={{ backgroundColor: '#ff6633' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Apply Now
                </button>

                <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-gray-900"
                        style={{ borderColor: '#ffffff', color: '#ffffff' }}>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                  View Curriculum
                </button>
              </div>
            </div>

            {/* Right Content - Program Card */}
            <div className="relative">
              <div className="p-12 rounded-2xl text-center"
                   style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(10px)' }}>
                <h3 className="text-4xl font-bold mb-8" style={{ color: '#ffffff' }}>
                  B.Ed Zoology Program
                </h3>
                <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
                <p className="text-lg leading-relaxed" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
                  <span className="font-semibold">JKKN College of Education</span> - Shaping Future Science Educators Since 1995
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Overview Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              Course Overview
            </h2>
            <div className="h-1 w-20 mx-auto" style={{ backgroundColor: '#ff6633' }}></div>
          </div>

          <p className="text-center text-lg mb-12" style={{ color: '#5a6c7d' }}>
            Comprehensive training in biological sciences education
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <span className="text-8xl font-bold" style={{ color: '#ff6633' }}>T</span>
                </div>
                <div>
                  <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                    he Bachelor of Education (B.Ed) in Zoology at JKKN College of Education is a professionally designed 2-year program that prepares passionate science enthusiasts to become exceptional Zoology and Biology educators. This NCTE-approved program combines theoretical foundations with extensive practical training, equipping Learners with the knowledge and skills necessary to inspire the next generation of scientists.
                  </p>
                </div>
              </div>

              <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                Our curriculum integrates modern pedagogical approaches with hands-on laboratory teaching methods, ensuring graduates are proficient in both traditional and contemporary educational practices. The program emphasizes inquiry-based learning, scientific experimentation, and the development of critical thinking skills essential for effective science education.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                With state-of-the-art laboratory facilities, experienced Learning Facilitators, and strong industry partnerships, JKKN College of Education provides an ideal environment for aspiring Zoology educators. Our Learners gain real-world teaching experience through school internships at partner institutions across Tamil Nadu, preparing them for successful careers in secondary and higher secondary education.
              </p>

              <p className="text-lg leading-relaxed" style={{ color: '#4a5568' }}>
                The program aligns with the National Education Policy (NEP) 2020 guidelines and NCTE norms, ensuring graduates meet the highest standards of teacher education. Upon completion, graduates are eligible to teach Zoology and Biology in schools across India and pursue advanced studies in education and biological sciences.
              </p>
            </div>

            {/* Right Sidebar */}
            <div className="space-y-6">
              {/* Program Duration */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#ff6633', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#5a6c7d' }}>
                  PROGRAM DURATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#003d5c' }}>
                  2 Years
                </div>
                <div className="text-sm" style={{ color: '#5a6c7d' }}>
                  (4 Semesters)
                </div>
              </div>

              {/* Total Credits */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#ff6633', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#5a6c7d' }}>
                  TOTAL CREDITS
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#003d5c' }}>
                  80 Credits
                </div>
              </div>

              {/* Medium of Instruction */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#ff6633', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#5a6c7d' }}>
                  MEDIUM OF INSTRUCTION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#003d5c' }}>
                  English
                </div>
              </div>

              {/* Intake Capacity */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#ff6633', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#5a6c7d' }}>
                  INTAKE CAPACITY
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#003d5c' }}>
                  50 Learners
                </div>
              </div>

              {/* Affiliation */}
              <div className="p-6 rounded-xl border-l-4"
                   style={{ backgroundColor: '#ffffff', borderColor: '#ff6633', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                <div className="text-sm font-semibold mb-2" style={{ color: '#5a6c7d' }}>
                  AFFILIATION
                </div>
                <div className="text-2xl font-bold mb-1" style={{ color: '#003d5c' }}>
                  TNTEU
                </div>
                <div className="text-sm" style={{ color: '#5a6c7d' }}>
                  Chennai
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Highlights Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              Program Highlights
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#5a6c7d' }}>
              Discover what makes our B.Ed Zoology program exceptional
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* NCTE Approved */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #0ea5e9' }}>
                <svg className="w-10 h-10" style={{ color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                NCTE Approved
              </h3>
              <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                Recognized by the National Council for Teacher Education, ensuring quality standards and national acceptance of your degree.
              </p>
            </div>

            {/* Advanced Laboratory Training */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #0ea5e9' }}>
                <svg className="w-10 h-10" style={{ color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                Advanced Laboratory Training
              </h3>
              <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                Hands-on experience with microscopy, specimen preparation, dissection techniques, and modern biological laboratory methods.
              </p>
            </div>

            {/* Expert Learning Facilitators */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #0ea5e9' }}>
                <svg className="w-10 h-10" style={{ color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                Expert Learning Facilitators
              </h3>
              <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                Learn from experienced educators with extensive backgrounds in zoology, biology, and modern science pedagogy.
              </p>
            </div>

            {/* Modern Learning Studios */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #0ea5e9' }}>
                <svg className="w-10 h-10" style={{ color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                Modern Learning Studios
              </h3>
              <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                Well-equipped facilities with smart boards, digital microscopes, virtual labs, and multimedia resources for enhanced learning.
              </p>
            </div>

            {/* Inquiry-Based Learning */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #0ea5e9' }}>
                <svg className="w-10 h-10" style={{ color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                Inquiry-Based Learning
              </h3>
              <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                Training in inquiry-based teaching methods that foster scientific curiosity and critical thinking among Learners.
              </p>
            </div>

            {/* Scholarship Support */}
            <div className="p-4 sm:p-6 lg:p-8 rounded-lg sm:rounded-xl text-center transition-transform hover:scale-105"
                 style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                   style={{ backgroundColor: '#ffffff', border: '3px solid #0ea5e9' }}>
                <svg className="w-10 h-10" style={{ color: '#0ea5e9' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                Scholarship Support
              </h3>
              <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                Various government and institutional scholarships available for eligible candidates to ensure accessible education.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Criteria & Documents Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              Eligibility Criteria & Documents
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#5a6c7d' }}>
              Requirements for admission to B.Ed Zoology program
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Academic Requirements */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff6633' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#003d5c' }}>
                  Academic Requirements
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Bachelor's degree (BSc or equivalent) from a recognized university with Zoology as a major or optional subject
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Minimum 50% aggregate marks in graduation (45% for SC/ST/OBC/PWD candidates)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Candidates with BSc Zoology, BSc Botany & Zoology, or BSc Life Sciences are eligible
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Candidates appearing for final year degree exams may also apply
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Age limit as per Tamil Nadu government norms
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Valid TNTEU B.Ed entrance examination score (if applicable)
                  </p>
                </div>
              </div>
            </div>

            {/* Required Documents */}
            <div className="p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: '#ff6633' }}>
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold" style={{ color: '#003d5c' }}>
                  Required Documents
                </h3>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    10th and 12th mark sheets and certificates
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    BSc degree certificate and consolidated mark sheet
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Transfer certificate from last institution attended
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Community certificate (for reserved category candidates)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Income certificate (for scholarship purposes)
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Aadhar card and passport-size photographs
                  </p>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: '#d4edda' }}>
                      <svg className="w-4 h-4" style={{ color: '#1e7f4e' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed" style={{ color: '#4a5568' }}>
                    Migration certificate (if applicable)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Process Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              Admission Process
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#5a6c7d' }}>
              Simple steps to begin your journey as a Zoology educator
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Step 1 - Online Application */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                       style={{ backgroundColor: '#ff6633' }}>
                    1
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                    Online Application
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                    Fill out the online application form on our website with accurate personal and academic details. Upload required documents in specified formats.
                  </p>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full" style={{ backgroundColor: '#0ea5e9' }}></div>
              </div>

              {/* Step 2 - Document Verification */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                       style={{ backgroundColor: '#ff6633' }}>
                    2
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                    Document Verification
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                    Submit original documents for verification at the college admission office. Ensure all certificates are properly attested.
                  </p>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full" style={{ backgroundColor: '#0ea5e9' }}></div>
              </div>

              {/* Step 3 - Entrance/Counseling */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                       style={{ backgroundColor: '#ff6633' }}>
                    3
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                    Entrance/Counseling
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                    Attend TNTEU counseling based on entrance exam rank or participate in institutional admission process as applicable.
                  </p>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full" style={{ backgroundColor: '#0ea5e9' }}></div>
              </div>

              {/* Step 4 - Seat Allotment */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                       style={{ backgroundColor: '#ff6633' }}>
                    4
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                    Seat Allotment
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                    Receive provisional seat allotment based on merit and availability. Confirm your acceptance within the specified timeline.
                  </p>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full" style={{ backgroundColor: '#0ea5e9' }}></div>
              </div>

              {/* Step 5 - Fee Payment */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                       style={{ backgroundColor: '#ff6633' }}>
                    5
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                    Fee Payment
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                    Complete the fee payment process through online or offline modes. Apply for scholarships if eligible before the deadline.
                  </p>
                </div>
                <div className="absolute top-12 left-6 w-0.5 h-full" style={{ backgroundColor: '#0ea5e9' }}></div>
              </div>

              {/* Step 6 - Enrollment Complete */}
              <div className="relative flex items-start gap-6">
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg"
                       style={{ backgroundColor: '#ff6633' }}>
                    6
                  </div>
                </div>
                <div className="flex-1 p-8 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4" style={{ color: '#003d5c' }}>
                    Enrollment Complete
                  </h3>
                  <p className="leading-relaxed" style={{ color: '#5a6c7d' }}>
                    Receive your enrollment confirmation and college ID. Attend the orientation program to begin your academic journey.
                  </p>
                </div>
              </div>
            </div>

            {/* Download Application Form Button */}
            <div className="text-center mt-12">
              <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-white transition-transform hover:scale-105"
                      style={{ backgroundColor: '#ff6633' }}>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Application Form
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Alumni Say Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              What Our Alumni Say
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#5a6c7d' }}>
              Hear from successful graduates of our B.Ed Zoology program
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="p-12 rounded-xl" style={{ backgroundColor: '#ffffff', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
              {/* Quote Icon */}
              <div className="text-8xl mb-6" style={{ color: '#e0e7ff', lineHeight: '0.5' }}>
                "
              </div>

              <p className="text-xl leading-relaxed mb-8 italic" style={{ color: '#4a5568' }}>
                The B.Ed Zoology program at JKKN College of Education completely transformed my understanding of science education. The practical laboratory sessions and supportive Learning Facilitators helped me develop innovative teaching methods. Today, I am proud to be a Biology teacher preparing NEET aspirants, inspiring young minds to explore the wonders of life sciences.
              </p>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold"
                     style={{ backgroundColor: '#ff6633' }}>
                  SK
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1" style={{ color: '#003d5c' }}>
                    Suresh Kumar
                  </h4>
                  <p className="text-base" style={{ color: '#5a6c7d' }}>
                    B.Ed Zoology Graduate 2023 | Biology Teacher, Kendriya Vidyalaya Coimbatore
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              Frequently Asked Questions
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#5a6c7d' }}>
              Get answers to common queries about B.Ed Zoology program
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {/* FAQ 1 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  What is the eligibility for B.Ed Zoology admission?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Candidates must hold a Bachelor's degree (BSc or equivalent) from a recognized university with at least 50% marks (45% for SC/ST/OBC/PWD candidates). Zoology must be a major or optional subject at the degree level. Candidates with BSc Zoology, BSc Botany & Zoology, or BSc Life Sciences are eligible. Final year degree Learners may also apply.
              </p>
            </details>

            {/* FAQ 2 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  What is the duration of the B.Ed Zoology program?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                The B.Ed Zoology program is a 2-year (4 semesters) full-time professional degree course as per NCTE norms. Each academic year consists of two semesters with comprehensive theoretical, practical, and internship components.
              </p>
            </details>

            {/* FAQ 3 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  Is JKKN College of Education NCTE approved?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Yes, JKKN College of Education is approved by the National Council for Teacher Education (NCTE) and affiliated to Tamil Nadu Teachers Education University (TNTEU), Chennai. Our programs meet all regulatory standards and are recognized across India.
              </p>
            </details>

            {/* FAQ 4 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  What are the career opportunities after B.Ed Zoology?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Graduates can become Zoology/Biology teachers in government and private schools (Classes 6-12), prepare Learners for NEET and competitive exams, pursue higher education (M.Ed, Ph.D in Education or Zoology), work as curriculum developers, science content writers, laboratory coordinators, or take up administrative roles in educational institutions.
              </p>
            </details>

            {/* FAQ 5 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  Does the program include laboratory training?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Yes, the program includes extensive laboratory-based pedagogy training. Learners gain hands-on experience in microscopy, specimen handling, dissection techniques, laboratory safety protocols, and modern biological research methods essential for effective science teaching.
              </p>
            </details>

            {/* FAQ 6 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  Are scholarships available for B.Ed Zoology Learners?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Yes, eligible candidates can avail various government scholarships including BC/MBC/SC/ST scholarships, minority scholarships, and other state and central government schemes. Our scholarship cell assists Learners in identifying and applying for appropriate financial aid.
              </p>
            </details>

            {/* FAQ 7 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  Is hostel accommodation available?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Yes, separate hostel facilities are available for both male and female Learners within the campus. The hostels offer comfortable accommodation, nutritious food, 24/7 security, Wi-Fi connectivity, and all necessary amenities at reasonable rates.
              </p>
            </details>

            {/* FAQ 8 */}
            <details className="group p-6 rounded-xl" style={{ backgroundColor: '#f8f9fa' }}>
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h3 className="text-xl font-bold" style={{ color: '#003d5c' }}>
                  Can I teach Biology after completing B.Ed Zoology?
                </h3>
                <svg className="w-6 h-6 transition-transform group-open:rotate-180" style={{ color: '#003d5c' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </summary>
              <p className="mt-4 leading-relaxed" style={{ color: '#4a5568' }}>
                Yes, B.Ed Zoology graduates are qualified to teach both Zoology and Biology subjects in secondary and higher secondary schools. The program covers comprehensive biological sciences pedagogy, enabling graduates to teach life sciences across all school levels.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* Accreditations & Affiliations Section */}
      <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#f8f9fa' }}>
        <div className="mx-auto max-w-7xl">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#003d5c' }}>
              Accreditations & Affiliations
            </h2>
            <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#ff6633' }}></div>
            <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#5a6c7d' }}>
              Recognized by premier educational bodies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {/* NCTE */}
            <div className="text-center">
              <div className="p-8 rounded-xl mb-4 transition-transform hover:scale-105"
                   style={{ backgroundColor: '#003d5c' }}>
                <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                  NCTE
                </div>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#5a6c7d' }}>
                NCTE Approved
              </p>
            </div>

            {/* TNTEU */}
            <div className="text-center">
              <div className="p-8 rounded-xl mb-4 transition-transform hover:scale-105"
                   style={{ backgroundColor: '#0ea5e9' }}>
                <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                  TNTEU
                </div>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#5a6c7d' }}>
                TNTEU Affiliated
              </p>
            </div>

            {/* NAAC */}
            <div className="text-center">
              <div className="p-8 rounded-xl mb-4 transition-transform hover:scale-105"
                   style={{ backgroundColor: '#ff6633' }}>
                <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                  NAAC
                </div>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#5a6c7d' }}>
                NAAC Accredited
              </p>
            </div>

            {/* UGC */}
            <div className="text-center">
              <div className="p-8 rounded-xl mb-4 transition-transform hover:scale-105"
                   style={{ backgroundColor: '#003d5c' }}>
                <div className="text-4xl font-bold" style={{ color: '#ffffff' }}>
                  UGC
                </div>
              </div>
              <p className="text-sm font-semibold" style={{ color: '#5a6c7d' }}>
                UGC Recognized
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ff6633' }}>
        <div className="mx-auto max-w-7xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#ffffff' }}>
            Begin Your Teaching Journey Today
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: '#ffffff' }}>
            Join JKKN College of Education and become a part of our legacy in transforming lives through progressive science education. Admissions for 2025-26 academic year are now open.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="inline-flex items-center gap-2 px-8 py-4 rounded-lg font-semibold transition-transform hover:scale-105"
                    style={{ backgroundColor: '#ffffff', color: '#ff6633' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              Apply Online Now
            </button>
            <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold border-2 transition-all hover:bg-white hover:text-gray-900"
                    style={{ borderColor: '#ffffff', color: '#ffffff' }}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Admissions
            </button>
          </div>
        </div>
      </section>


      <Footer />
    </>
  )
}
