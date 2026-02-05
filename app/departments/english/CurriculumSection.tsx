'use client'

import { useState } from 'react'

export default function CurriculumSection() {
  const [activeSemester, setActiveSemester] = useState(1)

  const semesters = [
    {
      id: 1,
      name: 'Semester I',
      courses: [
        {
          code: 'EDU 101',
          title: 'Childhood and Growing Up',
          description: 'Understanding child development, learning theories, adolescent psychology, and educational psychology principles for effective teaching.',
          credits: 4,
          type: 'Theory + Practical'
        },
        {
          code: 'EDU 102',
          title: 'Contemporary India and Education',
          description: 'Exploring the Indian education system, constitutional provisions, national policies (NEP 2020), and contemporary educational challenges.',
          credits: 4,
          type: 'Theory'
        },
        {
          code: 'ENG 103',
          title: 'Pedagogy of English - Part I',
          description: 'Foundations of English language teaching, approaches and methods in ELT, Communicative Language Teaching, and instructional strategies.',
          credits: 4,
          type: 'Theory + Practical'
        },
        {
          code: 'EDU 104',
          title: 'Language Across the Curriculum',
          description: 'Integration of language skills in teaching various subjects, developing reading comprehension, and academic writing skills.',
          credits: 2,
          type: 'Theory'
        },
        {
          code: 'EDU 105',
          title: 'Reading and Reflecting on Texts',
          description: 'Critical analysis of educational texts, developing reflective practices, and understanding diverse perspectives in education.',
          credits: 2,
          type: 'Theory + Seminar'
        }
      ]
    },
    {
      id: 2,
      name: 'Semester II',
      courses: [
        {
          code: 'EDU 201',
          title: 'Learning and Teaching',
          description: 'Theories of learning, teaching models, instructional design, classroom management, and effective teaching-learning strategies.',
          credits: 4,
          type: 'Theory + Practical'
        },
        {
          code: 'ENG 202',
          title: 'Pedagogy of English - Part II',
          description: 'Teaching language skills (LSRW), teaching grammar and vocabulary, material development, and lesson planning for English classes.',
          credits: 4,
          type: 'Theory + Practical'
        },
        {
          code: 'EDU 203',
          title: 'Assessment for Learning',
          description: 'Principles of assessment, formative and summative evaluation, continuous comprehensive evaluation (CCE), and rubric development.',
          credits: 4,
          type: 'Theory + Practical'
        },
        {
          code: 'EDU 204',
          title: 'Drama and Art in Education',
          description: 'Using drama, role-play, and creative arts as pedagogical tools for language teaching and holistic Learner development.',
          credits: 2,
          type: 'Theory + Workshop'
        },
        {
          code: 'EDU 205',
          title: 'School Internship - Phase I',
          description: 'Initial school exposure, classroom observation, micro-teaching practice, and understanding school administration and culture.',
          credits: 4,
          type: 'Practical (4 weeks)'
        }
      ]
    },
    {
      id: 3,
      name: 'Semester III',
      courses: [
        {
          code: 'EDU 301',
          title: 'Knowledge and Curriculum',
          description: 'Epistemological foundations, curriculum development theories, syllabus design, and curriculum evaluation for English education.',
          credits: 4,
          type: 'Theory'
        },
        {
          code: 'EDU 302',
          title: 'Inclusive Education',
          description: 'Understanding diverse learners, special educational needs, differentiated instruction, and creating inclusive English classrooms.',
          credits: 4,
          type: 'Theory + Practical'
        },
        {
          code: 'ENG 303',
          title: 'Teaching English Literature',
          description: 'Approaches to teaching prose, poetry, drama, and fiction; developing literary appreciation and critical thinking skills.',
          credits: 4,
          type: 'Theory + Seminar'
        },
        {
          code: 'EDU 304',
          title: 'ICT in Education',
          description: 'Educational technology, digital tools for English teaching, online resources, e-learning platforms, and CALL applications.',
          credits: 2,
          type: 'Theory + Lab'
        },
        {
          code: 'EDU 305',
          title: 'School Internship - Phase II',
          description: 'Extended teaching practice in partner schools, lesson delivery, assessment implementation, and reflective journaling.',
          credits: 8,
          type: 'Practical (8 weeks)'
        }
      ]
    },
    {
      id: 4,
      name: 'Semester IV',
      courses: [
        {
          code: 'EDU 401',
          title: 'Gender, School, and Society',
          description: 'Gender perspectives in education, promoting gender equality, addressing stereotypes, and creating gender-sensitive learning environments.',
          credits: 4,
          type: 'Theory'
        },
        {
          code: 'EDU 402',
          title: 'Creating an Inclusive School',
          description: 'Strategies for inclusive education, Universal Design for Learning (UDL), collaborative teaching, and community engagement.',
          credits: 4,
          type: 'Theory + Field Work'
        },
        {
          code: 'ENG 403',
          title: 'English for Competitive Examinations',
          description: 'Preparing Learners for competitive exams, teaching test-taking strategies, vocabulary building, and comprehension skills.',
          credits: 2,
          type: 'Theory + Practice'
        },
        {
          code: 'EDU 404',
          title: 'Action Research Project',
          description: 'Conducting classroom-based research, identifying problems, implementing interventions, data analysis, and report writing.',
          credits: 4,
          type: 'Research + Viva'
        },
        {
          code: 'EDU 405',
          title: 'School Internship - Phase III',
          description: 'Final teaching practice, full responsibility teaching, co-curricular activities, parent interaction, and professional development.',
          credits: 8,
          type: 'Practical (8 weeks)'
        }
      ]
    }
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#ffffff' }}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4" style={{ color: '#006837' }}>
            Curriculum Structure
          </h2>
          <div className="h-1 w-20 mx-auto mb-8" style={{ backgroundColor: '#7cb983' }}></div>
          <p className="text-lg" style={{ color: '#006837' }}>
            Comprehensive syllabus aligned with NCTE norms and NEP 2020 guidelines
          </p>
        </div>

        {/* Semester Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {semesters.map((semester) => (
            <button
              key={semester.id}
              onClick={() => setActiveSemester(semester.id)}
              className={`px-8 py-4 rounded-lg font-semibold transition-all ${
                activeSemester === semester.id
                  ? 'shadow-lg scale-105'
                  : 'hover:scale-105'
              }`}
              style={{
                backgroundColor: activeSemester === semester.id ? '#006837' : '#f8f9fa',
                color: activeSemester === semester.id ? '#ffffff' : '#006837'
              }}
            >
              {semester.name}
            </button>
          ))}
        </div>

        {/* Courses */}
        <div className="space-y-6">
          {semesters
            .find((s) => s.id === activeSemester)
            ?.courses.map((course, index) => (
              <div
                key={index}
                className="p-8 rounded-xl transition-transform hover:scale-[1.02]"
                style={{ backgroundColor: '#f8f9fa', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Course Code Badge */}
                  <div className="flex-shrink-0">
                    <div
                      className="w-20 h-20 rounded-lg flex items-center justify-center text-white font-bold text-lg"
                      style={{ backgroundColor: '#006837' }}
                    >
                      {course.code.split(' ')[1]}
                    </div>
                  </div>

                  {/* Course Details */}
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-3" style={{ color: '#006837' }}>
                      {course.title}
                    </h3>
                    <p className="text-base leading-relaxed mb-4" style={{ color: '#002309' }}>
                      {course.description}
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span
                        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ backgroundColor: '#FBFBEE', color: '#7cb983' }}
                      >
                        Credits: {course.credits}
                      </span>
                      <span
                        className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold"
                        style={{ backgroundColor: '#FBFBEE', color: '#002309' }}
                      >
                        {course.type}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  )
}
