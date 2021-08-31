import { Component } from "react";
import './listening.css'

class Listening extends Component {
    render() {
        return (

            <div className='listening'>
                <div className='heading'>
                    <h15>Listening Test</h15>
                </div>
                <div className='listining-container'>
                    <div className='image'>
                        <img src="https://images.pexels.com/photos/3756768/pexels-photo-3756768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                            width="900" height="600" ></img>


                    </div>

                    <div className='paragraph'>
                        <p>The IELTS Listening test will take about 30 minutes, and you will have an extra 10 minutes to transfer
                            your answers to the answer sheet.

                            The four parts of this practice Listening test are presented over four separate web pages. Make sure you move swiftly
                            from one page to the next so that your practice is as realistic as possible.
                            <br></br>
                            <br></br>
                            Download the question paper and blank answer sheet before you start, and write your answers on the question paper while
                            you are listening. Use a pencil.
                            <br></br><br></br>
                            Listen to the instructions for each section of the test carefully. Answer all of the questions.There are 40 questions
                            altogether. Each question carries one mark.
                            <br></br><br></br>
                            For each part of the test, there will be time for you to look through the questions and time for you to check your answers.
                            When you have completed all four parts of the Listening test you will have ten minutes to copy your answers on to a separate answer sheet.
                            <br></br><br></br>
                            We can make special arrangements for test takers with disabilities. If you require a modified version of the test, for example,
                            in Braille, contact your test centre three months in advance to discuss your requirements.
                        </p>
                    </div>
                </div>

                <div className='paragraph2'>
                    <br></br>
                    <h2 className='listening-title'>Top 5 IELTS Listening Tips </h2>
                    <p>
                        <br></br>
                        <br></br>
                        <h3 className='listening-content'>1) Familiarise yourself with a range of accents.</h3>
                        <br></br>
                        The IELTS Listening test will feature a range of accents to reflect the international nature of English. Therefore,
                        you should get used to listening to accents from a range of English-speaking countries.
                        Instead of just listening to the BBC, you could try smaller regional radio stations or actively watching TV shows from
                        different English-speaking countries. A quick search on Google is all you need to find these.
                        <br></br><br></br>
                        <h3 className='listening-content'>2) Don’t lose your concentration.</h3>
                        <br></br>
                        It can be difficult to stay focused during your IELTS Listening test, but it’s also extremely important if
                        you want to score a Band 7 or above.

                        To improve your concentration you need to practice active listening.
                        This involves setting yourself small tasks when you are practising and actually doing
                        something when you are listening, just like you will be in your test.
                        <br></br><br></br>
                        <h3 className='listening-content'>3) Follow the instructions carefully.</h3>
                        <br></br>
                        This especially applies when it comes to the word limit. If the question states ‘No more than three words’
                        then you can’t write any more than this. If your answer is four words it will be incorrect.
                        <br></br><br></br>
                        <h3 className='listening-content'>4) Familiarise yourself with the different question types.</h3>
                        <br></br>
                        Doing so will mean you’ll know exactly what to expect on test day and how to react to the question types you’re given.
                        To help you with this, you should use genuine practice IELTS past papers.
                        <br></br><br></br>
                        <h3 className='listening-content'>5) Practice listening to things only once.</h3>
                        <br></br>
                        Lots of teachers allow their students to listen to a recording 3 or 4 times. However, I would strongly recommend practising
                        the exam under exam conditions and that means listening just once.
                        <br></br><br></br><br></br>
                    </p>
                    <h2 className='listening-title'>Take test by clicking below sample questions:</h2>

                    {/* <iframe src="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1628000894IELTS%20LISTENING%20PRACTICE%20PAPER%2042.pdf" width="100%" height="500px">
    </iframe> */}

                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1628000894IELTS%20LISTENING%20PRACTICE%20PAPER%2042.pdf" class="button">Listening Practice Test 1</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1615453119IELTS%20Listening%20Practice%20Paper%2011.pdf" class="button">Listening Practice Test 2</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1615453119IELTS%20Listening%20Practice%20Paper%2010.pdf" class="button">Listening Practice Test 3</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1628000894IELTS%20LISTENING%20PRACTICE%20PAPER%2042.pdf" class="button">Listening Practice Test 4</a>
                    <a href="https://images.static-collegedunia.com/public/college_data/images/entrance/sample_paper/1604466900IELTS%20listening%20practice%207-IELTS%20Material.pdf" class="button">Listening Practice Test 5</a>
                </div>

            </div>
        )
    }
}
export default Listening