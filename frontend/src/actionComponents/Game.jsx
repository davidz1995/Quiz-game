import { useSelector } from 'react-redux';
import { getAll } from '../store/actions/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../styles/game.css';

const Game = function () {
    let name = localStorage.getItem('nameUserQuiz');
    let email = localStorage.getItem('emailUserQuiz');

    const [level, setLevel] = useState(1);
    const [score, setScore] = useState(0);

    //Redux
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getAll())
      },[dispatch]);

    const questions = useSelector(state => state.getAll)

    const questionsByLevel = questions.filter(question => question.difficulty === level)
    //console.log(level)

    function randomSelection() {
        let question = Math.floor(Math.random()*questionsByLevel.length);
        return question
       }
       
       let index = randomSelection()
       let randomQuestion = questionsByLevel[index]
       //console.log(randomQuestion)
      
    const handleClick = (event) => {
        if(event.target.value === randomQuestion.correctAnswer && level < 6){
            setLevel(level + 1)
            setScore(score + +randomQuestion.prize)
        }else{
            sendData()
            alert('Perdiste, conseguiste ' + score + ' puntos.');
            window.location.href = '/';
        }
    }

    function sendData() {
        fetch('http://localhost:4000/api/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({name, email, score}),
        })
          .then(response => {
            return response.text();
          })
          .catch(() => console.log('Error'));
      }

    const handleFinishClick = () => {
        sendData()
        window.location.href = '/';
    }

    const handleExit = () => {
        if(name && email && score){sendData()}
        window.location.href = '/';
    }

    return (
        <div className="game">
        {/* Navbar */}
        {level === 6 ?
            null:
            <div className='navBar'>
                <div className='level'>
                    <h2>Nivel</h2>
                    <p>{level}</p>
                </div>
                <div className='score'>
                    <h3>Puntaje</h3>
                    <p>{score}</p>
                </div>
            <Link to='/' onClick={handleExit} className='exit'>Salir</Link>
            </div>
        }
        {/* Question */}
        {randomQuestion?
            <h1 className="question">{randomQuestion.question}</h1>:null}
        {/* Answer */}
            <div className="answers">
            {randomQuestion?
            randomQuestion.answers.sort(function() { return Math.random() - 0.5 }).map((e, index) => 
            <button key={index} onClick={handleClick} value={e}>{e}</button>
            ):null}
            </div>
        {/* Last screen */}
        {level >= 6 ?
            <>
            <div className='prize'>
                    <h3>Ganaste! Tu premio son </h3>
                    <p className='total_prize'>{score}</p>
                    <p>QuizCoins</p>
            </div>
            <button className='finish' onClick={handleFinishClick}>Finalizar</button>
            </>
            :null}
        </div>
    )
}

export default Game;