/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';

export default function Friend({ friends, setFriendToEdit, deleteFriend }) {
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
            <td
              onClick={event => deleteFriend(event, friend.id)}
            >
              X
            </td>
          </tr>
        ))
      }
    </tbody>
  );
}
