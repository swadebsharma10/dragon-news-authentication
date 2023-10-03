import { Link, NavLink } from "react-router-dom";


const Header = () => {

    const navLinks = <>
        <li><NavLink
        to="/"
        className={({ isActive, }) =>
           isActive ? "underline text-orange-500" : ""
        }
      >
        Home
      </NavLink></li>
        <li><NavLink
        to="/about"
        className={({ isActive, }) =>
           isActive ? "underline text-orange-500" : ""
        }
      >
       About
      </NavLink></li>
        <li><NavLink
        to="/career"
        className={({ isActive, }) =>
           isActive ? "underline text-orange-500" : ""
        }
      >
        Career
      </NavLink></li>
    
    </>

    return (
        <div>
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
            </ul>
          </div>
        
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
          {navLinks}
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" />
        </div>
      </label>
          <Link to='/login'><button className="btn btn-sm">Login</button></Link>
        </div>
      </div> 
        </div>
    );
};

export default Header;