import { create } from 'zustand';
import { AuthState, User } from '../lib/types/auth';
import { userStorage } from '../lib/storage/userStorage';
import { toast } from 'react-toastify';

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: false,
  
  signIn: async (email: string, password: string) => {
    const user = userStorage.findByEmail(email);
    
    if (!user) {
      toast.error('Invalid credentials');
      throw new Error('Invalid credentials');
    }
    
    set({ user });
    toast.success('Signed in successfully');
  },
  
  signUp: async (email: string, password: string, fullName: string) => {
    if (userStorage.findByEmail(email)) {
      toast.error('Email already exists');
      throw new Error('Email already exists');
    }
    
    const user: User = {
      id: crypto.randomUUID(),
      email,
      fullName,
      createdAt: new Date().toISOString()
    };
    
    userStorage.save(user);
    set({ user });
    toast.success('Signed up successfully');
  },
  
  signOut: () => {
    set({ user: null });
    toast.success('Signed out successfully');
  },
  
  resetPassword: async (email: string) => {
    toast.success('Password reset email would be sent in a real app');
  },
  
  updateProfile: async (data: Partial<User>) => {
    set((state) => {
      if (state.user) {
        userStorage.update(state.user.id, data);
        return { user: { ...state.user, ...data } };
      }
      return state;
    });
    toast.success('Profile updated successfully');
  }
}));