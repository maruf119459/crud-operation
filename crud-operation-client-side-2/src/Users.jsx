import { useState } from "react";
import { Link, NavLink, useLoaderData } from "react-router-dom";

const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)

    const deleteUserBtn = _id =>{
        console.log(_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method:'DELETE'
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.deletedCount > 0){
                const remaining = users.filter(user => user._id !== _id)
                alert('User Deleted.')
                console.log(remaining);
                setUsers(remaining)
            }
        })
    }   

    return (
        <div>
            <NavLink to='/'>Home</NavLink>
            <h1>All Users</h1>
            {
                users.map(user => <p key={user._id}>
                    <span>{user.name}</span>
                    <Link to={`/update-users/${user._id}`}><button style={{marginLeft:"10px", marginRight:"20px"}}>Update</button></Link>
                    <button onClick={()=>deleteUserBtn(user._id)}>Delete</button>
                </p>)
            }
        </div>
    );
};

export default Users;