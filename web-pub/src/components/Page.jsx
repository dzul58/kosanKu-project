import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";

const Page = ({ count, setCount }) => {
  // const [data, setData] = useState([]);
  // const [count, setCount] = useState(1);

  //   useEffect(() => {
  //     // Replace the URL with your API endpoint
  //     async function fetchingData() {
  //       try {
  //         const response = await axios.get(
  //           `https://server.dzul58.online/pub?page=${count}&limit=9`
  //         );
  //         setData(response.data.rows);
  //       } catch (error) {
  //         console.error("Error fetching data:", error);
  //       }
  //     }
  //     fetchingData();
  //   }, []);

  // const navigate = useNavigate();

  // useEffect(async () => {
  //   const response = await axios.get(
  //     `https://server.dzul58.online/pub?page=${count}&limit=9`
  //   );
  //   setData(response.data.rows);
  // }, [count]);

  return (
    <>
      <nav className="bg-gray-700 justify-center flex items-center pt-5 pb-5">
        <ul className="inline-flex -space-x-px text-base h-10 bg-gray-700">
          <li>
            <a
              onClick={() => setCount((count) => count - 1)}
              className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Previous
            </a>
          </li>
          <li>
            <a
              onClick={() => setCount((count) => (count = 1))}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              1
            </a>
          </li>
          <li>
            <a
              onClick={() => setCount((count) => (count = 2))}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              2
            </a>
          </li>
          <li>
            <a
              onClick={() => setCount((count) => (count = 3))}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              3
            </a>
          </li>
          <li>
            <a
              onClick={() => setCount((count) => count + 1)}
              className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Page;
