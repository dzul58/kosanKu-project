// import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
// import axios from "axios";

const Card = ({ data }) => {
  const navigate = useNavigate();

  const handleClick = (id) => {
    navigate(`/${id}`);
    console.log(data, "<<<< ini data");
  };

  return (
    <>
      {/* <!-- TW Elements is free under AGPL, with commercial license required for specific uses. See more details: https://tw-elements.com/license/ and contact us for queries at tailwind@mdbootstrap.com -->  */}

      {/* {data?.map((data) => ( */}
      <div
        key={data.id}
        className="mx-3 mt-6 flex flex-col self-start rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-gray-900 sm:shrink-0 sm:grow sm:basis-0"
      >
        <a href="#!">
          <img
            className="object-cover h-48 w-[100%] rounded-t-lg"
            src={data.imgUrl}
            alt="Hollywood Sign on The Hill"
          />
        </a>
        <div className="p-6">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
            {data.name}
          </h5>
          <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            Location : {data.location} <br />
            Room Capacity : {data.roomCapacity} <br />
            people Price : Rp. {data?.price} / Month <br />
            Facility : {data.facility}
          </p>
          <div className="px-6 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {data.Type?.name}
            </span>
          </div>
          <div className="mt-auto border-t-2 border-neutral-100 px-6 py-3 text-center dark:border-neutral-600 dark:text-neutral-50">
            <button onClick={() => handleClick(data.id)}>
              Read details {data?.name}{" "}
            </button>
          </div>
        </div>
      </div>
      {/* ))} */}
      {/* </div> */}
    </>
  );
};

export default Card;
