import { Link } from "react-router-dom";
import Header from "../../SharedPages/Header/Header";


const Login = () => {
    return (
        <section>
        <Header></Header>
            <div>
            <div className="hero min-h-[80vh] bg-base-200 rounded">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold">Please Login now!</h1>
                
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" required />
                    <label className="label">
                      <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                  </div>
                  <div className="form-control mt-6">
                    <button type="submit" className="btn btn-primary">Login</button>
                  </div>
                  <p>New to this site ? <Link className="text-primary font-bold underline" to='/register'>Register</Link></p>
                </form>
                
              </div>
            </div>
          </div>
            </div>
        </section>
    );
};

export default Login;