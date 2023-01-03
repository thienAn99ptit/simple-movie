import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

function SwiperComponent({
  grabCursor = "true",
  spaceBetween = 40,
  slidesPerView = 4,
  data,
  chilrenComponent,
}) {
  const ChildrenItem = chilrenComponent;
  return (
    <Swiper
      grabCursor={grabCursor}
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
    >
      {data.length > 0 &&
        data.map((item, index) => (
          <SwiperSlide key={item.id ? item.id : index}>
            <ChildrenItem data={item} />
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default SwiperComponent;
