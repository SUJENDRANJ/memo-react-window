import React from 'react';
import { User } from '../types';
import { Circle } from 'lucide-react';

interface UserListItemProps {
  user: User;
  style: React.CSSProperties;
}

const statusColors = {
  active: 'text-green-500',
  offline: 'text-gray-400',
  busy: 'text-red-500'
};

export const UserListItem: React.FC<UserListItemProps> = ({ user, style }) => {
  return (
    <div 
      style={style}
      className="p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors"
    >
      <div className="flex items-center space-x-4">
        <div className="relative">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-12 h-12 rounded-full object-cover bg-gray-100"
            loading="lazy"
          />
          <Circle 
            className={`absolute bottom-0 right-0 w-3 h-3 fill-current ${statusColors[user.status]}`}
          />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-gray-900 truncate">
            {user.name}
          </p>
          <p className="text-sm text-gray-500 truncate">
            {user.role}
          </p>
          <p className="text-xs text-gray-400 truncate">
            {user.email}
          </p>
        </div>
        <div className="text-xs text-gray-400">
          {new Date(user.lastSeen).toLocaleDateString()}
        </div>
      </div>
    </div>
  );
};