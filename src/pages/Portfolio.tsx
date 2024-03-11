import bank from "../assets/banking.png";
import donate from "../assets/donate.png";
import prezem from "../assets/prezempage.png";
import unipia from "../assets/unipia.png";

import { motion } from "framer-motion";
import { useRef } from "react";

const Portfolio = () => {
  const project = [
    {
      id: 1,
      name: "Donate Page 💵",
      description: "Web for streamer show info",
      tech: "NextJS, Material UI, NestJS, Naver Cloud",
      link: "https://donate.phatsaygame.live",
      img: `${donate}`,
    },
    {
      id: 2,
      name: "Prezem Web 🍲📍",
      description:
        "Prezem is an application designed for sharing culinary experiences on Naver Map, where users can check in and explore dining locations.",
      tech: "ReactJS, Typescript, Material UI, Naver map",
      link: "https://prezem.site",
      img: `${prezem}`,
    },
    {
      id: 3,
      name: "ATM Banking 🏧",
      description: "The basic fund transfer functionality of the ATM Banking.",
      tech: "ReactJS, Typescript, Shadn-UI, Tailwind, NestJS.",
      link: "https://banking.kaidev.site/",
      img: `${bank}`,
    },
    {
      id: 4,
      name: "UNIPIA",
      description: "School management, students academic grades.",
      tech: "PHP, HTML/CSS, Javascript, Jquery.",
      link: "https://unipia.brickmate.kr/app/",
      img: `${unipia}`,
    },
  ];

  const windowWidth = useRef(window.innerWidth);

  return (
    <div className="flex flex-col dark:text-white w-full">
      <div className="mt-5 text-3xl">Portfolio</div>
      <div className="mt-2 text-xl">Let's have a look at my portfolio</div>
      <div className="">
        {project.map((item) => (
          <div
            key={item.id}
            className="flex mt-5 max-[480px]:flex-col items-center"
          >
            <div className="flex flex-col w-[50%] max-[480px]:w-full">
              <div className="text-3xl max-[480px]:text-2xl">{item.name}</div>
              <div className="text-1xl font-mono mt-5">
                Description: {item.description}
              </div>
              <div className="text-1xl font-mono">Tech: {item.tech}</div>
              <div className="text-1xl font-mono">
                Link:{" "}
                <a href={item.link} target="_blank">
                  click here 👉
                </a>
              </div>
            </div>
            <motion.div
              className="  w-[50%] h-[200px]"
              initial={{ translateX: 0 }}
              whileInView={{
                translateX: windowWidth.current >= 480 ? 100 : 10,
              }}
            >
              <img
                src={item.img}
                alt=""
                className="object-scale-down w-[200px] h-[200px]"
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
