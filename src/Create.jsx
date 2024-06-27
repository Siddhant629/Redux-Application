import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from './Userreducer'
import { useNavigate } from 'react-router-dom'

const Create = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const users= useSelector((state)=> state.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addUser({id: users[users.length -1].id+1 ,name: name,email: email}))
        navigate('/')
      };


  return (
    <div>
    <h2>Add New User</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
      </div>
      <br />
      <button type="submit">Submit</button>
    </form>
    </div>

   

  )

}

export default Create