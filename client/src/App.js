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
      <h1>Education Portal Application</h1>
      {users.map(u => <h4 key={u._id}>firstName : {u.firstName} schoolName : {u.schoolName} email: {u.email} interested_Course: {u.interestedCourse} </h4>)}
    </div>
  )
}

export default App;
