import { useState } from 'react';
import { Link } from 'react-router-dom'

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
        <h1>Welcome</h1>
        <input type='text' placeholder="Name" onChange={handleChangeName}></input>
        <input type='text' placeholder="Email" onChange={handleChangeEmail}></input>
        {name.length > 3 && email.length > 10?
            <Link to = '/game'>Start</Link>
            : null
        }
        </form>
        </div>
    )
}

export default UserData;