import mockup1 from "./assets/mockup1.png";
import mockup2 from "./assets/mockup2.png";
import mockup3 from "./assets/mockup3.png";
import mockup4 from "./assets/mockup4.png";
import logo from "./assets/logo.png";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="h-screen w-full flex flex-col justify-center overflow-hidden">
      <div className="h-screen w-full absolute z-10 bg-gradient-to-b from-black from-8% to-transparent"></div>
      <div className="w-full h-2/5 absolute top-0 z-20">
        <div className="w-full h-full flex flex-col pt-5 items-center justify-between">
          <div className="h-1/4">
            <img src={logo} alt="" className="h-full" />
          </div>
          <p className="text-white text-xl md:text-3xl lg:text-5xl xl:text-7xl">
            Bring Your New Friend With You!
          </p>
        </div>
      </div>
      <div className="w-screen h-2/3  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        <motion.div
          className="w-full h-full hidden xl:block"
          animate={{
            y: [50, -50, 50],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img
            src={mockup1}
            alt=""
            className=" object-cover w-full h-full scale-110"
          />
        </motion.div>
        <motion.div
          className="w-full h-full hidden xl:block"
          animate={{
            y: [-40, 30, -40],
          }}
          transition={{
            duration: 15,
            delay: 1,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img
            src={mockup2}
            alt=""
            className=" object-cover w-full h-full scale-50"
          />
        </motion.div>
        <motion.div
          className="w-full h-full"
          animate={{
            y: [70, -10, 70],
          }}
          transition={{
            duration: 10,
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img
            src={mockup3}
            alt=""
            className=" object-cover w-full h-full scale-125"
          />
        </motion.div>
        <motion.div
          className="w-full h-full hidden md:block"
          animate={{
            y: [-70, 0, -70],
          }}
          transition={{
            duration: 10,
            delay: 0.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <img
            src={mockup4}
            alt=""
            className=" object-cover w-full h-full scale-90"
          />
        </motion.div>
      </div>
    </div>
  );
}
