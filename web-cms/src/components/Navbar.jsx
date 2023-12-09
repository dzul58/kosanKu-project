import logo from "../assets/kosanku-logo1.png";
import { useNavigate, useSearchParams } from "react-router-dom";
const Navbar = () => {
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.clear();
    navigate("/login");
  }

  return (
    <>
      <nav className="p-4 bg-white flex justify-between items-center">
        {/* Logo on the left */}
        <div>
          <img
            src={logo}
            alt="Logo"
            className="w-15 h-12 object-contain rounded-full"
          />
        </div>

        {/* Logout button on the right */}
        <div>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
