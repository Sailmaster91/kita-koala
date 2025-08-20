import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import "./galeriaKoala.css";
import GalleryItem from "./GalleryItem"

function Galeria({ images, onSelect }) {
  return (
    <div className="grid-galeria">
      {images.map((src, i) => (
        <GalleryItem key={i} id={i}>
          <img
            src={src}
            alt={`img-${i}`}
            onClick={() => onSelect(src)}
            className="thumbnail"
          />
        </GalleryItem>
      ))}
    </div>
  );
}
 
export default Galeria;