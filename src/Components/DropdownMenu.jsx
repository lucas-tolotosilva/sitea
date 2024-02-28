import React from "react";
import { Link } from 'react-router-dom';

export default function DropdownMenu(props) {
  return (
    <div className="absolute hover:cursor-pointer text-sm font-normal">
      <ul >
        <li className="my-2 ">
          <Link to="/portfolio">Portfólio</Link>
        </li>
        <Link to="/blog"><li className="my-2 pt-2 border-t-2 w-full">Nossos <br /> Passeios</li></Link>
      </ul>
    </div>
  );
};