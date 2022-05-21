import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserData from './UserData';

const AllUsers = () => {
  const {
    data: users,
    isLoading,
    refetch,
  } = useQuery('users', () =>
    fetch('http://localhost:5000/users', {
      method: 'GET',
      headers: {
        authorization: `Bearer ${localStorage.getItem('accessToken')}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className='text-center mb-16'>
      <h1 className='text-2xl '>Total User: {users.length}</h1>
      <div className='overflow-x-auto'>
        <table className='table w-full'>
          <thead>
            <tr>
              <th></th>
              <th>User</th>
              <th>Make Role</th>
              <th>Remove User</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserData key={user._id} user={user} index={index + 1}></UserData>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
