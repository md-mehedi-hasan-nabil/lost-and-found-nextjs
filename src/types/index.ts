export interface IRegister {
    name: string;
    email: string;
    password: string;
    profile: {
      bio: string;
      age: number;
    }
  }