import React from 'react'
import "./question-style.css"

function BotFunc(){
    return(
        <>
        <div className="titlesection">
            <p>Tags</p>
            <input type="text" placeholder='Please add up to 3 tags to describe what your article is about e.g., java'/>
        </div>
        <div className='btn'>
        <button>Post</button>
        </div>
        </>
    )
}

export default BotFunc 