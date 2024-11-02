{
  //constraints

  const addCourseToStudent = <T extends { id: number; name: string; email: string }>(student: T) => {
    const course = 'Next Level Web Development'
    return {
      ...student,
      course
    }
  }

  const student3 = addCourseToStudent({
    id: 44,
    name: 'Mr Z',
    email: 'z@gmail.com',
    hasBike: true
  })

  const student1 = addCourseToStudent({
    id: 222,
    name: 'Mr. X',
    email: 'x@gmail.com',
    devType: 'NlWD'
  })

  const student2 = addCourseToStudent({
    id: 333,
    name: 'Mr. XY',
    email: 'y@gmail.com',
    hasWatch: 'Apple Watch'
  })





  //
}