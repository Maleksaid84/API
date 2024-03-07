import React, { useState, useEffect } from 'react';
import axios from 'axios';

// use state...
const UserList = () => {
  const [userList, setUserList] = useState([]);

useEffect (()=>{

  axios.get("https://jsonplaceholder.typicode.com/users")
  .then((users)=>setUserList(users.data))
  .catch((err)=>console.log("error :",err))
},[])
  return (
    <div>
      <h1>Liste des utilisateurs</h1>
      <ul>
        {userList.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
