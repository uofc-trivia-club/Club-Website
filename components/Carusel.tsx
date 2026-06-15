import { useState } from "react";
import styles from "../styles/Carousel.module.css"

type CarouselProps = {
  images: string[];
};

function Carousel({ images }: CarouselProps) {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % images.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className={styles.carousel}>
  <button className={styles.carouselBTN} onClick={prevSlide}>&#8592;</button>

  <img
    src={images[index]}
    alt="event"
    className={styles["carousel-image"]}
  />

  <button className={styles.carouselBTN} onClick={nextSlide}>&#8594;</button>
</div>
  );
}

export default Carousel;