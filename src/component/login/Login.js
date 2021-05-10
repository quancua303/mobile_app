// JavaScript source code
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { setUserSession } from './../Common';

const Login = (props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const Login = (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const data = {
            username: username,
            password: password
        }
        axios.post("http://localhost:4000/users/signin", data).then(res => {
            setLoading(false);
            setUserSession(res.data.token, res.data.user)
            console.log(res.data);
            if (res.data.user.isAdmin === true) {
                history.push('/admin');
            } else history.push('/');
        }).catch(err => {
            setLoading(false);
            if (err.response.status === 401 || err.response.status === 400) {
                setError(err.response.data.message);
            } else {
                setError("Something went wrong");
            }
            console.log('err', err);
        })
    }


    return (
        <>
            <div className="login">
                <div className="h-screen">
                    <div className="container">
                        <div className="d-flex justify-content-center h-100">
                            <div className="card">
                                <div className="card-header">
                                    <h3>Sign In</h3>
                                    {error && <div className="text-red">{error}</div>}
                                </div>
                                <div className="card-body">
                                    <form onSubmit={Login}>
                                        
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user" /></span>
                                            </div>
                                            <input type="text" className="form-control" value={username} placeholder="username" onChange={e => setUsername(e.target.value)} />
                                        </div>
                                        <div className="input-group form-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-key" /></span>
                                            </div>
                                            <input type="password" className="form-control" value={password} placeholder="password" onChange={e => setPassword(e.target.value)} />
                                        </div>
                                        <div className="form-group">
                                            <input type="submit" value={loading ? "Loading ..." : "Login"} disabled={loading} className="btn float-right login_btn" value="Login" />
                                        </div>
                                    </form>
                                </div>
                                <div className="card-footer">
                                    <div className="d-flex justify-content-center links">
                                        Don't have an account?<Link to='/signup'>Sign Up</Link>
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <a href="#">Forgot your password?</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}
export default Login