import { Log } from '../types/log';

const LOGS_KEY = 'logs';

export const logStorage = {
  getAll: (): Log[] => {
    const logs = localStorage.getItem(LOGS_KEY);
    return logs ? JSON.parse(logs) : [];
  },
  
  save: (log: Log): void => {
    const logs = logStorage.getAll();
    logs.push(log);
    localStorage.setItem(LOGS_KEY, JSON.stringify(logs));
  },
  
  getByUserId: (userId: string): Log[] => {
    const logs = logStorage.getAll();
    return logs.filter(log => log.userId === userId);
  }
};