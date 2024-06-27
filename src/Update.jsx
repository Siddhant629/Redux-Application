import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './Userreducer';

const Update = () => {
 const {id} = useParams();
 
 const users = useSelector((state)=> state.users);
 const existingUser = users.filter(f => f.id ==id);
 const {name, email} = existingUser[0];
 const [uname, setName] = useState(name)
 const [uemail, setEmail] = useState(email)
 const dispatch = useDispatch(); 
 const navigate =useNavigate();
    

    const handleUpdate = (event)=>{
    event.preventDefault();
    dispatch(updateUser({
      id:id,
      name: uname,
      email: uemail
    }));
    navigate("/")
    };

  return (
    
    <div>
    <h2>Update User</h2>
    <form onSubmit={handleUpdate}>
      <div>
        <label htmlFor="name">Name:</label>
        <input 
          type="text" 
          id="name" 
          value={uname} onChange={e => {setName(e.target.value)}}
        />
      </div>
      <br />
      <div>
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email"  
          value={uemail}  onChange={e=> {setEmail(e.target.value)}}
        />
      </div>
      <br />
      <button >UPDATE</button>
    </form>

    </div>
  )
}

export default Update;