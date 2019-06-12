import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FriendsList from './components/FriendsList';
import './App.css';



function App() {
  const [friends, setFriends] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

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

  return (
    <div className="App">
      <FriendsList />
    </div>
  );
}

export default App;
