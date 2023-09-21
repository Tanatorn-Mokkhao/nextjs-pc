// "use client";
// import { mySkillMock } from "@/utils/mock/my-skill-mock";
// import { useScroll, motion, useTransform } from "framer-motion";

// import { useRef } from "react";

// const MySkill = () => {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: ref,
//     offset: ["0 1", "1.1 1"],
//   });

//   const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

//   return (
//     <motion.section
//       ref={ref}
//       className="h-screen grid place-content-center"
//       style={{
//         scale: scaleProgress,
//         opacity: scrollYProgress,
//       }}
//     >
//       <h2 className="text-4xl font-bold mb-24">My Skills</h2>
//       <div className="text-lg md:text-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-10">
//         {mySkillMock.map((skill, index) => (
//           <div className="border-2 p-[1rem] bg-secondary/80 rounded-full flex justify-center items-center">
//             {skill}
//           </div>
//         ))}
//       </div>
//     </motion.section>
//   );
// };

// export default MySkill;

"use client";
import { mySkillMock } from "@/utils/mock/my-skill-mock";
import { useScroll, motion, useTransform } from "framer-motion";

import { useRef } from "react";

const MySkill = () => {
  const ref = useRef(null);

  const faindInAnimation = {
    initial: {
      opacity: 0,
      y: 100,
    },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    }),
  };

  const reveral = {
    initial: {
      opacity: 0,
      scale: 0.2,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
  };

  return (
    <section ref={ref} className="h-screen grid place-content-center">
      <motion.h2
        className="text-4xl font-bold mb-24 flex justify-center items-center "
        variants={reveral}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
      >
        My Skills
      </motion.h2>
      <div className="text-lg md:text-xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6  gap-10">
        {mySkillMock.map((skill, index) => (
          <motion.div
            className="border-2 p-[1rem] bg-white  dark:bg-gray-800 font-bold rounded-full flex justify-center items-center"
            variants={faindInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkill;
