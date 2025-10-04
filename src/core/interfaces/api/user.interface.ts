export interface User {
  id: number;
  username: string;
  registeredAt: Date;
}

export interface UserRegistration extends Omit<User, 'id' | 'registeredAt'> {}
