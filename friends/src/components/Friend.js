import React from 'react';

export default function Friend({ friends }) {
  return (
    <tbody>
      {
        friends.map(friend => (
          <tr
            key={friend.id}
          >
            <td>{friend.name}</td>
            <td>{friend.email}</td>
            <td>{friend.age}</td>
          </tr>
        ))
      }
    </tbody>
  )
}
