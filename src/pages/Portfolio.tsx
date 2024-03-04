import { useParallax } from "react-scroll-parallax";
import donate from "../assets/donate.png";
import prezem from "../assets/prezempage.png";
import bank from "../assets/banking.png";
import unipia from "../assets/unipia.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef } from "react";

const Portfolio = () => {
  const windowWidth = useRef(window.innerWidth);
  console.log(windowWidth?.current);

  const parallax = useParallax<HTMLDivElement>({
    easing: [1, -0.75, 0.5, 1.34],
    translateX: windowWidth?.current > 480 ? [40, 360] : [50, 360],
  });

  return (
    <div className="flex flex-col dark:text-white w-full">
      <div className="mt-5 text-3xl">Portfolio</div>
      <div className="mt-2 text-xl">Let's have a look at my portfolio</div>

      <div className="flex gap-3 rounded-sm mt-5  mb-5 " ref={parallax.ref}>
        <Carousel className="">
          <CarouselContent>
            <CarouselItem className="flex justify-between col-span-2">
              <div className="flex flex-col col-span-3">
                <div className="text-3xl max-[480px]:text-2xl">
                  Donate Page 💵
                </div>
                <div className="text-1xl font-mono mt-5">
                  Description: Web for streamer show info
                </div>
                <div className="text-1xl font-mono">
                  Tech: NextJS, Material UI, NestJS, Cloud
                </div>
                <div className="text-1xl font-mono">
                  Link:{" "}
                  <a href="https://donate.phatsaygame.live" target="_blank">
                    click here 👉
                  </a>
                </div>
              </div>
              <img
                src={donate}
                alt=""
                className="object-scale-down  w-[50%] h-[200px]"
              />
            </CarouselItem>
            <CarouselItem className="flex justify-between col-span-2">
              <div className="flex flex-col col-span-3">
                <div className="text-3xl max-[480px]:text-2xl">
                  Prezem Web 🍲📍
                </div>
                <div className="text-1xl font-mono mt-5">
                  Description: Prezem is an application designed for sharing
                  culinary experiences on Naver Map, where users can check in
                  and explore dining locations.
                </div>
                <div className="text-1xl font-mono">
                  Tech: ReactJS, Typescript, Material UI, Naver map.
                </div>
                <div className="text-1xl font-mono">
                  Link:{" "}
                  <a href="https://prezem.site" target="_blank">
                    click here 👉
                  </a>
                </div>
              </div>
              <img
                src={prezem}
                alt=""
                className="object-scale-down  w-[50%] h-[200px]  "
              />
            </CarouselItem>
            <CarouselItem className="flex justify-between col-span-2">
              <div className="flex flex-col col-span-3">
                <div className="text-3xl max-[480px]:text-2xl">
                  ATM Banking 🏧
                </div>
                <div className="text-1xl font-mono mt-5">
                  Description: The basic fund transfer functionality of the ATM
                  Banking.
                </div>
                <div className="text-1xl font-mono">
                  Tech: ReactJS, Typescript, Shadn-UI, Tailwind,NestJS.
                </div>
                <div className="text-1xl font-mono">
                  Link:{" "}
                  <a href="https://banking.kaidev.site/" target="_blank">
                    click here 👉
                  </a>
                </div>
              </div>
              <img
                src={bank}
                alt=""
                className="object-scale-down  w-[50%] h-[200px]  "
              />
            </CarouselItem>
            <CarouselItem className="flex justify-between col-span-2">
              <div className="flex flex-col col-span-3">
                <div className="text-3xl max-[480px]:text-2xl">UNIPIA 🏧</div>
                <div className="text-1xl font-mono mt-5">
                  Description:School management, students' academic grades."
                </div>
                <div className="text-1xl font-mono">
                  Tech: PHP, HTML/CSS, Javascript, Jquery.
                </div>
                <div className="text-1xl font-mono">
                  Link:{" "}
                  <a href="https://unipia.brickmate.kr/app/" target="_blank">
                    click here 👉
                  </a>
                </div>
              </div>
              <img
                src={unipia}
                alt=""
                className="object-scale-down  w-[50%] h-[200px]  "
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Portfolio;
