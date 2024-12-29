export interface User {
  id: string;
  email: string;
  fullName: string;
  createdAt: string;
}

export interface Log {
  id: string;
  userId: string;
  action: string;
  details: string;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, fullName: string) => Promise<void>;
  signOut: () => void;
  resetPassword: (email: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
}

export type Period = "1 min" | "5 mins" | "30 mins" | "1 day";

export interface ChartData {
  timestamp: string;
  revenue: number;
  profit: number;
}

export interface VisibleSeries {
  revenue: boolean;
  profit: boolean;
}
