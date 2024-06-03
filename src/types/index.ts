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

export interface ICategory {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface IItem {
  id: string;
  userId: string;
  categoryId: string;
  name: string;
  description: string;
  location: string;
  date: string;
  time: string;
  itemType: 'LOST' | 'FOUND';
  status: 'LOST' | 'FOUND';
  contactId: string;
  image_url?: string;
  createdAt: string;
  updatedAt: string;
  category: Category;
  user: {
    id: string;
    name: string;
    email: string;
  };
}