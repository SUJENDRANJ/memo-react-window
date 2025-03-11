export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  role: string;
  status: 'active' | 'offline' | 'busy';
  lastSeen: string;
}