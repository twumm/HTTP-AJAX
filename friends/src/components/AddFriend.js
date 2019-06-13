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
          placeholder="Name"
          onChange={addFriendInputHandler}
        />
        <input
          type="text"
          name="age"
          value={age}
          placeholder="Age"
          onChange={addFriendInputHandler}
        />
        <input
          type="text"
          name="email"
          value={email}
          placeholder="Email"
          onChange={addFriendInputHandler}
        />
        <input
          type="text"
          name="nickname"
          value={nickname}
          placeholder="Nickname"
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
