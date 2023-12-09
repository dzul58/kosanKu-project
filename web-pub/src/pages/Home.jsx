import Card from "../components/Card";
import Page from "../components/Page";
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
// import Page from "../components/Page";

const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(1);
  const [filter, setFilter] = useState();

  useEffect(() => {
    // Replace the URL with your API endpoint
    async function fetchingData() {
      try {
        let URL = `https://server.dzul58.online/pub?limit=9&page=${count}`;

        if (filter) {
          URL += `&filter=${filter}`;
        }

        if (filter < 1) {
          URL;
        }

        const response = await axios.get(
          // `https://server.dzul58.online/pub?limit=9&page=1`
          URL
        );
        // console.log(response);
        // console.log(response.data.data);
        setData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingData();
  }, [count, filter]);

  const navigate = useNavigate();
  return (
    <>
      <div className="pt-5 pb-5 bg-gray-700">
        <div className="flex flex-col items-center bg-white border border-gray-900 rounded-lg shadow md:flex-row md:max-w-7xl mx-auto hover:bg-gray-100 dark:border-gray-900 dark:bg-gray-900 dark:hover:bg-gray-900">
          <img
            className="object-cover w-full h-96 md:w-90 md:h-auto md:rounded-none md:rounded-l-lg"
            src="https://i.pinimg.com/564x/b4/a5/39/b4a539ca533b8c2bd66caa3f80c9426b.jpg"
            alt=""
          />
          <div className="flex flex-col justify-between p-4 leading-normal text-center md:text-left">
            <h5 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
              Discover Your Dream Boarding House, Only at Kosanku!
            </h5>
            <p className="mb-4 font-normal text-lg text-gray-700 dark:text-gray-400">
              platform yang menghubungkan pemilik kos dengan calon penyewa
              secara praktis dan efisien. Desain website ini akan memiliki
              antarmuka yang ramah pengguna dan fitur pencarian yang intuitif.
              Informasi tentang setiap kosan akan disajikan dengan jelas,
              termasuk fasilitas, lokasi, dan harga.
            </p>
          </div>
        </div>
      </div>

      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-cta"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  onClick={() => setFilter(3)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Eksekutif
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilter(2)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Premium
                </a>
              </li>
              <li>
                <a
                  onClick={() => setFilter(1)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Economy
                </a>
              </li>

              <li>
                <a
                  onClick={() => setFilter(0)}
                  className="block py-2 px-3 md:p-0 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 d:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  All Type
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="grid-cols-1 sm:grid md:grid-cols-3 bg-gray-700">
        {data.map((data) => {
          return <Card key={data.id} data={data} />;
        })}
      </div>
      <Page count={count} setCount={setCount} />
    </>
  );
};

export default Home;
