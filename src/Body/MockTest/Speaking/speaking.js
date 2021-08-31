import { Component } from "react";
import './speaking.css'

class Speaking extends Component {
    render() {
        return (

            <div className='speaking'>
                <div className='heading'>
                    <h15>Speaking Test</h15>
                </div>
                <div className='speaking-container'>
                    <div className='image'>
                        <img src="https://images.pexels.com/photos/2422280/pexels-photo-2422280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
                    <h2  className='speaking-title'>Top 5 Speaking Tips</h2>
                    <p>
                        <br></br>
                        <br></br>
                        <h3 className='speaking-content'>1) Speak some English every day.</h3>
                        <br></br>
                        This is something that all my Band 7+ students have in common.
                        <br></br>
                        It is better to practice a little bit every day and improve your skills gradually
                        than to speak your native language all week until you have IELTS class. You’ll find more advice for IELTS Speaking practice here.
                        <br></br><br></br>

                        <h3 className='speaking-content'>2)Ask the examiner questions if you don’t understand.</h3>
                        <br></br>
                        Your IELTS Speaking test is meant to be like a normal conversation between 2 people.
                        Therefore, if you don’t understand a word you can ask the examiner to explain what it means.
                        Just say ‘I’m sorry, could you explain what X means?’
                        <br></br>

                        You can also ask them to repeat the question. However, you can’t ask the examiner to explain the whole sentence.

                        <br></br><br></br>

                        <h3 className='speaking-content'>3)Do a 24-hour English warm up.</h3>
                        <br></br>
                        It takes most IELTS students 10-15 minutes to ‘warm-up’ and perform to the best of their ability on test day. Just like
                        an athlete needs to warm up before a sporting event, you also need to warm up before your IELTS exam.
                        <br></br>

                        Therefore, you should speak, write, read and listen to English for 24 hours before your IELTS Speaking test.
                        Your family and friends might think you are crazy, but it will make a huge difference to your score!
                        <br></br><br></br>

                        <h3 className='speaking-content'>4) Familiarise yourself with the different question types.</h3>
                        <br></br>
                        Doing so will mean you’ll know exactly what to expect on test day and how to react to the question types you’re given.
                        To help you with this, you should use genuine practice IELTS past papers.
                        <br></br><br></br>

                        <h3 className='speaking-content'>5) Give full answers.</h3>
                        <br></br>
                        ‘Yes’ and ‘No’ are NOT satisfactory answers in your IELTS Speaking test – you need to show the examiner how good your English is.
                        <br></br>
                        If you give very short answers, there is no way the examiner can know how good you are. Therefore, you should try to extend your
                        answers with explanations and examples.
                        <br></br><br></br><br></br>
                    </p>

                    <h2 className='speaking-title'>Take test by clicking below sample questions:</h2>

                    <a href="https://www.eltexampreparation.com/sites/default/files/Speaking%20task.pdf" class="button">Sepaking Test Guide</a>
                    <a href="https://www.lancaster.ac.uk/fass/projects/examreform/Media/InterviewQ.pdf" class="button">Speaking Practice Test 1</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1581597852Speaking%201.pdf" class="button">Speaking Practice Test 2</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1613024334IELTS%20Speaking%20Practice%20Paper%208.pdf" class="button">Speaking Practice Test 3</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1619788340IELTS%20Speaking%20Practice%20Paper%2010.pdf" class="button">Speaking Practice Test 4</a>
                </div>

            </div>
        )
    }
}
export default Speaking