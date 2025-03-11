import { faker } from '@faker-js/faker';
import type { User } from '../types';

// Curated list of Unsplash portrait photo IDs
const PORTRAIT_PHOTOS = [
  'rDEOVtE7vOs', 'ILip77SbmOE', 'mEZ3PoFGs_k', 'QXevDflbl8A',
  'iFgRcqHznqg', '7YVZYZeITc8', 'N4QTBfNQ8Nk', 'cdksyTqEXzo',
  'WNoLnJo7tS8', 'JaO3L8R2zsg', 'B4TjXnI0Y2c', 'Zz5LQe-VSMY',
  'KIPqvvTOC1s', 'R3LcfTvcGWY', 'sibVwORYqs0', 'ZHvM3XIOHoE',
  'b1Hg7QI-zcc', 'RiDxDgHg7pw', 'AJIqZDAUD7A', 'DItYlc26zVI'
];

export function generateUsers(count: number): User[] {
  return Array.from({ length: count }, (_, index) => ({
    id: faker.string.uuid(),
    name: faker.person.fullName(),
    email: faker.internet.email(),
    avatar: `https://images.unsplash.com/photo-${PORTRAIT_PHOTOS[index % PORTRAIT_PHOTOS.length]}?auto=format&fit=crop&w=150&h=150&q=80`,
    role: faker.person.jobTitle(),
    status: faker.helpers.arrayElement(['active', 'offline', 'busy']) as User['status'],
    lastSeen: faker.date.recent().toISOString(),
  }));
}