import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Header from "../../SharedPages/Header/Header";


const Register = () => {
  const {createUser} = useContext(AuthContext)

  const handleRegister =(event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo,email, password);
    // create user
    createUser(email, password)
    .then(result =>{
      const user = result.user;
      alert('User created successfully')
      console.log('create user', user);
    })
    .catch(error => {
      console.log(error.message);
    })
}


    return (
        <section>
            <Header></Header>
            <div>
            <div className="hero min-h-[80vh] bg-base-200 rounded">
            <div className="hero-content flex-col ">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold">Please Register now!</h1>
                
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered"  />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">PhotoUrl</span>
                    </label>
                    <input type="text" name="photo" placeholder="photoUrl" className="input input-bordered"  />
                  </div>
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
                    <button type="submit" className="btn btn-primary">Register</button>
                  </div>
                  <p>Already have an account ? <Link className="text-primary font-bold underline" to='/login'>Login</Link></p>
                </form>
                
              </div>
            </div>
          </div>
            </div>
        </section>
    );
};

export default Register;