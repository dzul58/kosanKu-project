import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Tabel = ({ data, fetchingData }) => {
  const navigate = useNavigate();

  async function handleDelete(id) {
    try {
      await axios.delete(`https://server.dzul58.online/lodgings/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.access_token}`,
        },
      });

      Swal.fire({
        title: "Delete success",
        icon: "success",
      });

      fetchingData();
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  }

  async function handleUpload(id) {
    try {
      // if (id) {
      //   throw  bikin validasi buat error jangan lupa/........................
      // }
      navigate(`/upload/${id}`);
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  }

  const handleClickDetail = (id) => {
    navigate(`/${id}`);
  };

  const handleClickEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleClickUpload = (id) => {
    navigate(`/upload/${id}`);
  };

  return (
    <>
      <div className="overflow-x-auto pb-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Facility</th>
              <th className="py-2 px-4 border-b">Image</th>
              <th className="py-2 px-4 border-b">Location</th>
              <th className="py-2 px-4 border-b">Price</th>
              <th className="py-2 px-4 border-b">Type</th>
              <th className="py-2 px-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data.id}>
                  <td className="py-2 px-4 border-b">{data?.id}</td>
                  <td className="py-2 px-4 border-b">{data?.name}</td>
                  <td className="py-2 px-4 border-b">{data?.facility}</td>
                  <td className="py-2 px-4 border-b max-w-xs">
                    <div className="flex items-center">
                      <img
                        src={data?.imgUrl}
                        alt="Image"
                        className="w-10 h-10 object-cover rounded-full mr-2"
                      />
                      <div className="truncate">{data?.imgUrl}</div>
                    </div>
                  </td>
                  <td className="py-2 px-4 border-b">{data?.location} </td>
                  <td className="py-2 px-4 border-b">
                    Rp. {data?.price} / Month
                  </td>
                  <td className="py-2 px-4 border-b">{data?.Type?.name}</td>
                  <td className="py-2 px-4 border-b">
                    <div>
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                        onClick={() => handleClickDetail(data?.id)}
                      >
                        Detail
                      </button>{" "}
                      <button
                        className="bg-orange-500 text-white px-2 py-1 rounded"
                        onClick={() => handleClickUpload(data?.id)}
                      >
                        Upload
                      </button>
                      <br />
                      <div className="pt-2">
                        <button
                          className="bg-blue-500 text-white px-2 py-1 rounded mr-2"
                          onClick={() => handleClickEdit(data?.id)}
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-500 text-white px-2 py-1 rounded"
                          onClick={() => handleDelete(data?.id)}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tabel;
