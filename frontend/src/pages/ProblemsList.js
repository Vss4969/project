import { Link } from "react-router-dom";
import './problem.css';

export function ProblemList() {
    return (
        <>
          <div className="main-wrapper">
        <div className="main-container">
          <h1>Problems</h1>
          <div className="problems-list">
            <div className="problem-container">
              <div className="problem-id">
                1.
              </div>
              <Link to="/P1">
              <div className="problem-title">
                Hello World &#128512;
              </div>
              </Link>
            </div>
            <div className="problem-container">
              <div className="problem-id">
                2.
              </div>
              <Link to="/P2">
              <div className="problem-title">
                Two Sum
              </div>
              </Link>
            </div>
            <div className="problem-container">
              <div className="problem-id">
                3.
              </div>
              <Link to="/P3">
              <div className="problem-title">
                Palindrome Number
              </div>
              </Link>
            </div>
            <div className="problem-container">
              <div className="problem-id">
                4.
              </div>
              <Link to="/P4">
              <div className="problem-title">
                Add Two Numbers
              </div>
              </Link>
            </div>
            <div className="problem-container">
              <div className="problem-id">
                5.
              </div>
              <Link to="/P5">
              <div className="problem-title">
                Merge k Sorted Lists
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}