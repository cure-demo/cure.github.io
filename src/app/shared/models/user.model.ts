export interface Profile {
  id: number;
  firstname: string;
  lastname: string;
  // title: string;
  // profile_image: string;
}

export interface User {
  [x: string]: any;
  key: any;
  last_name: any;
  notes: any;
  status: any;
  email: any;
  phone: any;
  keywords: any;
  lastContact: any;
  first_name: any;
  Message: any;
  Token: any;
  Id: any;
  User: any;
  Result: any;
  id: any;
  error: number;
  message: string;
  profile: Profile;
  Users: any;
  RecordCount: any;
}
export interface forgot {
  Email: string;
}
export interface reset {
  UserName: string;
  Password: any;
}
