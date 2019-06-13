import React from 'react';
import Friend from './Friend';

export default function FriendsList({ friends, requestError, loading, setFriendToEdit }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Delete</th>
          </tr>
        </thead>
        <Friend
          friends={friends}
          setFriendToEdit={setFriendToEdit}
        />
      </table>
      {
        requestError
        && <p>Sorry! The engineer got cranky! We are unable to get the friends data at this time</p>
      }
      {
        loading
        && <p>Friend is coming!</p>
      }
    </div>
  );
}
