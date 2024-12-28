export const storage = {
  getUsers: () => {
    const users = localStorage.getItem('users');
    return users ? JSON.parse(users) : [];
  },
  
  saveUser: (user: any) => {
    const users = storage.getUsers();
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
  },
  
  getLogs: () => {
    const logs = localStorage.getItem('logs');
    return logs ? JSON.parse(logs) : [];
  },
  
  saveLog: (log: any) => {
    const logs = storage.getLogs();
    logs.push(log);
    localStorage.setItem('logs', JSON.stringify(logs));
  }
};