import React from 'react'
import "./question-style.css"
import BotFunc from './bottom';

function QuestionPart(){
    return(
        <>
        <h1 className='Heading'>What do you want to ask or share</h1>
        <div className='titlesection'>
        <p>Title</p>
        <input type="text" placeholder='Start your question with how, what, why, etc.'/>
        </div>
        <div className='problem'>
        <p >Describe your problem</p>
        <textarea className='big' name="questioning" id="textID" cols="30" rows="10"></textarea>
        </div>
        <BotFunc/>
        </>
    )
}
export default QuestionPart;