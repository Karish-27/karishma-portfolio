import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Noir Atelier",
          path: "/noir.png",
          link: "https://luxe-studio-ecommerce-jf69.vercel.app/",
        },
        {
          title: "Krutik Portfolio",
          path: "/krutik-portfolio.png",
          link: "https://krutik-portfolio-beta.vercel.app/",
        },
        {
          title: "WorkFlow",
          path: "/workflow.png",
          link: "https://workflow-app-amber.vercel.app/login",
        },
        {
          title: "NestPrime Real Estate",
          path: "/realestate.png",
          link: "https://real-estate-webiste-swart.vercel.app/",
        },
        {
          title: "Aurelia Resort",
          path: "/aurelia.png",
          link: "https://aurelia-lyart.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="xl:h-full"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div
            className="grid grid-cols-2 gap-4 xl:overflow-y-auto xl:max-h-[500px] no-scrollbar"
            style={{ gridTemplateRows: "repeat(3, 1fr)" }}
          >
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group h-[160px] sm:h-[220px]"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    fill
                    className="object-cover"
                  />

                  {/* overlay gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title */}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">LIVE</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
