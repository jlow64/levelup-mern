import React, {useEffect, useState} from 'react';
import apis from './api/index';

const App = () => {
  const [users, setUsers] = useState([])
  const getData = async() => {
    const res = await apis.getUsers()
    setUsers(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
 
  return (
    <div>
      <h1>MERN Stack</h1>
      {users.map(u => <h4 key={u._id}>userName : {u.userName}</h4>)}
    </div>
  )
}

export default App;
