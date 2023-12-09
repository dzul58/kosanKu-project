import Swal from "sweetalert2";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setPage }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const url = "https://server.dzul58.online";

  function emailOnChange(event) {
    setEmail(event.target.value);
  }

  function passwordOnChange(event) {
    setPassword(event.target.value);
  }

  async function handleLogin(event) {
    event.preventDefault();
    try {
      const addedData = { email, password };
      let { data } = await axios.post(`${url}/user/login`, addedData);
      //   console.log(data.access_token);
      localStorage.setItem("access_token", data.access_token);

      Swal.fire({
        icon: "success",
        title: "Success Login",
      });

      navigate("/");
    } catch (error) {
      //   console.log(error.response.data.message);
      Swal.fire({
        icon: "error",
        title: error.response.data.message,
      });
    }
  }

  return (
    <>
      <body className="bg-gray-100 h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>

          {/* <!-- Form --> */}
          <form>
            <div className="mb-4">
              <label
                for="username"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="w-full p-2 border rounded-md"
                placeholder="Enter Email"
                onChange={emailOnChange}
              />
            </div>

            <div className="mb-6">
              <label
                for="password"
                className="block text-gray-600 text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full p-2 border rounded-md"
                onChange={passwordOnChange}
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              onClick={handleLogin}
              className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </body>
    </>
  );
}
