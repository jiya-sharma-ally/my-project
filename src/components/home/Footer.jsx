import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useState } from "react";
import app1 from "../../assets/images/app1.png";
import app2 from "../../assets/images/app2.png";



const Footer = () => {
  const [email, setEmail] = useState("");

  return (
    
    <footer className="bg-[#ffffff] text-[#212121] pt-16 pb-6 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-6">

<div className="w-full bg-white py-16 border-b border-gray-200">


  <div className="max-w-9xl mx-auto px-6">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

   
      <div>
        <h3 className="text-3xl font-semibold mb-4">
          Subscribe to our  awesome emails.
        </h3>
        <p className="text-md text-gray-500 mb-4">
          Get our latest offers and news straight in your inbox.
        </p>

        <div className="flex overflow-hidden max-w-md">
          <input
            type="email"
            placeholder="Please enter an email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-6 py-4 outline-none bg-[#f5f5f5]"
          />

          <button
            onClick={() => {
              if (!email) {
                alert("Please enter your email");
                return;
              }
              window.location.href = `mailto:support@driptees.com?subject=Newsletter Subscription&body=My email is: ${email}`;
            }}
            className="bg-black text-white px-9 hover:bg-black transition"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-3xl font-semibold  mb-4">
          Enjoy our amazing apps
        </h3>
        <p className="text-md text-gray-500 mb-4">
          Shop our products and offers on-the-go.
        </p>

        <div className="flex gap-4 mt-4">
          <Link to="/">
            <img src={app1} alt="App Store" className="w-45 cursor-pointer" />
          </Link>
          <Link to="/">
            <img src={app2} alt="Play Store" className="w-45 cursor-pointer" />
          </Link>
        </div>
      </div>

    </div>
  </div>
</div>



        <div className="grid md:grid-cols-5 mt-12  ">

          <div>
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link to="/about" className="hover:text-gray transition">
                  Jeans
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-black transition">
                  Casual Shirt
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black transition">
                  T-shirt
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-black transition">
                  Co-ord Set
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-black transition">
                  Shorts
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black transition">
                  Blazer
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black transition">
                  Hoodie
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black transition">
                  Cargo
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black transition">
                  Coats
                </Link>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-lg font-semibold mb-4">Pants</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-black transition">
                  Trouser
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-black  transition">
                  Bootcut Trouser
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black  transition">
                  Gurkha pants
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-black  transition">
                  Lower
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-black  transition">
                  Cargo
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black  transition">
                  Loose fit
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black  transition">
                  Slim fit
                </Link>
              </li>
            </ul>
          </div>
          

          <div>
            <h3 className="text-lg font-semibold mb-4">Jeans</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-black  transition">
                  Cargo
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-black transition">
                  Six pockets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black  transition">
                  Boot cut
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-black  transition">
                  Straight
                </Link>
              </li>
              <li>
                <Link to="/conditions" className="hover:text-black  transition">
                  Baggy
                </Link>
              </li>
              <li>
                <Link to="/help" className="hover:text-black  transition">
                  Slim fit
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shirt</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/about" className="hover:text-black  transition">
                  Floral(Designer)
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:text-black  transition">
                  Strips
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-black  transition">
                  Checks
                </Link>
              </li>


            </ul>

          </div>


          <div>
            <h3 className="text-lg font-semibold mb-4">T-Shirt</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/business-planning" className="hover:text-black  transition">
                  Polo
                </Link>
              </li>
              <li>
                <Link to="/strategy" className="hover:text-black  transition">
                  Round Neck
                </Link>
              </li>

            </ul>

          </div>
        </div>

        <div className="grid md:grid-cols-6 pt-5 ">

          <div>
            <h3 className="text-lg font-semibold mb-4">Blazer</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  Formal Blazer
                </Link>
              </li>
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  Tweed Blazer
                </Link>
              </li>
            </ul>
          </div>


           <div>
            <h3 className="text-lg font-semibold mb-4">Sweat Shirt</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  Round Neck
                </Link>
              </li>
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  V-Neck
                </Link>
              </li>
            </ul>
          </div>


           <div>
            <h3 className="text-lg font-semibold mb-4">Cargo</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  Linen 
                </Link>
              </li>
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  Casual
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Hoodie Jacket</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="\" classname="hover:text-black  transition">
                    half
                </Link>
              </li>
              <li>
                <Link to="\" classname="hover:text-black  transition">
                  Full
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Shorts</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="\" classname="hover:text-black transition">
                  Cotton short
                </Link>
              </li>
            </ul>
          </div>

          

          
        </div>


        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>Copyright <FaRegCopyright />2023 Biztek. All Rights Reserved.</p>

          <div className="flex gap-6 mt-3 md:mt-0">
            <Link>Make an Enquiry</Link>
            <Link>Terms & Conditions</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
