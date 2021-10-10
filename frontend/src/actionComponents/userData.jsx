import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/userData.css';


const UserData = function () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleChangeName = (e) => {
        setName(e.target.value);
        localStorage.setItem('nameUserQuiz', e.target.value)
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        localStorage.setItem('emailUserQuiz', e.target.value)
    }

    return (
        <div className="user_data">
        <form>
        <h1>Bienvenido</h1>
        <input placeholder="Name" onChange={handleChangeName} required></input>
        <input placeholder="Email" onChange={handleChangeEmail} required></input>
        {name.length > 3 && email.length > 10?
            <Link to ='/game' className='start'>Empezar</Link>
            : null
        }
        </form>
        </div>
    )
}

export default UserData;