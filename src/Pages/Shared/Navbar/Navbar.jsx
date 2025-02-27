

const Navbar = () => {
    const links = <>
        <div className="font-bold  max-sm:flex-col md:text-[15px] max-sm:text-lg  md:flex md:text-white max-sm:text-black ">
        <li><a>HOME</a></li>
        <li><a>ABOUT US</a></li>
        <li><a>DESTINATION</a></li>
        <li><a>PACKAGES</a></li>
        <li><a>GALLERY</a></li>
        <li><a>CONTACT US</a></li>
        </div>
    </>


    return (
        <nav className="md:p-8 fixed w-full  z-10 top-0 left-0">
            <div className="navbar ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                                    {links}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl mx-5">
                        <img className="md:w-36 max-sm:w-[90px]" src="https://i.ibb.co.com/vxnM9tFf/Screenshot-2025-02-27-192456.png" alt="" />
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                            {links}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn bg-yellow-400 rounded-2xl text-black p-4 font-bold">
                        Sign In
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
