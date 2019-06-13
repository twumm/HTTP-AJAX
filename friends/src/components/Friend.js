import React from 'react';

export default function Friend({ friends, setFriendToEdit }) {
  return (
    <tbody>
      {
        friends.map(friend => (
          <tr
            key={friend.id}
            onClick={event => setFriendToEdit(event, friend)}
          >
            <td>{friend.name}</td>
            <td>{friend.email}</td>
            <td>{friend.age}</td>
          </tr>
        ))
      }
    </tbody>
  );
}
