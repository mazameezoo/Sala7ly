export type UserRole = 'citizen' | 'authority';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
}
