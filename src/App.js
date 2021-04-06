import React, {useState} from 'react';
import data from "./data";
import SingleQuestion from "./Question";

function App(props) {
    const [questions, setQuestions] = useState(data);
    return (
        <main>
            <div className="container">
                <h3>questions and answers about login</h3>
                <section className="info">
                    {questions.map((item, index) => (
                        <SingleQuestion key={item.id} {...item}/>
                    ))}
                </section>
            </div>
        </main>
    );
}

export default App;