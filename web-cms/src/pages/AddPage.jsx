import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import LodgingsForm from "../components/LodgingsForm";

export default function ProductsForm() {
  const navigate = useNavigate();
  async function handleSubmit(
    e,
    name,
    facility,
    roomCapacity,
    imgUrl,
    location,
    price,
    typeId
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
        typeId: +typeId,
      };

      // const { data } = await axios.get(
      //   `https://server.dzul58.online/lodgings`,
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.access_token}`,
      //     },
      //   }
      // );
      // // console.log(data.lodgings, "<<<< ini dapet");
      // setData(data.lodgings);

      const { lodgings } = await axios.post(
        `https://server.dzul58.online/lodgings`,
        dataAdded,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success Add Lodging",
      });

      console.log(lodgings);
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
      <LodgingsForm handleSubmit={handleSubmit} nameProp="Add Lodgings" />
    </>
  );
}
