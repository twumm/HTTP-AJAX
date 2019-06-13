import React from 'react';

export default function AddFriend({ name, age, email, nickname, addFriendInputHandler, addFriend, editMode }) {
  return (
    <div>
      <h4>Add a friend</h4>
      <form
        onSubmit={event => addFriend(event)}
      >
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
          type="text"
          name="nickname"
          value={nickname}
          onChange={addFriendInputHandler}
        />
        <input
          type="submit"
          value={editMode ? 'Update Friend' : 'Add Friend'}
        />
      </form>
    </div>
  );
}
