import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import type { ProjectImage, ProjectImagesProps } from "./types";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.scss";

export function ProjectImages({ images }: ProjectImagesProps) {
  return (
    <div className="project-images-con flex justify-center">
      <div className="inner-con">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          navigation
        >
          {images.map((imageItem: ProjectImage, index) => {
            const { url, altText } = imageItem;
            return (
              <SwiperSlide key={index}>
                <img
                  className="slide-img rounded object-cover"
                  src={url}
                  alt={altText}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </div>
  );
}
