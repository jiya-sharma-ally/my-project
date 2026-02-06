import { Link } from "react-router-dom";
import { FaRegCopyright } from "react-icons/fa";
import { FaLongArrowAltRight } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="bg-[#633426] text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-10">

          {/* Column 1 - Logo & Text */}
          <div>
            <h2 className="text-2xl font-bold mb-4">DRIPTEES</h2>
            <p className="text-sm text-gray-300 leading-6">
              Fowl creature toward female don’t day have without him were man
              third bown creature appear better than living over ipsum dolor sit amet.
            </p>
          </div>

          {/* Column 2 - Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
  <li>
    <Link to="/about" className="hover:text-white transition">
      About
    </Link>
  </li>
  <li>
    <Link to="/privacy" className="hover:text-white transition">
      Privacy Policy
    </Link>
  </li>
  <li>
    <Link to="/contact" className="hover:text-white transition">
      Contact
    </Link>
  </li>
  <li>
    <Link to="/refund" className="hover:text-white transition">
      Refund
    </Link>
  </li>
  <li>
    <Link to="/conditions" className="hover:text-white transition">
      Conditions
    </Link>
  </li>
  <li>
    <Link to="/help" className="hover:text-white transition">
      Help Center
    </Link>
  </li>
</ul>

          </div>

          {/* Column 3 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
           <ul className="space-y-2 text-sm text-gray-300">
  <li>
    <Link to="/business-planning" className="hover:text-white transition">
      Business Planning
    </Link>
  </li>
  <li>
    <Link to="/strategy" className="hover:text-white transition">
      Strategy Services
    </Link>
  </li>
  <li>
    <Link to="/financial" className="hover:text-white transition">
      Financial Advices
    </Link>
  </li>
  <li>
    <Link to="/startup" className="hover:text-white transition">
      Startup Business
    </Link>
  </li>
  <li>
    <Link to="/market-analysis" className="hover:text-white transition">
      Market Analysis
    </Link>
  </li>
  <li>
    <Link to="/design" className="hover:text-white transition">
      Design Service
    </Link>
  </li>
</ul>

          </div>

          {/* Column 4 - Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Subscribe Newsletter</h3>
            <p className="text-sm text-gray-300 mb-4">
              Known printer took galley type and scrambled it to make.
            </p>

            {/* Input */}
            <div className="flex border border-white/50 rounded-md overflow-hidden">
  <input
    type="email"
    placeholder="Enter your email"
    className="w-full px-4 py-2 text-white outline-none bg-transparent"
  />
  <button className="bg-red-600 px-4"><FaLongArrowAltRight />

</button>
</div>

            {/* Address */}
            <div className="mt-4 text-sm text-gray-300">
              <p>10004 Battery Park, New York</p>
              <p>+0 123-456-7890</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-500 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
          <p>Copyright <FaRegCopyright />
 2023 Biztek. All Rights Reserved.</p>
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
