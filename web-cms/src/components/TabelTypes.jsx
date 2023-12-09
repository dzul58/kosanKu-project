import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const TabeTypes = ({ data }) => {
  return (
    <>
      <div className="overflow-x-auto pb-10">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">ID</th>
              <th className="py-2 px-4 border-b">Name</th>
            </tr>
          </thead>
          <tbody>
            {data.map((data) => {
              return (
                <tr key={data.id}>
                  <td className="py-2 px-4 border-b text-center">{data?.id}</td>
                  <td className="py-2 px-4 border-b text-center">
                    {data?.name}
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

export default TabeTypes;
