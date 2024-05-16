import about1 from "./assets/about1.png";
import about2 from "./assets/about2.png";

export default function About() {
  return (
    <div className="w-full grid grid-cols-12 grid-rows-8 md:grid-rows-4 xl:grid-rows-2 overflow-x-hidden">
      <div className="col-span-12 md:col-span-6 xl:col-span-5 row-span-2 h-130 p-4">
        <div className="w-full h-full rounded-xl">
          <div className="w-full h-full relative overflow-hidden rounded-xl">
            <p className="w-full px-8 mt-7 absolute z-10 text-4xl">
              Cute Baby Dragons
            </p>
            <img src={about1} alt="" className="w-full absolute -bottom-28" />
          </div>
        </div>
      </div>
      <div className="col-span-12 row-span-2 md:col-span-6 xl:col-span-2 xl:row-span-1 grid grid-cols-3 grid-rows-3 p-4 gap-1">
        <div className="w-full h-full bg-color-box1 rounded-xl"></div>
        <div className="w-full h-full bg-color-box2 rounded-xl"></div>
        <div className="w-full h-full bg-color-box3 rounded-xl"></div>
        <div className="w-full h-full bg-color-box4 rounded-xl"></div>
        <div className="w-full h-full bg-color-box5 rounded-xl"></div>
        <div className="w-full h-full bg-color-box6 rounded-xl"></div>
        <div className="w-full h-full bg-color-box7 rounded-xl"></div>
        <div className="w-full h-full bg-color-box8 rounded-xl"></div>
        <div className="w-full h-full bg-color-box9 rounded-xl"></div>
      </div>
      <div className="order-4 md:order-3 col-span-12 md:col-span-6 xl:col-span-5 row-span-2 p-4">
        <div className="w-full h-full rounded-xl">
          <div className="w-full h-full relative overflow-hidden rounded-xl bg-about">
            <p className="w-full px-8 mt-7 absolute z-10 text-3xl text-white">
              Multiple Designs
            </p>
            <img
              src={about2}
              alt=""
              className="w-full absolute scale-150 bottom-12 md:bottom-14 xl:-bottom-6 md:scale-150 lg:scale-125 xl:scale-100"
            />
          </div>
        </div>
      </div>
      <div className="order-3 md:order-4 col-span-12 md:col-span-4 xl:col-span-2 row-span-2 xl:row-span-1 flex justify-center items-center p-4">
        <p className="w-full text-6xl lg:text-7xl xl:text-4xl text-white px-5 font-semibold">
          Cute <br /> Color Variations
        </p>
      </div>
    </div>
  );
}
