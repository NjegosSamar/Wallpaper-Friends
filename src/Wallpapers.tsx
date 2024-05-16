import { useState } from "react";
import blackHead from "./assets/black-head.png";
import whiteHead from "./assets/white-head.png";
import ImgSlider from "./ImgSlider";

export default function Wallpapers() {
  const [selectedItem, setSelectedItem] = useState<Number>();

  return (
    <div className="w-full h-140 p-4 mb-8 md:mb-0">
      <p className="text-4xl text-white mb-8">Which one will be Yours...</p>
      <ul className="text-sm md:text-base flex flex-row w-full my-5 gap-4 px-0 md:px-8">
        <li
          className={` flex flex-row w-1/2 h-10 justify-center items-center cursor-pointer rounded-lg duration-500 ${
            selectedItem === 1
              ? "bg-white text-black"
              : "text-white bg-black border-white border-2"
          } `}
          onClick={() => setSelectedItem(1)}
        >
          Night Dragon{" "}
          <span>
            <img src={blackHead} alt="" className="w-12 h-12" />
          </span>
        </li>
        <li
          className={` flex flex-row w-1/2 h-10 justify-center items-center cursor-pointer rounded-lg duration-500 ${
            selectedItem === 2
              ? "bg-white text-black"
              : "text-white bg-black border-2 border-white"
          } `}
          onClick={() => setSelectedItem(2)}
        >
          Light Dragon{" "}
          <span>
            <img src={whiteHead} alt="" className="w-8 h-8" />
          </span>
        </li>
      </ul>

      <div
        className={`h-96 w-full px-4 ${
          selectedItem === 1 ? "block" : "hidden"
        } `}
      >
        <ImgSlider type="night" />
      </div>
      <div
        className={`h-96 w-full px-4 ${
          selectedItem === 2 ? "block" : "hidden"
        } `}
      >
        <ImgSlider type="light" />
      </div>
    </div>
  );
}
