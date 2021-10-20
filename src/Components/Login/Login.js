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
            <form onSubmit={logInUsingEmail}>
                <h1 className="m-4">Please Login</h1>
                <div className="row mb-3 w-100">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input onBlur={emailChange} type="email" className="form-control" id="inputEmail3" />
                    </div>
                </div>
                <div className="row mb-3 w-100">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input onBlur={passwordChange} type="password" className="form-control" id="inputPassword3" />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button><br /><br />
                <div>-----------------------------------</div>
                <button className="btn btn-danger px-5" onClick={handleGoogleLogin}> Google</button>
            </form>
        </div>
    );
};

export default Login;