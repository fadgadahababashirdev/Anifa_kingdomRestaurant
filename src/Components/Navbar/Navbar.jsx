import React,{useState} from 'react';
import { IoMdMenu } from 'react-icons/io';
import { FaTimes } from 'react-icons/fa';


const Navbar = () => {
    const [menu,setMenu] = useState(false)
    console.log(menu)
  return (
    <div className="">
      <div className="w-screen h-fit px-6  p-3 fixed bg-white flex justify-between items-center shadow-md">
        <div>
          <h1 className="font-bold text-3xl">Anifa Kingdom</h1>
        </div>
        <div className="  flex items-center grid grid-cols-2 gap-3 hidden grid xl:flex">
          <ul className="flex  gap-28 md:gap-5 xl:gap-7 mr-72">
            <li className="font-sans text-2xl font-bold ">Home</li>
            <li className="font-sans text-2xl font-bold">View Menu</li>
            <li className="font-sans text-2xl font-bold">Gallery</li>
            <li className="font-sans text-2xl font-bold">Our Team</li>
            <li className="font-sans text-2xl font-bold">Contact Us</li>
            <li className="font-sans text-2xl font-bold">Promotions</li>
          </ul>
          <div>
            {' '}
            <button className="bg-red-500 text-2xl rounded-md text-white font-mono p-2 ml-12">
              Order online
            </button>
          </div>
        </div>

        <div className="text-4xl xl:hidden">
          <IoMdMenu onClick={()=>setMenu(!menu)}/>
        </div>
      </div>
        {
            menu && <div className="w-screen h-screen bg-black relative menu  ">
            <ul className="px-3 py-4 ">
              <li className="font-sans text-2xl font-bold shadow-md my-12 text-white">
                Home
              </li>
              <li className="font-sans text-2xl font-bold shadow-md my-12 text-white">
                View Menu
              </li>
              <li className="font-sans text-2xl font-bold shadow-md my-12 text-white">
                Gallery
              </li>
              <li className="font-sans text-2xl font-bold shadow-md my-12 text-white">
                Our Team
              </li>
              <li className="font-sans text-2xl font-bold shadow-md  my-12 text-white">
                Contact Us
              </li>
              <li className="font-sans text-2xl font-bold shadow-md my-12 text-white">
                Promotions
              </li>
    
              <li className="font-sans text-green-300 text-2xl font-bold shadow-md my-12 ">
                Order Online
              </li>
              <div className="absolute top-0 z-20 text-white flex justify-center text-3xl py-3 w-screen h-fit ">
                <FaTimes onClick={()=>setMenu(!menu)}/>
              </div>
            </ul>
          </div>
        }
    </div>
  );
};

export default Navbar;
