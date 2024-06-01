export interface IRegister {
  name: string;
  email: string;
  password: string;
  profile: {
    bio: string;
    age: number;
  }
}

export type TItemType = "LOST" | "FOUND"

export interface ReportItemInputs {
  name: string;
  description: string;
  itemType: TItemType;
  categoryId: string;
  date: string;
  time: string;
  location: string;
  contact?: {
    email?: string;
    phone?: string;
  }
}