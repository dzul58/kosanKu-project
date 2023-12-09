import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import UserForm from "../components/UserForm";

export default function AddUser() {
  const navigate = useNavigate();
  async function handleSubmit(
    e,
    username,
    email,
    password,
    phoneNumber,
    address
  ) {
    e.preventDefault();
    try {
      const dataAdded = {
        username,
        email,
        password,
        phoneNumber: +phoneNumber,
        address,
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

      const { user } = await axios.post(
        `https://server.dzul58.online/user`,
        dataAdded,
        {
          headers: {
            Authorization: `Bearer ${localStorage.access_token}`,
          },
        }
      );

      Swal.fire({
        icon: "success",
        title: "Success Add User",
      });
      // console.log(user);
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
      <UserForm handleSubmit={handleSubmit} nameProp="Add User" />
    </>
  );
}
