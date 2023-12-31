import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Register = () => {

    const { createUser, googleLogin } = useContext(AuthContext)

    const handleRegister = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        console.log(name, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => console.log(error.message))
    }



    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col w-96">
                <div className="text-center ">
                    <h1 className="text-5xl font-bold">Register Now!</h1>

                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text"
                                name="name"
                                placeholder="input your name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"
                                name="email"
                                placeholder="input email" className="input input-bordered" required />

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center mb-4">Already have a account? Go to <Link to="/login"><span className="text-blue-700 font-semibold underline">Login</span></Link></p>
                    <button onClick={googleLogin}>Google</button>
                </div>
            </div>
        </div>
    );
};

export default Register;