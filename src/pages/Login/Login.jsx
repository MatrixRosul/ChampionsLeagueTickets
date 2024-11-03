import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.css';
import {loginUser} from "../../api/api";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError('Заповніть усі поля');
            return;
        }

        setError('');


        const credentials = {email, password};

        try {
            const result = await loginUser(credentials);
            console.log("Login result:", result);

            if (!result) {
                setError("Невірний логін або пароль");
            } else {
                console.log('Логін успішний:', result);
                navigate('/');
            }
        } catch (error) {
            setError('Не вдалося увійти. Спробуйте ще раз.');
            console.error("Login error:", error);
        }


    };

    return (
        <div className="login-container">
            <h2>Login</h2>
           {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={handlePasswordChange}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <p>
                Немає облікового запису? <Link to="/register">Зареєструватися</Link>
            </p>
        </div>
    );
};

export default Login;
