import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { ProjectImagesProps } from "./types";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";

export function ProjectImages({ images }: ProjectImagesProps) {
  if (!images?.length) {
    return null;
  }

  return (
    <div className="project-images-con flex justify-center">
      <div className="inner-con w-full max-w-3xl">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={24}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
        >
          {images.map((image: string, index) => {
            return (
              <SwiperSlide key={index}>
                <img
                  className="slide-img rounded-xl object-cover"
                  src={image}
                  alt={`Project screenshot ${index + 1}`}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
