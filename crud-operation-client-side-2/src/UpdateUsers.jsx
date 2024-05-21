import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateUsers = () => {
    const loadedUser = useLoaderData()
    const navigate = useNavigate()
    const updateUser = e =>{
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const user = {name, email};
        console.log(user);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
          method: 'PUT',
          headers: {
            'content-type':'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data => {
          console.log(data);
          if(data.modifiedCount > 0){
            alert('User Update Successfully!')
            navigate(-1)
          }
        })
    }
    return (
        <div>
            <h1>{`Update ${loadedUser.name}'s Info:`}</h1>
            <form onSubmit={updateUser}>
                <input type="text" name="name" id="" defaultValue={loadedUser?.name}/><br/>
                <input type="email" name="email" id=""  defaultValue={loadedUser?.email}/><br/>
                <input type="submit" value="Update User" id=""  /><br/>
            </form>
        </div>
    );
};

export default UpdateUsers;