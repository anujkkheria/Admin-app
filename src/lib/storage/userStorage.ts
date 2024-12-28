import { User } from '../types/auth';

const USERS_KEY = 'users';

export const userStorage = {
  getAll: (): User[] => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },
  
  save: (user: User): void => {
    const users = userStorage.getAll();
    users.push(user);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  },
  
  findByEmail: (email: string): User | undefined => {
    const users = userStorage.getAll();
    return users.find(u => u.email === email);
  },
  
  update: (userId: string, data: Partial<User>): void => {
    const users = userStorage.getAll();
    const index = users.findIndex(u => u.id === userId);
    if (index !== -1) {
      users[index] = { ...users[index], ...data };
      localStorage.setItem(USERS_KEY, JSON.stringify(users));
    }
  }
};