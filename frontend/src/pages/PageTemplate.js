import { useEffect, useState } from 'react';
import { getProblemDetails, SubmitCode, RunCode} from '../service/api';
import { useAuthContext } from '../hooks/useAuthContext'; // Assuming this is your auth context
import { useParams, useNavigate } from 'react-router-dom';

export function PageTemplate() {
    const { problemId } = useParams();
    const [problem, setProblem] = useState({});
    const navigate = useNavigate();

    const [code, setCode] = useState('');
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [verdict, setVerdict] = useState('');

    const { user } = useAuthContext();

    useEffect(() => {
        async function fetchProblemDetails() {
            try {
                const response = await getProblemDetails(problemId);
                setProblem(response);
                console.log(response);
            } catch (error) {
                setProblem(null); // Set problem to null in case of error
            }
        }

        if (Number.isInteger(Number(problemId))) {
            fetchProblemDetails();
        } else {
            navigate('/page_not_found');
        }
    }, [problemId, navigate]);

    useEffect(() => {
        if (problem === null) {
            navigate('/page_not_found');
        }
    }, [problem, navigate]);

    if (problem === null) {
        navigate('/page_not_found');
        return null; // or any placeholder until redirection occurs
      }

    const handleSubmit = async () => {
        const payload = { language: "cpp", code, pid: problemId };
        try {
            const response = await SubmitCode(payload, user); // Pass the user object as an argument
            console.log(response);
            setVerdict(response.output);
        } catch (error) {
            console.log("Error in submitting code", error.message);
        }
    }

    const handleRun = async () => {
        const payload = { language: "cpp", code, input };
        console.log(payload)
        try {
            const response = await RunCode(payload, user); // Pass the user object as an argument
            setOutput(response.output);
        } catch (error) {
            console.log("Error in running code", error.message);
        }
    }

    return (
        <>
            <div className="problem-page-wrapper">
                <div className="problem-page-container">
                    <div className="problem-statement-wrapper">
                        <div className="problem-statement">
                            <div className="problem-statement-title">
                                {problem.problem_id}. {problem.title}
                            </div>
                            <div className="problem-statement-description">
                                <p>{problem.statement?.description ?? 'No description available'}</p>
                            </div>
                            <h4>Constraints:</h4>
                            <div className="problem-statement-constraint">
                                <p>{problem.statement?.constraints ?? 'No constraints available'}</p>
                            </div>
                        </div>
                    </div>
                    <div className="problem-simulation-container">
                        <div className="code-box-wrapper">
                            <div className="code-box">
                                <h4>Code</h4>
                                <textarea className="code-box-textarea" placeholder="Write your code here..." 
                                value={code} 
                                onChange={(e) => {setCode(e.target.value);}}
                                />
                            </div>
                        </div>
                        <div className="code-simulation-container">
                            <div className="boxes-wrapper">
                                <div className="input-box-wrapper">
                                    <div className="input-box">
                                        <h5>Input</h5>
                                        <textarea className="code-box-textarea" placeholder="Write your input here..." 
                                        value={input}
                                        onChange={(e) => {setInput(e.target.value);}}
                                        />
                                    </div>
                                </div>
                                <div className="output-box-wrapper">
                                    <div className="output-box">
                                        <h5>Output</h5>
                                        <div className="output-box-textarea" placeholder="Wait for the output..." >
                                        <pre>
                                            {output}
                                        </pre>
                                        </div>
                                    </div>
                                </div>
                                <div className="verdict-box-wrapper">
                                    <div className="verdict-box">
                                        <h5>Verdict</h5>
                                        <div className="output-box-textarea" placeholder="Wait for the verdict...">
                                            <pre>
                                                {verdict}
                                            </pre>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="buttons-wrapper">
                                <button onClick={handleRun} className="run-button">Run</button>
                                <button onClick={handleSubmit} className="submit-button">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}