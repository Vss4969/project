export function P1() {
    return (
        <>
            <div className="problem-page-wrapper">
                <div className="problem-page-container">
                    <div className="problem-statement-wrapper">
                        <div className="problem-statement">
                            <div className="problem-statement-title">
                                Problem 1: Hello World
                            </div>
                            <div className="problem-statement-description">
                                <p>Write a program that prints "Hello World" to the console.</p>
                            </div>
                        </div>
                    </div>
                    <div className="problem-simulation-container">
                        <div className="code-box-wrapper">
                            <div className="code-box">
                                <h4>Code</h4>
                                <textarea className="code-box-textarea" placeholder="Write your code here..."/>
                            </div>
                        </div>
                        <div className="code-simulation-container">
                            <div className="boxes-wrapper">
                                <div className="input-box-wrapper">
                                    <div className="input-box">
                                        <h5>Input</h5>
                                        <textarea className="code-box-textarea" placeholder="Write your input here..."/>
                                    </div>
                                </div>
                                <div className="output-box-wrapper">
                                    <div className="output-box">
                                        <h5>Output</h5>
                                        <textarea className="code-box-textarea" placeholder="Wait for the output..."/>
                                    </div>
                                </div>
                                <div className="verdict-box-wrapper">
                                    <div className="verdict-box">
                                        <h5>Verdict</h5>
                                        <textarea className="code-box-textarea" placeholder="Wait for the verdict..."/>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="buttons-wrapper">
                                    <button className="run-button">Run</button>
                                    <button className="submit-button">Submit</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}