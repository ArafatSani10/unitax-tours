import { FaLinkedin } from "react-icons/fa";
import { FaFacebookMessenger, FaTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer bg-purple-950 text-white p-10">

            <nav className="w-[300px]">
                <img src="https://i.ibb.co.com/vxnM9tFf/Screenshot-2025-02-27-192456.png" alt="" />
                <p>Lnecessitatibus nam, adipisci quam, quisquam autem eos eius.</p>
                <div className="flex gap-3">
                    <p className="text-2xl "><FaLinkedin></FaLinkedin></p>
                    <p className="text-2xl"><FaFacebookMessenger></FaFacebookMessenger></p>
                    <p className="text-2xl"><FaTwitter></FaTwitter></p>
                </div>
            </nav>
     
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">designation</a>
          <a className="link link-hover">packages</a>
          <a className="link link-hover">Gallery</a>
        </nav>

        <nav>
          <h6 className="footer-title">Designations</h6>
          <a className="link link-hover">Switzerland</a>
          <a className="link link-hover">Amazon</a>
          <a className="link link-hover">Las vegas</a>
          <a className="link link-hover">Torronto</a>
        </nav>
      
        <form>
          <h6 className="footer-title">Join Our NewsLetter</h6>
          <fieldset className="form-control w-80">
            <label className="label">
              <span className="label-text">Enter your email address</span>
            </label>
            <div className="join">
              <input
                type="text"
                placeholder="username@site.com"
                className="input input-bordered join-item" />
              <button className="btn bg-yellow-500 text-white join-item">Subscribe</button>
            </div>
          </fieldset>
        </form>
      </footer>
    );
};

export default Footer;