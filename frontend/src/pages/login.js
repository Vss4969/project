import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const { login, isLoading, error } = useLogin();

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(userId, password);

        await login(userId, password);
    };

    return (
        <>
            <form className="login" onSubmit={handleSubmit}>
                <h3>Login</h3>
                <label htmlFor="userId">User ID</label>
                <input
                    type="text"
                    id="userId"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                />
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="buttons" disabled={isLoading}>Login</button>
                {error && <div className="error">{error}</div>}
            </form>
        </>
    );
};

export default Login;