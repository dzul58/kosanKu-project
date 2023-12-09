import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UploadImage() {
  const [imgUrl, setImgUrl] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const inputOnChangeHandler = (e) => {
    const input = e.target.files[0];
    setImgUrl(input);
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!imgUrl) {
      // Handle if no image is selected
      Swal.fire({
        title: "Please select an image",
        icon: "warning",
        confirmButtonText: "OK",
      });
      return;
    }

    // Create FormData object
    const formData = new FormData();
    formData.append("imgUrl", imgUrl);

    try {
      // Use patch request for updating with image
      await axios.patch(
        `https://server.dzul58.online/lodgings/upload/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Show success message
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Successfully edited the image",
        showConfirmButton: false,
        timer: 1500,
      });

      // Navigate back to home page
      navigate("/");
    } catch (error) {
      // Handle error and show an error message
      console.error(error);
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Upload Image</h2>
          <form onSubmit={handleUpload} className="mt-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-600"
            >
              Select Image:
            </label>
            <input
              type="file"
              id="image"
              name="image"
              accept="image/*"
              onChange={inputOnChangeHandler}
              className="mt-1 p-2 border border-gray-300 rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            />

            <button
              type="submit"
              className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
            >
              Upload
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
