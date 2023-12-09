import LodgingForm from "../components/LodgingsForm";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LodgingsForm() {
  const [lodging, setLodging] = useState([]);
  const navigate = useNavigate();
  const { id } = useParams();

  async function fetchLodgings() {
    try {
      const { data } = await axios.get(
        `https://server.dzul58.online/lodgings/${id}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );
      setLodging(data.lodging);
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  }

  useEffect(() => {
    fetchLodgings();
  }, []);

  async function handleSubmit(
    e,
    name,
    facility,
    roomCapacity,
    imgUrl,
    location,
    price
  ) {
    e.preventDefault();
    try {
      const dataAdded = {
        name,
        facility,
        roomCapacity: +roomCapacity,
        imgUrl,
        location,
        price: +price,
      };

      await axios.put(
        `https://server.dzul58.online/lodgings/${id}`,
        dataAdded,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Swal.fire({
        title: "success edit lodgings",
        icon: "success",
      });

      navigate("/");
    } catch (error) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
      });
    }
  }

  return (
    <>
      <LodgingForm
        handleSubmit={handleSubmit}
        lodging={lodging}
        nameProp="Edit Lodging"
      />
    </>
  );
}
