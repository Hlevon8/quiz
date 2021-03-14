import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../actions/index';
import QuestionContainer from '../../components/questionContainer';
import Button from '../../components/button';
import Score from '../../components/score';
import './questionList.css';

const questionList=
    [
        {
            id:1,
            question:'Որ թիմն է աշխարհի ֆուտբոլի առաջնության առաջին հաղթողը',
            options:['Ուրուգվայ','Անգլիա','Իտալիա'],
            answer:'Ուրուգվայ'
        },
        {
            id:2,
            question:'Որ թվականի աշխարհի առաջնությունուն եզրափակիչ չի կայացել',
            options:[1958,1934,1950],
            answer:1950
        },
        {
            id:3,
            question:'Որ մարզիչն է տոտալ ֆուտբոլի հիմնադիրը',
            options:['Էլենիո Էրրերա','Մեթ Բազբի','Րինուս Միխելս'],
            answer:'Րինուս Միխելս'
        },
        {
            id:4,
            question:'Որ ֆուտբոլիստն է ամենից շատ հաղթել Չեմպիոմմերի լիգայի գավաթում',
            options:['Պաոլո Մալդինի','Ֆրանսիսկո Խենտո','Քրիստիանո Ռոնալդո'],
            answer:'Ֆրանսիսկո Խենտո'
        },
        {
            id:5,
            question:'Ով է Ոսկե գնդակի առաջին հաղթողը',
            options:['Գուննար Նորդալ','Ստենլի Մեթյուզ','Ալֆրեդո դի Ստեֆանո'],
            answer:'Ստենլի Մեթյուզ'
        },
        {
            id:6,
            question:'Ով է միակ իսպանացի Ոսկե գնդակի Հաղթողը',
            options:['Լուիս Սուարես','Ռաուլ','Բուտրագենիո'],
            answer:'Լուիս Սուարես'
        },
        {
            id:7,
            question:'Որ թիմն է առաջին արքայական թիմը իսպանիայում',
            options:['Դեպորտիվո','Ռեալ Մադրիդ','Բետիս'],
            answer:'Դեպորտիվո'
        },
        {
            id:8,
            question:'Նույն թիմը ամենից երկար ղեկավարած մարզիչմ է',
            options:['Ալեքս Ֆեռգյուսոն','Գի Ռու','Արսեն Վենգեր'],
            answer:'Գի Ռու'
        },
        {
            id:9,
            question:'Ով է աշխարհի առաջնությունների լավագույն ռմբարկուն',
            options:['Ռոնալդո','Միրոսլավ Քլոզե','Գերդ Մյուլլեր'],
            answer:'Միրոսլավ Քլոզե'
        },
        {
            id:10,
            question:'Որն է իսպանական կլասիկոներում գռանցված խոշորագույն հաշիվը',
            options:['6-1','5-0','15-1'],
            answer:'15-1'
        },
        {
            id:11,
            question:'Ում ամունն է կրել աշխարհի գավաթը մինչև 1970 թվականը',
            options:['Ժյուլ Րիմե','Պելե','Ռոբեր Գերեն'],
            answer:'Ժյուլ Րիմե'
        },
        {
            id:12,
            question:'Որ բրիտանական թիմն է առաջինը հաղթել Չեմպիոնների լիգայում',
            options:['Լիվերպուլ','Սելթիկ','Վեստ Հեմ'],
            answer:'Սելթիկ'
        }
    ];
    class Quiz extends Component{
        state = {
            isSubmit: false
        }
    
        componentDidMount(){
            this.props.onNextQuestion();
        }
    
        onPrevButtonHandler = () => {
            this.props.onPrevQuestion();
        }
    
        onNextButtonHandler = () => {
            this.props.onNextQuestion();
        }
    
        onSubmitQuizHandler = () => {
            this.setState({isSubmit: true});
        }
    
        getScore = () => {
            let score = 0;
            questionList.forEach( (questionObj, index) => {
                if(questionObj.answer === this.props.answersInfo[index]){
                    score++;
                }
            });
            return score;
        }
    
        render(){
            let nextButton = <Button className='next_button'  clicked={this.onNextButtonHandler}>NEXT</Button>
            if(this.props.currentIndex === 11){
                nextButton = <Button clicked={this.onSubmitQuizHandler}>SUBMIT</Button>            
            }
    
            let assessmentObj = (
                <div className='questionContainer' >
                    <QuestionContainer 
                        questionList = {questionList}
                        answersInfo = {this.props.answersInfo}
                        setResultAnswer={this.props.setResultAnswer}
                        questionIndex={this.props.currentIndex}
                    /> 
                    <div >
                        <div >
                            { this.props.currentIndex > 0 ? <Button  clicked={this.onPrevButtonHandler}>PREV</Button> : null }
                        </div>
                        <div className='next_button'>
                            { nextButton }
                        </div>  
                    </div>
                </div>
            );
    
            if(this.state.isSubmit){
                const score = this.getScore();
                assessmentObj = <Score score={score}/>
            }
    
            return(
                <div>
                    {assessmentObj}
                </div>
            );
        }
    }
    
    const mapStateToProps = state => {
        return{
            currentIndex: state.questions.selectedQuestion,
            answersInfo: state.answers.answersInfo
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return{
            onNextQuestion: () => dispatch(actionCreators.nextQuestion()),
            onPrevQuestion: () => dispatch(actionCreators.prevQuestion()),
            setResultAnswer: (data) => dispatch(actionCreators.setAnswer(data))
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
