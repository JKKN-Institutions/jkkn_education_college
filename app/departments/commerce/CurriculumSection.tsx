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
        description: 'Understanding child development, adolescent psychology, learning theories, and educational psychology principles for effective teaching.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '102',
        title: 'Contemporary India and Education',
        description: 'Exploring the Indian education system, national policies, constitutional provisions, and contemporary challenges in education.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'COM',
        number: '103',
        title: 'Pedagogy of Commerce - Part I',
        description: 'Foundations of Commerce teaching, curriculum design, instructional strategies, and teaching methods for Accountancy and Business Studies.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '104',
        title: 'Language Across the Curriculum',
        description: 'Integration of language skills in teaching Commerce subjects, technical vocabulary, and effective communication strategies.',
        credits: 2,
        type: 'Theory'
      },
      {
        code: 'EDU',
        number: '105',
        title: 'Reading and Reflecting on Texts',
        description: 'Critical analysis of educational texts, research papers, and development of reflective practices in teacher education.',
        credits: 2,
        type: 'Theory + Assignment'
      }
    ],
    2: [
      {
        code: 'EDU',
        number: '201',
        title: 'Learning and Teaching',
        description: 'Advanced learning theories, cognitive development, motivation strategies, and effective classroom teaching methodologies.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '202',
        title: 'Knowledge and Curriculum',
        description: 'Curriculum development theories, syllabus design, textbook analysis, and curriculum transaction strategies for Commerce education.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'COM',
        number: '203',
        title: 'Pedagogy of Commerce - Part II',
        description: 'Advanced teaching methods for Economics, GST concepts, digital finance, e-commerce, and contemporary business education.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '204',
        title: 'Assessment for Learning',
        description: 'Evaluation techniques, question paper design, continuous comprehensive evaluation (CCE), and formative assessment strategies.',
        credits: 4,
        type: 'Theory + Practical'
      },
      {
        code: 'EDU',
        number: '205',
        title: 'Drama and Art in Education',
        description: 'Creative teaching approaches, role-play, case studies, and artistic methods for engaging Commerce education.',
        credits: 2,
        type: 'Practical'
      }
    ],
    3: [
      {
        code: 'EDU',
        number: '301',
        title: 'School Internship - Phase I',
        description: '8-week intensive school internship with supervised teaching practice, lesson planning, and classroom management experience.',
        credits: 16,
        type: 'Practical / Field Work'
      },
      {
        code: 'EDU',
        number: '302',
        title: 'Inclusive Education',
        description: 'Teaching diverse learners, special education needs, differentiated instruction, and inclusive classroom practices.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'EDU',
        number: '303',
        title: 'ICT in Education',
        description: 'Educational technology, digital tools, online teaching methods, accounting software for teaching, and e-learning platforms.',
        credits: 4,
        type: 'Theory + Lab'
      },
      {
        code: 'COM',
        number: '304',
        title: 'Teaching of Accountancy',
        description: 'Specialized methods for teaching accounting principles, financial statements, computerized accounting, and practical accounts.',
        credits: 4,
        type: 'Theory + Practical'
      }
    ],
    4: [
      {
        code: 'EDU',
        number: '401',
        title: 'School Internship - Phase II',
        description: '8-week advanced internship with independent teaching, action research project, and comprehensive classroom experience.',
        credits: 16,
        type: 'Practical / Field Work'
      },
      {
        code: 'EDU',
        number: '402',
        title: 'Gender, School and Society',
        description: 'Gender sensitization, equity in education, addressing gender stereotypes, and creating inclusive learning environments.',
        credits: 4,
        type: 'Theory'
      },
      {
        code: 'EDU',
        number: '403',
        title: 'Action Research Project',
        description: 'Educational research methodology, classroom-based research, data analysis, and research report preparation.',
        credits: 4,
        type: 'Research + Dissertation'
      },
      {
        code: 'EDU',
        number: '404',
        title: 'Understanding the Self',
        description: 'Self-awareness, emotional intelligence, stress management, professional ethics, and personal development for educators.',
        credits: 2,
        type: 'Theory + Workshop'
      },
      {
        code: 'COM',
        number: '405',
        title: 'Teaching of Business Studies & Economics',
        description: 'Specialized pedagogy for Business Studies and Economics, case study methods, current affairs integration, and project-based learning.',
        credits: 4,
        type: 'Theory + Practical'
      }
    ]
  }

  return (
    <section id="curriculum-structure" className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#006837' }}>
            Curriculum Structure
          </h2>
          <div className="h-1 w-20 mx-auto mb-6 sm:mb-8" style={{ backgroundColor: '#7cb983' }}></div>
          <p className="text-sm sm:text-base lg:text-lg" style={{ color: '#006837' }}>
            Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveSemester(1)}
            className="px-8 py-3 rounded-lg font-semibold transition-all"
            style={{
              backgroundColor: activeSemester === 1 ? '#006837' : '#f8f9fa',
              color: activeSemester === 1 ? '#ffffff' : '#006837'
            }}
          >
            Semester I
          </button>
          <button
            onClick={() => setActiveSemester(2)}
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:bg-gray-100"
            style={{
              backgroundColor: activeSemester === 2 ? '#006837' : '#f8f9fa',
              color: activeSemester === 2 ? '#ffffff' : '#006837'
            }}
          >
            Semester II
          </button>
          <button
            onClick={() => setActiveSemester(3)}
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:bg-gray-100"
            style={{
              backgroundColor: activeSemester === 3 ? '#006837' : '#f8f9fa',
              color: activeSemester === 3 ? '#ffffff' : '#006837'
            }}
          >
            Semester III
          </button>
          <button
            onClick={() => setActiveSemester(4)}
            className="px-8 py-3 rounded-lg font-semibold transition-all hover:bg-gray-100"
            style={{
              backgroundColor: activeSemester === 4 ? '#006837' : '#f8f9fa',
              color: activeSemester === 4 ? '#ffffff' : '#006837'
            }}
          >
            Semester IV
          </button>
        </div>

        {/* Courses */}
        <div className="space-y-6">
          {semesterData[activeSemester as keyof typeof semesterData].map((course, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 lg:p-8 rounded-xl transition-transform hover:scale-[1.02]"
              style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            >
              <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-lg flex items-center justify-center text-white font-bold"
                   style={{ backgroundColor: '#006837' }}>
                <div className="text-center">
                  <div className="text-xs">{course.code}</div>
                  <div className="text-base sm:text-xl">{course.number}</div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 break-words" style={{ color: '#006837' }}>
                  {course.title}
                </h3>
                <p className="mb-3 leading-relaxed text-sm sm:text-base break-words" style={{ color: '#006837' }}>
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm font-semibold" style={{ color: '#006837' }}>
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
