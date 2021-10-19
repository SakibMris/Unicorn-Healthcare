import useFirebase from '../../Firebase/useFirebase';

const Login = () => {
    const { signUsingGoogle } = useFirebase()
    return (
        <div className="m-5">
            <h1 className="m-4">Please Login</h1>
            <input type="email" name="email" placeholder="Email" id="1" /><br /><br />
            <input type="password" name="password" placeholder="Password" id="2" />
            <br /><br /><br />
            <button type="button" class="btn btn-success me-4">Success</button>
            <button type="button" class="btn btn-primary">Reset</button>
            <br /><br />
            <button className="btn btn-danger px-5" onClick={signUsingGoogle}> Google</button>
        </div>
    );
};

export default Login;