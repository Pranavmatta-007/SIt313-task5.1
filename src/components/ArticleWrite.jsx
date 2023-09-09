import React from 'react'
import "./question-style.css"
import BotFunc from './bottom';
function ArticlePart(){
    return(
        <>
        <h1 className='Heading'>What do you want to ask or share</h1>
        <div className='titlesection'>
            
            <p>Title</p>
            <input type="text" placeholder='Enter a descriptive title'/>
        </div>
        <div className='problem'>
            <p>Abstract</p>
            <textarea className= 'small' name="article1" id="" cols="30" rows="10" placeholder='Enter a 1-paragraph abstract '></textarea>
        </div>
        <div className='problem'>
            <p>Article Text</p>
            <textarea className='big' name="" id="" cols="30" rows="10"placeholder='Enter a 1-paragraph abstract'></textarea>
        </div>
        <BotFunc/>
        </>
    )
}
export default ArticlePart;