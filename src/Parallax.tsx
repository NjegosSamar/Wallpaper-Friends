import parallax from "./assets/parallax.png";
import mockup from "./assets/parallax-mockup.png";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Parallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const mockupY = useTransform(scrollYProgress, [0, 1], ["-150%", "150%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center mb-6"
    >
      <motion.div
        className="font-bold relative z-10 justify-center items-center flex"
        style={{
          y: mockupY,
        }}
      >
        <img src={mockup} alt="" className="w-4/5 xl:w-2/5 object-cover" />
      </motion.div>

      <motion.div className="absolute inset-0 z-0">
        <img src={parallax} alt="" className="w-full h-full object-cover" />
      </motion.div>
    </div>
  );
}
