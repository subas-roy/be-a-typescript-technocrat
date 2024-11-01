{
  // union types

  // type frontendDeveloper = 'fakibazDeveloper' | 'juniorDeveloper'
  // type fullstackDeveloper = 'frontendDeveloper' | 'expartDeveloper'

  // type Developer = frontendDeveloper | fullstackDeveloper

  // const neDeveloper: frontendDeveloper = 'juniorDeveloper'

  // type User = {
  //   name: string;
  //   email?: string;
  //   gender: "male" | "female";
  //   bloodGroup: "O+" | "A+" | "AB+";
  // }

  // const user1: User = {
  //   name: 'Subas',
  //   gender: 'male',
  //   bloodGroup: 'O+'
  // }


  // Intersection types
  type FrontendDeveloper = {
    skills: string[];
    designation1: 'Frontend Developer';
  }

  type BackendDeveloper = {
    skills: string[];
    designation2: 'Backend Developer';
  }

  type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullstackDeveloper: FullstackDeveloper = {
    skills: ['HTML', 'CSS', 'EXPRESS'],
    designation1: 'Frontend Developer',
    designation2: 'Backend Developer'
  }




}