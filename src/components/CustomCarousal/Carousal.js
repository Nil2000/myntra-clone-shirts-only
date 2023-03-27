import { useState, useEffect } from 'react';
import "./Carousal.css"
const Carousel = ({ images, interval = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [preloadedImages, setPreloadedImages] = useState([]);

  const handlePrev = () => {
    setIndex(index === 0 ? images.length - 1 : index - 1);
  }

  const handleNext = () => {
    setIndex(index === images.length - 1 ? 0 : index + 1);
  }

  useEffect(() => {
    const promises = images.map((src) => new Promise((resolve, reject) => {
      const img = new Image();
      img.src = src;
      img.onload = () => resolve(img);
      img.onerror = (err) => reject(err);
    }));

    Promise.all(promises)
      .then((imgs) => setPreloadedImages(imgs))
      .catch((err) => console.error(err));
  }, [images]);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, interval);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <div className="carousel">
      <img src={preloadedImages[index]?.src} alt="" />
      <div className="dots">
        {images.map((image, i) => (
          <span
            key={i}
            className={index === i ? "dot active" : "dot"}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;