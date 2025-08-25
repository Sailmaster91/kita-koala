import './tarjetasColores.css';
import { useState, useRef, useEffect } from "react";

const AUTO_FLIP_MS = 5000; // tiempo para volver a voltearse

const TarjetaColores = () => {
  const tarjetas = [
    {
      image: "./img/koala-chanter.png",
      bg: "bg-koala-green",
      text: "Lecture & langage",
      backText: "Histoires, chansons et jeux de rimes."
    },
    {
      image: "./img/Koala-dormt.png",
      bg: "bg-koala-yellow",
      text: "Affection et communication",
      backText: "Écoute active, rituels et mots positifs."
    },
    {
      image: "./img/kosls-count.png",
      bg: "bg-koala-salmon",
      text: "Apprentissage des nombres",
      backText: "Compter, trier et comparer en jouant."
    },
    {
      image: "./img/kaola-pusset.png",
      bg: "bg-koala-blue",
      text: "Conversations en mouvement",
      backText: "Mettre des mots sur chaque découverte."
    }
  ];

  // estado de cada tarjeta (frente/reverso)
  const [flipped, setFlipped] = useState(Array(tarjetas.length).fill(false));

  // timers por tarjeta para el auto-flip
  const timersRef = useRef([]);

  const clearTimer = (i) => {
    if (timersRef.current[i]) {
      clearTimeout(timersRef.current[i]);
      timersRef.current[i] = undefined;
    }
  };

  const scheduleAutoFlip = (i) => {
    clearTimer(i);
    timersRef.current[i] = setTimeout(() => {
      setFlipped((prev) => {
        if (!prev[i]) return prev; // si ya volvió, no tocar
        const next = [...prev];
        next[i] = false; // regresar al frente
        return next;
      });
    }, AUTO_FLIP_MS);
  };

  const toggleFlip = (i) => {
    setFlipped((prev) => {
      const next = [...prev];
      const willFlipTo = !prev[i];
      next[i] = willFlipTo;

      if (willFlipTo) scheduleAutoFlip(i);
      else clearTimer(i);

      return next;
    });
  };

  useEffect(() => {
    // limpieza al desmontar
    return () => timersRef.current.forEach((t) => t && clearTimeout(t));
  }, []);

  const handleKey = (e, i) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleFlip(i);
    }
  };

  return (
    <div className="container-max grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {tarjetas.map(({ image, bg, text, backText }, index) => (
        <div key={index} className="card-container rounded-3xl">
          <div
            role="button"
            tabIndex={0}
            onClick={() => toggleFlip(index)}
            onKeyDown={(e) => handleKey(e, index)}
            className={`card ${flipped[index] ? "is-flipped" : ""} 
                        rounded-3xl border border-white/40 shadow-soft cursor-pointer
                       `} // tu alto mínimo
          >
            {/* Cara frontal */}
            <div
              className={`card-face rounded-3xl ${bg} p-5 flex flex-col justify-between gap-3 items-center select-none`}
            >
              <span className="text-xl md:text-2xl font-semibold text-center">
                {text}
              </span>
              <div className="flex-1 flex items-center justify-center my-2  min-h-[150px]">
                <img
                  src={image}
                  alt={text}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="w-full">
                <p className="text-base md:text-lg font-medium text-center opacity-90">
                  {/* subtexto breve opcional */}
                </p>
              </div>
            </div>

            {/* Cara trasera (solo texto) */}
            <div
              className={`card-face card-back rounded-3xl ${bg} p-6 
                          flex items-center justify-center text-center select-none  font-semibold`}
            >
              <p className=" text-4xl md:text-2xl sm:text-xl leading-relaxed max-w-[24ch] text-white">
                {backText}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TarjetaColores;
