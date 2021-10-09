import { useSelector } from 'react-redux';
import { getAll } from '../store/actions/actions';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
//import { Link } from 'react-router-dom';

const Game = function () {
    const [level, setLevel] = useState(1);

    //Redux
    const dispatch = useDispatch();

    useEffect(() => {
       dispatch(getAll())
      },[dispatch]);

    const questions = useSelector(state => state.getAll)

    const questionsByLevel = questions.filter(question => question.difficulty === level)
    //console.log(questionsByLevel)

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
        }else{
            alert('Perdiste');
            window.location.href = '/';
        }
    }

    return (
        <div className="game">
        {randomQuestion?
            <h1 className="question">{randomQuestion.question}</h1>:null}
            <div className="answers">
            {randomQuestion?
            randomQuestion.answers.map((e, index) => 
            <button key={index} onClick={handleClick} value={e}>{e}</button>
            ):null}
            </div>
        </div>
    )
}

export default Game;