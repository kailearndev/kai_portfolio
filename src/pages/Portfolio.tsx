import donate from "../assets/donate.png";
import prezem from "../assets/prezempage.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Portfolio = () => {
  return (
    <div className="flex flex-col dark:text-white">
      <div className="mt-5 text-3xl">Portfolio</div>
      <div className="mt-2 text-xl">Let's have a look at my portfolio</div>

      <div className="flex gap-3 rounded-sm mt-5  mb-5">
        <Carousel className="w-full">
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
                className="object-scale-down  w-[50%] h-[200px] hover:scale-150  transition duration-300 cursor-pointer  "
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
                className="object-scale-down  w-[50%] h-[200px] hover:scale-150  transition duration-300 cursor-pointer  "
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
