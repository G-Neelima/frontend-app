import { Link } from "react-router-dom";
function Login(){
    return (
    <div>
        <h1>Login Page</h1>
        <p><input type="text" placeholder="Email" /></p>
        <p><input type="password" placeholder="Password" /></p>
        <p><button>Login</button></p>
        <p><Link to="/register">New User register here</Link></p>
    </div>
    );
}
export default Login