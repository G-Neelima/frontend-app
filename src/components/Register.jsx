import { Link } from "react-router-dom";
function Register(){
    return (
    <div>
        <h1>Registration Page</h1>
        <p><input type="text" placeholder="Name" /></p>
        <p><input type="text" placeholder="Email" /></p>
        <p><input type="password" placeholder="Password" /></p>
        <p><button>Register</button></p>
        <p><Link to="/login">Already registered login here</Link></p>
    </div>
    );
}
export default Register