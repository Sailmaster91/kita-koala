import { CircleChevronLeft, CircleChevronRight, Dot } from 'lucide-react'
import { useEffect, useRef, useState } from 'react';

const SliderInfinite = ({ photo = [], autoPlay = true, interval = 3500, showArrows = false, showDots = true }) => {

	const [currentIndex, setCurrentIndex] = useState(1); // Índice de la imagen actual
	const [disableTransition, setDisableTransition] = useState(false); // Estado de animación
	const position = -currentIndex * 100; // Posición de la imagen actual
	const startX = useRef(null);  // ← para gesto táctil: posición inicial del toque

	 const intervalRef = useRef(null); // ← para guardar el ID del intervalo de autoplay



	const total = photo.length;
	const hasMany = total > 1;
	const slides = total > 0 ? [photo[total - 1], ...photo, photo[0]] : []; // Duplicar las imágenes para el efecto infinito


// --- NAV ---
  const goTo = (i) => setCurrentIndex(i);               // ← ir a un índice específico (de la pista con clones)
  const next = () => hasMany && setCurrentIndex((i) => i + 1); // ← siguiente: avanza 1
  const prev = () => hasMany && setCurrentIndex((i) => i - 1); // ← anterior: retrocede 1




	useEffect(() => {
		if (!disableTransition) return;               // ← si ya está activa, nada que hacer
		const id = requestAnimationFrame(() => setDisableTransition(false)); // ← reactivamos transición
		return () => cancelAnimationFrame(id);        // ← limpieza
	}, [disableTransition, currentIndex]);          // ← si cambia la animación o el índice, reiniciamos


	// función para iniciar autoplay
  const startAutoPlay = () => {
    if (!autoPlay || !hasMany) return;
    stopAutoPlay(); // evitar intervalos duplicados
    intervalRef.current = setInterval(() => {
      setCurrentIndex((i) => i + 1);
    }, interval);
  };

  // función para detener autoplay
  const stopAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // activar autoplay al montar
  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay(); // limpieza al desmontar
  }, [autoPlay, interval, hasMany]);


	// Autoplay con useEffect
	


  // --- TELETRANSPORTE SIN SALTO ---
  // Cuando termina la transición, si caímos en un clon, saltamos al real equivalente sin animación
  const handleTransitionEnd = () => {
    if (!hasMany) return;                         // ← si no hay varias, no hacemos nada
    if (currentIndex === 0) {                            // ← estamos en el clon de la izquierda (antes del primero real)
      setDisableTransition(true);                 // ← apagamos transición para que el salto no se vea
      requestAnimationFrame(() => setCurrentIndex(total)); // ← saltamos al último real (índice total)
    } else if (currentIndex === total + 1) {             // ← estamos en el clon de la derecha (después del último real)
      setDisableTransition(true);                 // ← apagamos transición
      requestAnimationFrame(() => setCurrentIndex(1));   // ← saltamos al primero real (índice 1)
    }
  };






	const transition = !disableTransition ? 'transform 0.5s ease-in-out' : 'none'; // Transición CSS
 // --- TECLADO ---
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") next();         // ← flecha derecha: siguiente
      if (e.key === "ArrowLeft") prev();          // ← flecha izquierda: anterior
    };
    window.addEventListener("keydown", onKey);    // ← escuchamos teclado
    return () => window.removeEventListener("keydown", onKey); // ← limpieza
  }, [hasMany]);                                  // ← no dependemos del índice aquí

  // --- GESTOS TÁCTILES SIMPLES ---
  const onTouchStart = (e) => { startX.current = e.touches[0].clientX; }; // ← guardamos x inicial
  const onTouchEnd = (e) => {
    if (startX.current == null) return;           // ← si no había toque, salimos
    const dx = e.changedTouches[0].clientX - startX.current; // ← desplazamiento horizontal
    const THRESHOLD = 40;                         // ← umbral mínimo en píxeles
    if (dx > THRESHOLD) prev();                   // ← deslizó a la derecha: ir atrás
    if (dx < -THRESHOLD) next();                  // ← deslizó a la izquierda: ir adelante
    startX.current = null;                        // ← reseteamos
  };


	// Índice "real" (0..total-1) para activar el punto correcto
	const realIndex = ((currentIndex - 1 + total) % total); // ← mapeamos índice de pista a índice real

	return (

    <div className="slides-kita flex flex-nowrap  overflow-hidden md:w-[500px] sm:w-[300px] relative mx-auto  rounded-lg shadow-md cursor-pointer"
      role="region"                                // ← accesibilidad: región
      aria-roledescription="carousel"              // ← describe que es un carrusel
      aria-label="Galería de imágenes"             // ← etiqueta legible por screen readers
      onTouchStart={onTouchStart}                  // ← gesto: inicio
	  onTouchEnd={onTouchEnd} 				   // ← gesto: fin
      onMouseEnter={stopAutoPlay}   // 🔹 pausa al entrar
      onMouseLeave={startAutoPlay}  // 🔹 reanuda al salir
         >
		{/* 
			Tailwind width for mobile (sm): 
			Use 'w-[300px]' for 300px width on small screens (sm:).
			Example: 'sm:w-[300px]'
		*/}
			{slides.map((slide, index) => (
				<div key={index} className="slide-kita flex-shrink-0 w-full " style={{ transition, transform: `translateX(${position}%)` } }onTransitionEnd={handleTransitionEnd}>
					<img src={slide} alt={`Image de la crèche ${index + 1}`} className="w-full h-auto " />
				</div>
			))}
			<div className="sliderNav z-10 absolute top-1/2 left-0 right-0 flex justify-between px-4 transform -translate-y-1/2">
				<button className="prev-btn " onClick={prev}><CircleChevronLeft className='w-10 h-10 text-gray-400 hover:text-white' /></button>
				<button className="next-btn " onClick={next}><CircleChevronRight className='w-10 h-10 text-gray-400 hover:text-white' /></button>
			</div>
			<div className="dots  absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{photo.map((_, index) => (
					<button key={index} className={`dot ${index === realIndex ? 'active' : ''}`} onClick={() => setCurrentIndex(index + 1)}>
						<Dot className={`w-6 h-6 ${index === realIndex ? 'text-white' : 'text-gray-400'}`} />
					</button>
				))}
			</div>
		</div>
	);
}

export default SliderInfinite;