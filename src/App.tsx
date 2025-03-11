import React, { useMemo } from 'react';
import { FixedSizeList as List } from 'react-window';
import { UserListItem } from './components/UserListItem';
import { generateUsers } from './utils/generateUsers';
import { Users } from 'lucide-react';

function App() {
  const users = useMemo(() => generateUsers(10000), []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <Users className="w-6 h-6 text-indigo-500" />
              <h1 className="text-xl font-semibold text-gray-900">User Directory</h1>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Showing {users.length.toLocaleString()} users
            </p>
          </div>
          
          <List
            height={600}
            itemCount={users.length}
            itemSize={80}
            width="100%"
          >
            {({ index, style }) => (
              <UserListItem
                user={users[index]}
                style={style}
              />
            )}
          </List>
        </div>
      </div>
    </div>
  );
}

export default App;