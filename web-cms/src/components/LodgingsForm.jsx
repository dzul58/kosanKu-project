import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

export default function lodgingsForm({ url, handleSubmit, lodging, nameProp }) {
  const [name, setName] = useState("");
  const [facility, setFacility] = useState("");
  const [roomCapacity, setRoomCapacity] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState(0);
  const [typeId, setTypeId] = useState(1);
  //   const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (lodging) {
      setName(lodging.name);
      setFacility(lodging.facility);
      setRoomCapacity(lodging.roomCapacity);
      setImgUrl(lodging.imgUrl);
      setLocation(lodging.location);
      setPrice(lodging.price);
      setTypeId(lodging.typeId);
    }
  }, [lodging]);

  //   async function fetchTypes() {
  //     try {
  //       const { data } = await axios.get(
  //         `https://server.dzul58.online/lodgings`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.access_token}`,
  //           },
  //         }
  //       );
  //       setType(data.lodgings);
  //     } catch (error) {
  //       Swal.fire({
  //         title: error.response.data.message,
  //         icon: "error",
  //       });
  //     }
  //   }

  //   useEffect(() => {
  //     fetchTypes();
  //   }, []);

  return (
    <>
      <form
        className="grid bg-white grid-cols-2 gap-4 mt-4 pl-8 pr-8"
        onSubmit={(e) =>
          handleSubmit(
            e,
            name,
            facility,
            roomCapacity,
            imgUrl,
            location,
            price,
            typeId
          )
        }
      >
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Koskosan Name
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            id="name"
            placeholder="Enter Name"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={name}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="facility"
            className="block text-sm font-medium text-gray-600"
          >
            Facility
          </label>
          <input
            onChange={(e) => setFacility(e.target.value)}
            type="text"
            id="facility"
            placeholder="Enter Facility"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={facility}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="roomCapacity"
            className="block text-sm font-medium text-gray-600"
          >
            Room Capacity
          </label>
          <input
            onChange={(e) => setRoomCapacity(e.target.value)}
            type="number"
            id="roomCapacity"
            placeholder="Enter Room Capacity"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={roomCapacity}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="imgUrl"
            className="block text-sm font-medium text-gray-600"
          >
            Image (URL)
          </label>
          <input
            onChange={(e) => setImgUrl(e.target.value)}
            type="text"
            id="imgUrl"
            placeholder="Enter Image URL"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={imgUrl}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-600"
          >
            Location
          </label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            id="location"
            placeholder="Enter Location"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={location}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-600"
          >
            Price
          </label>
          <input
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            id="price"
            placeholder="Enter Price"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={price}
            required
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="typeId"
            className="block text-sm font-medium text-gray-600"
          >
            Type
          </label>
          <input
            onChange={(e) => setTypeId(e.target.value)}
            type="number"
            id="typeId"
            placeholder="Enter Type"
            className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
            value={typeId}
            required
          />
        </div>

        <div className="mb-4">
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
          >
            {nameProp}
          </button>
        </div>
      </form>
    </>
  );
}
