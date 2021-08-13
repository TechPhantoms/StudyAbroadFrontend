import axios from "axios";
import { Component } from "react";
import { Helmet } from 'react-helmet';
import './test.css'

class ReadingTest extends Component {
    state = {
        ReadingTest: [],
        config: {
            headers: { authorization: `Bearer ${localStorage.getItem('token')}` }
        }
    }

    constructor (props) {
        super(props);
        this.state = {
            // questions : [],
            currentQuestion : {},
            nextQuestion : {},
            previousQuestion: {},
            answer : '',
            numberofQuestions : 0,
            numberofAnsweredQuestions : 0,
            currentQuestionIndex : 0,
            score: 0,
            correntAnswers : 0,
            wrongAnswers : 0,
            hints : 5,
            fiftyFifty: 2,
            useFiftyFifty : false,
            time : {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:90/test/showall')
            .then((response) => {
                console.log(response)
                this.setState({
                    ReadingTest: response.data.data
                })
            })
            .catch((err) => {
                console.log(err.response)
            })
    }

    displayQuestions =(questions = this.state.ReadingTest, currentQuestion, nextQuestion, previousQuestion) =>{
        let { currentQuestionIndex } = this.state;
        if (!isEmpty(this.state.questions)){
            questions = this.state.questions;
            currentQuestion = questions[currentQuestionIndex];
            nextQuestion = questions[currentQuestionIndex + 1];
            previousQuestion = questions[currentQuestionIndex - 1];
            const answer = currentQuestion.answer;
            this.setState({
                currentQuestion,
                nextQuestion,
                previousQuestion,
                answer
            })
        }
    }; 
    render() {
        return (
            <>
                <Helmet><title>Reading MockTest</title></Helmet>
                <div className='readingTest-section'>{this.state.ReadingTest.map((readingtest) => {
                    return (
                        <>
                        <p className='topic'>Read this passage and answer these MCQ questions</p>
                            <div className='reading-para'>
                                <h1>{readingtest.readingTitle}</h1>
                                <p>{readingtest.readingPara1}</p>
                                <p>{readingtest.readingPara2}</p>
                                <p>{readingtest.readingPara3}</p>
                                <p>{readingtest.readingPara4}</p>
                                <p>{readingtest.readingPara5}</p>
                            </div>
                            <div className='questions'>
                                <h2 className='test-mode'>Test Mode</h2>
                                <div className='lifeline-container'>
                                    <p>
                                        <span className='mdi mdi-set-center mdi-24px lifeline-icon'><span className="lifeline">2</span></span>
                                    </p>
                                    <p>
                                        <span className='mdi mdi-lightbulb-on-outline mdi-24px lifeline-icon'><span className="lifeline">5</span></span>
                                    </p>
                                    
                                </div>
                                <div className="timer-container">
                                    <p>
                                        <span className="left">1 of 10</span>
                                 <span className='right'>2:15<span className='mdi mdi-clock-outline mdi-24px'></span></span>
                                    </p>
                                </div>
                                <h5 className='question'>{readingtest.rquestion}</h5>
                                <div className='options-container'>
                                    <p className='option'>{readingtest.roption1}</p>
                                    <p className='option'>{readingtest.roption2}</p>
                                </div>
                                <div className='options-container'>
                                    <p className='option'>{readingtest.roption3}</p>
                                    <p className='option'>{readingtest.roption4}</p>
                                </div>
                                <div className='button-container'>
                                    <button className='question-btn'>Previous</button>
                                    <button className='question-btn'>Next</button>
                                    <button className='question-btn'>Quit</button>
                                </div>
                            </div>
                        </>
                    )
                })}
                </div>
            </>
            // <h1>Hello Test</h1>
        )
    }
}

export default ReadingTest