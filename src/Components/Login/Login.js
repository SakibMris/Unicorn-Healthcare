import { useHistory, useLocation } from "react-router";
import useAuth from "../../Context/useAuth";

const Login = () => {
    const { signUsingGoogle, logInUsingEmail, emailChange, passwordChange } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from || "/home"
    const handleGoogleLogin = () => {
        signUsingGoogle()
            .then(result => {
                history.push(redirect_url)
            })
    }
    return (
        <div className="m-5">
            <h1 className="m-4">Please Login</h1>
            <input onBlur={emailChange} className="w-25" type="email" name="email" placeholder="Email" id="1" /><br /><br />
            <input onBlur={passwordChange} className="w-25" type="password" name="password" placeholder="Password" id="2" />
            <br /><br /><br />
            <button onClick={logInUsingEmail} type="button" class="btn btn-success me-4">Login</button>
            <button type="button" class="btn btn-primary">Reset</button>
            <br /><br />
            <button className="btn btn-danger px-5" onClick={handleGoogleLogin}> Google</button>
        </div>
    );
};

export default Login;