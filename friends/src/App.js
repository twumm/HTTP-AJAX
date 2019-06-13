import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import './App.css';


function App() {
  const [friends, setFriends] = useState([]);
  const [requestError, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [friendName, setFriendName] = useState('');
  const [friendAge, setFriendAge] = useState(0);
  const [friendEmail, setFriendEmail] = useState('');

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

    switch (eventName) {
      case 'name':
        setFriendName(value);
        break;
      case 'age':
        setFriendAge(value);
        break;
      case 'email':
        setFriendEmail(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="App">
      <FriendsList
        friends={friends}
        requestError={requestError}
        loading={loading}
      />
      <AddFriend
        name={friendName}
        age={friendAge}
        email={friendEmail}
        addFriendInputHandler={addFriendInputHandler}
      />
    </div>
  );
}

export default App;
