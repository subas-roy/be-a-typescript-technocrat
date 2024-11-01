{
  // spread operator
  // rest operator
  // destructuring

  // learn spread operator

  const bros1: string[] = ['Mir', 'Firoz', 'Mizan']
  const bros2: string[] = ['Tonmoy', 'Nahid', 'Rahat']

  bros1.push(...bros2)
  console.log(bros1)

  const mentors1 = {
    typescript: 'Mexba',
    redux: 'Mir',
    dbms: 'Mizan'
  }

  const mentors2 = {
    prisma: 'Firoz',
    next: 'Tanmoy',
    cloud: 'Nahid'
  }

  const mentorsList = {
    ...mentors1,
    ...mentors2
  }




  
}