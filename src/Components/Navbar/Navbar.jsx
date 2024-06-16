import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  // const navlinks = (
  //   <>
  //     <li >
  //       <NavLink className={`active:bg-white`} to={"/"}>Home</NavLink>
  //     </li>
  //     <li>
  //       <NavLink to={"/update-profile"}>Update Profile</NavLink>
  //     </li>
  //     <li>
  //       <NavLink className={`active:bg-white`} to={"/login"}>Login</NavLink>
  //     </li>
  //   </>
  // );
  return (
    <div className="navbar bg-black bg-opacity-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/update-profile"}>Update Profile</NavLink>
            </li>
            <li>
              <NavLink to={"/login"}>Login</NavLink>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">LuxeHaven</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" px-1">
          <li>
            <NavLink to={"/"} activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"} activeClassName="active">
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink to={"/update-profile"}>Update Profile</NavLink>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <div
          data-tip="Name"
          className="w-12 h-12 cursor-pointer tooltip tooltip-left rounded-full bg-slate-500"
        >
          <img src="" alt="" />
        </div>
        <Link to={"/login"}>
          <button className="btn">Login</button>
        </Link>
        <Link to={"/register"}>
          <button className="btn">Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
