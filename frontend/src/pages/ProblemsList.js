import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getList } from '../service/api';
import './problem.css';

export function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await getList({});
      setProblems(response);
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="main-wrapper">
        <div className="main-container">
          <h1>Problems</h1>
          <div className="problems-list">
            {problems.map((problem, index) => (
              <div className="problem-container" key={index}>
                <div className="problem-id">{index + 1}.</div>
                <Link to={`/P${index + 1}`}>
                  <div className="problem-title">{problem.title}</div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
