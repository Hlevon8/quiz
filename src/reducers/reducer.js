import {combineReducers} from 'redux';
import questionsReducer from './questions';
import answerInfoReducer from './answersInfo';

 const rootReducer = combineReducers({
    questions: questionsReducer,
    answers: answerInfoReducer
})


export default rootReducer;