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
        // console.log(response.data.lodging);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchingData();
  }, [id]);

  return (
    <>
      <div>
        <div className="flex justify-center items-center bg-gray-700">
          <div key={data} className="container mx-auto p-8 min-h-screen">
            <div className="max-w-3xl mx-auto bg-gray-900 shadow-lg rounded-md overflow-hidden">
              <img className="w-full h-64 object-cover" src={data?.imgUrl} />

              <div className="flex items-center p-4">
                <div>
                  <h2 className="text-white font-bold">{data.name}</h2>
                  <p className="text-white">{data.location}</p>
                  <p className="text-white">
                    Room Capacity: {data?.roomCapacity}
                  </p>
                  <p className="text-white">Facility : {data?.facility}</p>
                  <p className="text-white">Type : {data.Type?.name}</p>
                </div>
              </div>
              <div className="p-4">
                <h2 className="text-xl text-white">
                  More Information for Reservation
                </h2>
                <h1 className="text-2xl font-bold mb-2 text-white">
                  Price: Rp.{data.price}/Month
                </h1>
                <p className="text-white">Contact Us: </p>
                <p className="text-white">
                  {" "}
                  -Phone Number : {data.User?.phoneNumber}
                </p>
                <p className="text-white"> -Email: {data.User?.email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
