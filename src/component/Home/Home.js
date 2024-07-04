import React, { useState } from 'react';
import Question from '../Quize/Question';
import quizData from '../../staticData/data';

function Home() {
    const [questions, setQuestions] = useState(quizData);

    return (
        <main>
            <div className='container'>
                <h3>Techflix al <br /> quize app</h3>
                <section>
                    {questions.map((question) => {
                        return <Question key={question.id} {...question} />;
                    })}
                </section>
            </div>
        </main>
    );
}

export default Home;
