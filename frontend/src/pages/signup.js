import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup = () => {
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup, isLoading, error } = useSignup();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(userId, name, email, password);

        await signup(userId, name, email, password);
    };

    return (
        <>
            <form className="signup" onSubmit={handleSubmit}>
                <h3>Sign Up</h3>
                <label htmlFor="userId">User ID</label>
                <input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button disabled={isLoading}>Sign Up</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    );
};

export default Signup;