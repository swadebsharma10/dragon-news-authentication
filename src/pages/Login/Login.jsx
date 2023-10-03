import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Header from "../../SharedPages/Header/Header";


const Login = () => {
  const {signInUser} = useContext(AuthContext);
  
  const location = useLocation();
  const navigate = useNavigate();

  console.log('location in login', location);

  const handleLogin =(event) =>{
      event.preventDefault();
      const form = event.target;

      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      // sign in user
      signInUser(email, password)
      .then(res =>{
        const user = res.user;
        console.log('logged user', user);
        alert('User logged successfully');

        // navigate after login user
        navigate(location?.state ? location.state : '/')



      })
      .catch(error =>{
        console.log(error.message)
      })

  }


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
                <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered" required />
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