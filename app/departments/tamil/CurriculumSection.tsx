'use client'

import { useState } from 'react'

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(1)

  const semesterData = {
    1: [
      {
        code: 'EDU',
        number: '101',
        title: 'Childhood and Growing Up',
        description: 'Understanding child development, learning theories, and educational psychology principles.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '102',
        title: 'Contemporary India and Education',
        description: 'Exploring the Indian education system, policies, and contemporary challenges.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'TAM',
        number: '103',
        title: 'Pedagogy of Tamil - Part I',
        description: 'Foundations of Tamil language teaching, curriculum design, and instructional strategies.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '104',
        title: 'Language Across the Curriculum',
        description: 'Integration of language skills in teaching various subjects effectively.',
        credits: 2,
        type: 'Theory'
      },
      {
        code: 'EDU',
        number: '105',
        title: 'Reading and Reflecting on Texts',
        description: 'Critical analysis of educational texts and development of reflective practices.',
        credits: 2,
        type: 'Practical'
      }
    ],
    2: [
      {
        code: 'EDU',
        number: '201',
        title: 'Learning and Teaching',
        description: 'Advanced learning theories, teaching methodologies, and classroom dynamics.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'TAM',
        number: '202',
        title: 'Pedagogy of Tamil - Part II',
        description: 'Advanced teaching techniques, assessment methods, and resource development for Tamil.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '203',
        title: 'Assessment for Learning',
        description: 'Comprehensive understanding of evaluation techniques, rubrics, and feedback mechanisms.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '204',
        title: 'Drama and Art in Education',
        description: 'Integration of creative arts in teaching and learning processes.',
        credits: 2,
        type: 'Practical'
      },
      {
        code: 'EDU',
        number: '205',
        title: 'School Internship - Phase I',
        description: 'Initial exposure to school environment, observation, and assisted teaching practice.',
        credits: 4,
        type: 'Practical'
      }
    ],
    3: [
      {
        code: 'EDU',
        number: '301',
        title: 'Knowledge and Curriculum',
        description: 'Curriculum development, knowledge construction, and pedagogical content knowledge.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'EDU',
        number: '302',
        title: 'Gender, School and Society',
        description: 'Understanding gender issues in education and promoting inclusive practices.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'EDU',
        number: '303',
        title: 'Inclusive Education',
        description: 'Strategies for teaching diverse learners and creating inclusive learning environments.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '304',
        title: 'ICT in Education',
        description: 'Integration of technology in teaching, digital resources, and online pedagogy.',
        credits: 2,
        type: 'Practical'
      },
      {
        code: 'EDU',
        number: '305',
        title: 'School Internship - Phase II',
        description: 'Extended teaching practice with independent lesson planning and delivery.',
        credits: 8,
        type: 'Practical'
      }
    ],
    4: [
      {
        code: 'EDU',
        number: '401',
        title: 'Creating an Inclusive School',
        description: 'Leadership in inclusive education and school-based support systems.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '402',
        title: 'Understanding the Self',
        description: 'Self-awareness, professional identity development, and reflective practice.',
        credits: 2,
        type: 'Practical'
      },
      {
        code: 'EDU',
        number: '403',
        title: 'Health, Yoga and Physical Education',
        description: 'Promoting physical and mental well-being through education.',
        credits: 2,
        type: 'Practical'
      },
      {
        code: 'EDU',
        number: '404',
        title: 'Action Research Project',
        description: 'Conducting classroom-based research to improve teaching practices.',
        credits: 4,
        type: 'Practical'
      },
      {
        code: 'EDU',
        number: '405',
        title: 'School Internship - Phase III',
        description: 'Final comprehensive teaching practice with full classroom responsibility.',
        credits: 8,
        type: 'Practical'
      }
    ]
  }

  return (
    <section className="py-10 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4" style={{ color: '#003d5c' }}>
            Curriculum Structure
          </h2>
          <div className="h-1 w-16 sm:w-20 mx-auto mb-4 sm:mb-6 lg:mb-8" style={{ backgroundColor: '#ff6633' }}></div>
          <p className="text-sm sm:text-base lg:text-lg px-2" style={{ color: '#5a6c7d' }}>
            Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4 mb-6 sm:mb-8 lg:mb-12">
          <button
            onClick={() => setActiveSemester(1)}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              activeSemester === 1 ? 'shadow-lg' : ''
            }`}
            style={{
              backgroundColor: activeSemester === 1 ? '#ffffff' : '#f8f9fa',
              color: '#003d5c',
              border: activeSemester === 1 ? '2px solid #ff6633' : '2px solid transparent'
            }}
          >
            Semester I
          </button>
          <button
            onClick={() => setActiveSemester(2)}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              activeSemester === 2 ? 'shadow-lg' : ''
            }`}
            style={{
              backgroundColor: activeSemester === 2 ? '#ffffff' : '#f8f9fa',
              color: '#003d5c',
              border: activeSemester === 2 ? '2px solid #ff6633' : '2px solid transparent'
            }}
          >
            Semester II
          </button>
          <button
            onClick={() => setActiveSemester(3)}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              activeSemester === 3 ? 'shadow-lg' : ''
            }`}
            style={{
              backgroundColor: activeSemester === 3 ? '#ffffff' : '#f8f9fa',
              color: '#003d5c',
              border: activeSemester === 3 ? '2px solid #ff6633' : '2px solid transparent'
            }}
          >
            Semester III
          </button>
          <button
            onClick={() => setActiveSemester(4)}
            className={`px-4 sm:px-6 lg:px-8 py-2 sm:py-3 rounded-lg font-semibold transition-all text-sm sm:text-base ${
              activeSemester === 4 ? 'shadow-lg' : ''
            }`}
            style={{
              backgroundColor: activeSemester === 4 ? '#ffffff' : '#f8f9fa',
              color: '#003d5c',
              border: activeSemester === 4 ? '2px solid #ff6633' : '2px solid transparent'
            }}
          >
            Semester IV
          </button>
        </div>

        {/* Courses */}
        <div className="space-y-4 sm:space-y-6">
          {semesterData[activeSemester as keyof typeof semesterData].map((course, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 lg:gap-6 p-4 sm:p-6 rounded-lg sm:rounded-xl transition-shadow hover:shadow-lg"
              style={{ backgroundColor: '#f8f9fa' }}
            >
              <div className="flex-shrink-0 flex sm:block justify-center">
                <div
                  className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-lg flex flex-col items-center justify-center text-white font-bold"
                  style={{ backgroundColor: '#0284c7' }}
                >
                  <div className="text-[10px] sm:text-xs">{course.code}</div>
                  <div className="text-lg sm:text-xl lg:text-2xl">{course.number}</div>
                </div>
              </div>
              <div className="flex-grow text-center sm:text-left">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold mb-1 sm:mb-2" style={{ color: '#003d5c' }}>
                  {course.title}
                </h3>
                <p className="mb-2 sm:mb-3 leading-relaxed text-sm sm:text-base" style={{ color: '#4a5568' }}>
                  {course.description}
                </p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-4 text-xs sm:text-sm" style={{ color: '#5a6c7d' }}>
                  <span>Credits: {course.credits}</span>
                  <span>{course.type}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
