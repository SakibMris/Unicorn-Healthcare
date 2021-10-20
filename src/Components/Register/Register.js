import useFirebase from '../../Firebase/useFirebase';

const Register = () => {
    const { handleRegistration, emailChange, passwordChange, handleGoogleLogin } = useFirebase()
    return (
        <div className="m-5">
            <form onSubmit={handleRegistration}>
                <h1 className="m-5">Please Register</h1>
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
                <button type="submit" className="btn btn-primary">Register</button><br /><br />
                <div>-----------------------------------</div>
                <button className="btn btn-danger px-5" onClick={handleGoogleLogin}> Google</button>
            </form>
        </div>
    );
};

export default Register;