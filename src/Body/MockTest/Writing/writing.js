import { Component } from "react";
import './writing.css'

class Writing extends Component {
    render() {
        return (

            <div className='writing'>
                <div className='heading'>
                    <h15>Writing Test</h15>
                </div>
                <div className='writing-container'>
                    <div className='image'>
                        <img src="https://images.pexels.com/photos/4238478/pexels-photo-4238478.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            width="900" height="600" ></img>


                    </div>

                    <div className='paragraph'>
                        <p>You will be allowed 1 hour to complete two tasks in the IELTS Academic Writing test.

                            The two parts of this practice Writing test are presented on two separate web pages. Make sure you move swiftly
                            from one page to the next so that your practice is as realistic as possible. If you prefer to work offline, download
                            the test paper.
                            the actual test you will do your writing in an answer booklet.
                            <br></br>
                            <br></br>
                            The total time allowed for the IELTS Academic Writing test is 60 minutes. Time yourself and allow just one hour to complete both parts of the test.
                            Task 2 contributes twice as much as task 1 to the Writing score.
                            <br></br><br></br>
                            Listen to the instructions for each section of the test carefully. Answer all of the questions.There are 40 questions
                            altogether. Each question carries one mark.
                            <br></br><br></br>
                            You should spend about 20 minutes on task 1
                            <br></br>
                            -write in a formal style
                            <br></br>
                            -write at least 150 words
                            <br></br><br></br>
                            You should spend about 40 minutes on task 2
                            <br></br>
                            -write in a formal style
                            <br></br>
                            -write at least 250 words
                        </p>
                    </div>
                </div>

                <div className='paragraph2'>
                    <br></br>
                    <h2 className='writing-title'>Academic Writing Task Strategy</h2>
                    <p>
                        <br></br>
                        <br></br>
                        <h3 className='writing-content'>1) Write an introduction</h3>
                        <br></br>
                        The introduction should tell the examiner what the rest of the essay is about and also answer the question directly. This tells
                        the examiner that you know what you are doing straight away and helps you write your main body paragraphs.
                        <br></br><br></br>

                        <h3 className='writing-content'>2)Understand the question.</h3>
                        <br></br>
                        You must understand the question before you attempt to answer it. This way, you’ll know exactly what the examiner is
                        looking for. One of the biggest mistakes students make is not answering the question fully, which stops them from getting
                        a score higher than a Band 5.
                        <br></br>
                        Paraphrasing is one of the most essential IELTS skills, not just in Writing Task 1, but in all parts
                        of the IELTS test. You should paraphrase the question in every essay and I recommend doing this in the
                        very first sentence to help boost your vocabulary score.
                        <br></br><br></br>

                        <h3 className='writing-content'>3) Support the main features.</h3>
                        <br></br>
                        In a new paragraph, support the key features with the data in the information given to you.
                        <br></br><br></br>

                        <h3 className='writing-content'>4) Familiarise yourself with the different question types.</h3>
                        <br></br>
                        Doing so will mean you’ll know exactly what to expect on test day and how to react to the question types you’re given.
                        To help you with this, you should use genuine practice IELTS past papers.
                        <br></br><br></br>

                        <h3 className='writing-content'>5) Plan your answer.</h3>
                        <br></br>
                        The students who get the highest marks in Writing Task 2 always plan their answers for up to 10 minutes. Planning helps you
                        organise your ideas and structure your essay before you write it, saving you time and helping you produce a clear and coherent essay.
                        <br></br><br></br><br></br>
                    </p>

                    <h2 className='writing-title'>Take test by clicking below sample questions:</h2>

                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1592212046IELTS%20ACADEMIC%20WRITING%20TASK%201%20P2.pdf" class="button">Writing Practice Test 1</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1592212033IELTS%20ACADEMIC%20WRITING%20TASK%201%20P1.pdf" class="button">Writing Practice Test 2</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1615525492IELTS%20Writing%20Task%202%20Practice%20Paper%209.pdf" class="button">Writing Practice Test 3</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1602767230IELTS%20Writing%20Task%202%20Questions%20Sample%205.pdf" class="button">Writing Practice Test 4</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1601400692IELTS%20Writing%20Task%202%20-%20Children%20&%20countryside.pdf" class="button">Writing Practice Test 5</a>
                </div>

            </div>
        )
    }
}
export default Writing
