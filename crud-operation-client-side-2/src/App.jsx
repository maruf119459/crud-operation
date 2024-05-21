import { NavLink } from 'react-router-dom';
import './App.css'

function App() {
  const handleAddUser = e => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const user = { name, email };
    console.log(user);
    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          alert('User Add Successfully!')
          e.target.reset();
        }
      })
  }

  return (
    <>
      <NavLink to='/users'>View Users</NavLink>
      <h1>Vite + React</h1>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" /><br />
        <input type="email" name="email" /><br />
        <input type="submit" value="ADD USER" /><br />
      </form>
    </>
  )
}

export default App
