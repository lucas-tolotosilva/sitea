import React from "react";
import { Link } from 'react-router-dom';

export default function DropdownMenu(props) {
  return (
    <div className="absolute hover:cursor-pointer text-sm font-normal">
      <ul className="w-[180px] bg-white -ml-[39px] mt-2 rounded-r-lg overflow-hidden">
        <Link to="/portfolio"><li className=" py-2 hover:bg-[#F0CC2B] px-2 ">
          Portfólio
        </li></Link>
        <Link to="/nossos-passeios"><li className="  py-2 border-t-2 w-full hover:bg-[#F0CC2B] px-2">
          Nossos Passeios

        </li></Link>
      </ul>
    </div>
  );
};