import { Link, useNavigate } from "react-router-dom";
import { BiTrash } from "react-icons/bi";
import { BiUserCircle } from "react-icons/bi";
import { BiCheckDouble } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import React from "react";
const Contact = ({ contact, onDelete }) => {
  const { id, firstName, lastName, phoneNumber , job , cellPhone , email , address } = contact;
  const navigate = useNavigate();
  const singleContact=()=>{
    navigate(`user/${id}`, {state:{id , firstName, lastName, job, phoneNumber , cellPhone, email , address}});
  
      }

  return (
    <tr key={id} className="bg-gray-100 border-b">
      <td className="px-6 py-4 flex justify-center items-center text-sm font-medium text-gray-900 whitespace-nowrap">
        <BiUserCircle className="text-xl" />
      </td>
      <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap text-center border">
        {firstName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center  border">
        {lastName}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center  border">
        {phoneNumber}
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border">
        <div
          className="flex justify-center items-center"
          onClick={()=> {singleContact()}}
          >
          <BiCheckDouble className="text-sky-500 text-lg cursor-pointer" />
        </div>
      </td>
      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap text-center border">
        <Link to={`/edit/${id}`} className="flex justify-center items-center">
        <BiEditAlt
          className="text-green-500 text-lg cursor-pointer"
          />
        </Link>
      </td>
      <td className="w-full flex justify-center items-center px-6 py-4">
        <BiTrash
          onClick={() => onDelete(id)}
          className="text-rose-500 text-lg cursor-pointer"
          />
      </td>
    </tr>
  );
};

export default Contact;
