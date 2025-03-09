
import { FaFacebookSquare, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Mobile Footer */}
      <div className="md:hidden">
        <div className="container mx-auto px-6 py-8">
          {/* Logo Section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold tracking-wide">RAJANI BANIYA</h1>
            <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mt-2"></div>
          </div>
          
          {/* Links Section */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-3">NAVIGATION</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Portfolio</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-gray-400 text-sm font-medium mb-3">CONTACT</h3>
              <ul className="space-y-2">
                <li>USA</li>
                <li>contact@rajani.com</li>
                <li>+977 98XXXXXXXX</li>
              </ul>
            </div>
          </div>
          
          {/* Social Icons */}
          <div className="flex space-x-5 mb-6">
            <a href="https://www.instagram.com/ra_ja_ni_28/" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
              <FaFacebookSquare className="size-5" />
            </a>
            <a href="https://www.instagram.com/ra_ja_ni_28/" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
              <FaInstagram className="size-5" />
            </a>
            <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-colors duration-300">
              <FaTiktok className="size-5" />
            </a>
          </div>
          
          {/* Copyright */}
          <div className="pt-4 border-t border-gray-800">
            <p className="text-gray-400 text-sm">© Rajani Chhetri 2024. All rights reserved.</p>
          </div>
        </div>
      </div>

      {/* Desktop Footer */}
      <div className="hidden md:block">
        <div className="container mx-auto px-10 py-12">
          <div className="grid grid-cols-4 gap-8">
            {/* Logo Section */}
            <div className="col-span-1">
              <h1 className="text-2xl font-bold tracking-wide">RAJANI BANIYA</h1>
              <div className="h-1 w-16 bg-gradient-to-r from-pink-500 to-purple-500 mt-2"></div>
              <p className="mt-4 text-gray-400 pr-4">A passionate designer creating beautiful digital experiences.</p>
            </div>
            
            {/* Navigation */}
            <div className="col-span-1">
              <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Home</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">About</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Portfolio</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Services</a></li>
                <li><a href="#" className="hover:text-pink-400 transition-colors duration-300">Contact</a></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Contact</h3>
              <ul className="space-y-2 text-gray-300">
                <li>USA</li>
                <li>contact@rajani.com</li>
                <li>+977 98XXXXXXXX</li>
              </ul>
            </div>
            
            {/* Newsletter */}
            <div className="col-span-1">
              <h3 className="text-gray-400 text-sm font-medium mb-4 uppercase tracking-wider">Stay Updated</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-800 px-4 py-2 w-full outline-none focus:ring-1 focus:ring-pink-500 text-sm"
                />
                <button className="bg-pink-600 hover:bg-pink-700 px-4 text-sm transition-colors duration-300">
                  SEND
                </button>
              </div>
              
              {/* Social Icons */}
              <div className="flex space-x-4 mt-6">
                <a href="https://www.instagram.com/ra_ja_ni_28/" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                  <FaFacebookSquare className="size-5" />
                </a>
                <a href="https://www.instagram.com/ra_ja_ni_28/" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                  <FaInstagram className="size-5" />
                </a>
                <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 transition-all duration-300 hover:scale-110">
                  <FaTiktok className="size-5" />
                </a>
              </div>
            </div>
          </div>
          
          {/* Copyright */}
          <div className="pt-8 mt-8 border-t border-gray-800 flex justify-between items-center">
            <p className="text-gray-400 text-sm">© Rajani Chhetri 2024. All rights reserved.</p>
            <p className="text-gray-500 text-sm">Designed with ❤️</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;