import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/images/logo.png";
import { navItems } from "../constants";
import Login from "./../login/login"; // Assuming Login component is in the same folder

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // State for login modal visibility

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const toggleLoginModal = () => {
    setIsLoginModalOpen(!isLoginModalOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-5 backdrop-blur-lg border-b bg-white border-neutral-200/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-10 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight font-meta bg-gradient-to-r from-green-500 to-green-800 text-transparent bg-clip-text">
              WanderPets
            </span>
          </div>
          <ul className="hidden lg:flex ml-14 space-x-12 text-green-600">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-green-500">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <button
              onClick={toggleLoginModal}
              className="py-2 px-3 border rounded-md border-green-500 text-green-800 hover:bg-green-100"
            >
              Sign In
            </button>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-white text-green-600 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <a href={item.href} className="hover:text-green-500">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <button
                onClick={toggleLoginModal}
                className="py-2 px-3 border-green-500 rounded-md text-green-800 hover:bg-green-100"
              >
                Sign In
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal for Login */}
      {isLoginModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 h-screen">
          <div className="bg-white p-8 rounded-lg shadow-lg w-full sm:w-96">
            <div className="flex justify-end">
              <button
                onClick={toggleLoginModal}
                className="text-gray-600 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>
            <Login />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
