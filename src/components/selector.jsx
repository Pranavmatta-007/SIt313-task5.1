import React, { useState } from 'react'
import "./Select-style.css";
import QuestionPart from './questionaire';
import ArticlePart from './ArticleWrite';

Selection = () => {
    const [value, SetValue] = React.useState('')
    const changeValue = (ans) => {
        SetValue(ans.target.value);
    }
    return (
        <>
            <h1 className='Heading'>New Post</h1>
            <div className='container'>
                <form action="/">
                    <span>Select Post Type:</span>
                    <div className='body'>
                        <div>
                            <input type="checkbox" name="check" id="QuestionsId" value="questions"
                                checked={value === 'questions'}
                                onChange={changeValue} />
                            <label htmlFor="questions">Question</label>
                        </div>
                        <div>
                            <input type="checkbox" name="check" id="articleId" value="articles"
                                checked={value === 'articles'}
                                onChange={changeValue} />
                            <label htmlFor="questions">Article</label>
                        </div>
                    </div>
                </form>
            </div>
            {value === 'questions' ? <QuestionPart /> : value === 'articles' ? <ArticlePart /> : null}
        </>
    )
};
export default Selection;