import { useState, useEffect } from "react";
import { useParams } from "react-router-dom"; // Use useParams to get the job id from the URL
import axios from "axios";

const Detail = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // Replace the URL with your API endpoint
    async function fetchingData() {
      try {
        const response = await axios.get(
          `https://server.dzul58.online/pub/${id}`
        );
        setData(response.data.lodging);
        console.log(response.data.lodging);
      } catch (error) {
        Swal.fire({
          title: error.response.data.message,
          icon: "error",
        });
      }
    }
    fetchingData();
  }, [id]);

  return (
    <>
      <div className="flex justify-center items-center">
        <div key={data} className="container mx-auto p-8 min-h-screen">
          <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-md overflow-hidden">
            <img className="w-full h-64 object-cover" src={data?.imgUrl} />

            <div className="flex items-center p-4">
              <div>
                <h2 className="text-xl font-bold">{data.name}</h2>
                <p className="text-gray-600">{data.location}</p>
                <p className="text-gray-600">
                  Room Capacity: {data?.roomCapacity}
                </p>
                <p className="text-gray-600">Facility : {data?.facility}</p>
                <p className="text-gray-600">Type : {data.Type?.name}</p>
              </div>
            </div>
            <div className="p-4">
              <h2 className="text-xl ">More Information for Reservation</h2>
              <h1 className="text-2xl font-bold mb-2">
                Price: Rp.{data.price}/Month
              </h1>
              <p className="text-gray-700">Contact Us: </p>
              <p className="text-gray-700">
                {" "}
                -Phone Number : {data.User?.phoneNumber}
              </p>
              <p className="text-gray-700"> -Email: {data.User?.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
