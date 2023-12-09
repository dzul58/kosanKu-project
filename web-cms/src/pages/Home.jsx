import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Tabel from "../components/Tabel";
import Swal from "sweetalert2";
// import Page from "../components/Page";

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  async function fetchingData() {
    try {
      const { data } = await axios.get(
        `https://server.dzul58.online/lodgings`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      // console.log(data.lodgings, "<<<< ini dapet");
      setData(data.lodgings);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error,
      });
    }
  }

  useEffect(() => {
    // Replace the URL with your API endpoint
    fetchingData();
  }, []);

  const handleClickAdd = () => {
    navigate(`/add`);
  };

  const handleClickAddUser = () => {
    navigate(`/addUser`);
  };

  const handleClickType = () => {
    navigate(`/type`);
  };

  // const navigate = useNavigate();
  return (
    <>
      <div className="bg-gray-100 p-8">
        <h2 className="text-2xl font-semibold mb-4">Kosan Information</h2>
        <button
          onClick={handleClickAdd}
          className="bg-green-500 text-white px-4 py-2 rounded mb-4  mr-2"
        >
          Add Lodging
        </button>
        <button
          onClick={handleClickAddUser}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4 mr-2"
        >
          Add User
        </button>
        <button
          onClick={handleClickType}
          className="bg-rose-500 text-white px-4 py-2 rounded mb-4 mr-2"
        >
          List Type
        </button>
        <Tabel data={data} fetchingData={fetchingData} />
      </div>
    </>
  );
};

export default Home;
