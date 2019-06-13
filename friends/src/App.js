import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';


function App() {
  const [friends, setFriends] = useState([]);
  const [requestError, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [friend, setUserInput] = useReducer((state, newState) => (
    { ...state, ...newState }
  ), { name: '', age: 0, email: '' });

  const friendsURL = 'http://127.0.0.1:5000/friends';

  useEffect(() => {
    getAllFriends();
  }, []);

  const getAllFriends = async () => {
    setLoading(true);
    try {
      const friendsData = await axios.get(friendsURL);
      setFriends(friendsData.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  // eslint-disable-next-line consistent-return
  const addFriend = async (event) => {
    event.preventDefault();
    setLoading(true);

    const urlToCall = editMode ? `${friendsURL}/${friend.id}` : friendsURL;

    try {
      return editMode
        ? await axios.put(urlToCall, friend).then(() => getAllFriends())
        : await axios.post(urlToCall, friend).then(() => getAllFriends());
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
      setUserInput({
        name: '',
        age: 0,
        email: '',
      });
      setEditMode(false);
    }
  };

  const setFriendToEdit = (event, friendToEdit) => {
    event.preventDefault();
    setUserInput(friendToEdit);
    setEditMode(true);
  };

  const addFriendInputHandler = (event) => {
    event.preventDefault();
    const eventName = event.target.name;
    const { value } = event.target;

    setUserInput({ [eventName]: value });
  };

  return (
    <div className="App">
      <FriendsList
        friends={friends}
        requestError={requestError}
        loading={loading}
        setFriendToEdit={setFriendToEdit}
      />
      <AddFriend
        name={friend.name}
        age={friend.age}
        email={friend.email}
        addFriendInputHandler={addFriendInputHandler}
        addFriend={addFriend}
        editMode={editMode}
      />
    </div>
  );
}

export default App;
