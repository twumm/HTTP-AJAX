import React from 'react';

export default function AddFriend({ name, age, email, addFriendInputHandler }) {
  return (
    <div>
      <h4>Add a friend</h4>
      <form>
        <input
          type="text"
          name="name"
          value={name}
          onChange={addFriendInputHandler}
        />
        <input
          type="number"
          name="age"
          value={age}
          onChange={addFriendInputHandler}
        />
        <input
          type="text"
          name="email"
          value={email}
          onChange={addFriendInputHandler}
        />
        <input
          type="submit"
          value="Add Friend"
        />
      </form>
    </div>
  );
}