import React, { useState, useEffect, useReducer } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';


function App() {
  const [friends, setFriends] = useState([]);
  const [requestError, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [friend, setUserInput] = useReducer((state, newState) => (
    { ...state, ...newState }
  ), { name: '', age: 0, email: '' });

  useEffect(() => {
    getAllFriends();
  }, []);

  const getAllFriends = async () => {
    setLoading(true);
    try {
      const friendsData = await axios.get('http://127.0.0.1:5000/friends');
      setFriends(friendsData.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
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
      />
      <AddFriend
        name={friend.name}
        age={friend.age}
        email={friend.email}
        addFriendInputHandler={addFriendInputHandler}
      />
    </div>
  );
}

export default App;
