import React from 'react';
import Question from './question';
import Option from './option';
import './butt.css'



const QuestionContainer = (props) => {
    let questionObj = null;
    const setAnswer = (option)=> {
        const data = {
            questionId: props.questionIndex,
            answer: option
        }
        props.setResultAnswer(data)
    }
    if(props.questionIndex !== -1){
        const { question, options } = props.questionList[props.questionIndex];
        const selectedAnswer = props.answersInfo[props.questionIndex]
        questionObj = (
            <div className='quest'>
                
                <Question question={question}/>
                
                { options.map( option => {
                    return(
                    <button className='butt'>
                         <Option key={option} selectedAnswer={selectedAnswer} option={option} setAnswer={setAnswer}/>
                         </button>
                    )
                }) }
                
            </div>
        );
    }
    return(
        <div>
            {questionObj}
        </div>
    );

}

export default QuestionContainer;