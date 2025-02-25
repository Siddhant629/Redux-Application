import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

import { deleteUser } from './Userreducer';


const Home = () => {

    const users= useSelector((state)=> state.users);
    const dispatch = useDispatch();
    console.log(users)
    const handleDelete=(id)=>{
      dispatch(deleteUser({id:id}))

    }
  return (
    
   
        <div className="container ">
     <h2>User Info</h2>
    <Link to="/create"> <button className='btn btn-success my-3' >ADD </button></Link>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
            {users.map((user, index)=>(
                <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                        <Link to={`/edit/${user.id}`}><button className='btn btn-sm btn-primary'>Edit </button></Link>
                        <button onClick={()=>handleDelete(user.id)} className='btn btn-sm btn-danger ms-2'>delete </button>
                        
                    </td>
                </tr>
            ))}
        </tbody>
        </table></div>
  )
}

export default Home