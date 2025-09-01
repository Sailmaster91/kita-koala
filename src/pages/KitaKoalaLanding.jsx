import { useRef } from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronRight, Baby, BookOpen, Shield, HeartHandshake, Users, Calendar, Star, MapPin, Clock, Shapes, Snail, RockingChair } from 'lucide-react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TarjetaColores from '@/components/tarjetasColores'
import TarifModal from '@/components/modalTarif'
import Tarif from '../components/tarif'
import Galeria from '../components/galeriaKoala'
import ImageModal from '../components/ImageModal'
import ContactForm from '../components/ContactForm'
import Horaires from '../components/Horaires'
import NotreCreche from '../components/NotreCreche'

export default function KitaKoalaLanding() {

	const sections = { about: useRef(null), services: useRef(null), tarifs: useRef(null), contact: useRef(null), horaries: useRef(null) }
	const scrollTo = (id) => {
    const offset = 180; // Ajusta este valor según lo que necesites (en píxeles)
    const element = sections[id]?.current;
    if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: 'smooth' });
    }
}

	const [openModal, setOpenModal] = useState(false)
	const [tarifModal, setTarifModal] = useState(false)

	/*Galeria state*/
	const [selectedImage, setSelectedImage] = useState(null);
	const images = [
		"img/galeria/foto1.jpg",
		"img/galeria/foto2.jpg",
		"img/galeria/foto3.jpg",
		"img/galeria/foto4.jpg",
		"img/galeria/foto5.jpg",

	];


	const tarifModalOpen = (modal) => {
		console.log(modal);

		setOpenModal(true);
		setTarifModal(modal);
	}


	return (
		<div className="min-h-screen text-slate-900">
			<Header onNav={scrollTo} />

			{/* HERO  */}
			<section className="bg-koala-cream">
				<div className="container-max grid md:grid-cols-2 gap-10 items-center py-14">
					<motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="space-y-6">
						<h1 className="text-4xl md:text-5xl font-bold leading-tight text-slate-800">
							Un nid douillet pour
							<span className="block text-emerald-600">grandir et s’épanouir</span>
						</h1>
						<p className="text-slate-600">Un cocon d’amour et d’apprentissage pour vos petits explorateurs !</p>
						<div className="flex flex-wrap gap-3">
							<a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="btn-primary">Planifier une visite <ChevronRight className="w-4 h-4" /></a>
							<a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }} className="btn-outline"><MapPin className="w-4 h-4" /> Localisation</a>
							<a href="#horaries" onClick={(e) => { e.preventDefault(); scrollTo('horaries') }} className="btn-outline"><Clock className="w-4 h-4" /> Horaires</a>
						</div>
						<ul className="text-slate-600 grid sm:grid-cols-3 gap-2">
							{[
								{ icon: Shield, text: 'Sécurité & hygiène' },
								{ icon: Users, text: 'Petits groupes' },
								{ icon: HeartHandshake, text: 'Avec les familles' },
							].map((f, i) => (
								<li key={i} className="flex items-center gap-2 text-sm"><f.icon className="w-4 h-4 text-blue-300" />{f.text}</li>
							))}
						</ul>
					</motion.div>

					<motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: 0.1 }} className="relative">

						<img src="./img/hero_img.png" alt="Illustration koalas" className="w-full h-full object-contain p-0" />

						<div className="absolute -bottom-6 -left-6 bg-white shadow-soft rounded-2xl p-4 flex items-center gap-3">
							<Baby className="w-6 h-6 text-emerald-600" />
							<div className="text-sm"><div className="font-semibold">Dès 3 mois</div><div className="text-slate-500">Crèche & KITA</div></div>
						</div>
					</motion.div>
				</div>
			</section>
			{/* NOTRE CRECHE */}
			<section ref={sections.about} id="about" className="py-20">
			
					<NotreCreche/>
				
			</section>
			{/* TARJETAS COLORES */}
			<section className="py-10">
				<TarjetaColores />
			</section>

			{/* BLOQUES ICONOS */}
			<section className="py-6$" id='services' ref={sections.services}>

				<div className="container-max flex flex-col items-center gap-4 mb-6">
					<h2 className="text-4xl font-bold mb-2 font-secondary text-koala-blue_gray">Nos Services</h2>
					<p className="text-slate-600 text-center p-6" >Chez Kita Koala, nous accompagnons chaque enfant avec douceur, respect et attention à ses besoins. Nos services sont conçus pour favoriser son développement global, tout en rassurant les parents grâce à un encadrement de qualité.</p>
				</div>


				<div className="container-max grid grid-cols-2 md:grid-cols-3 gap-4">
					{[
						{ Icon: HeartHandshake, bg: 'bg-koala-green', text: 'Accueil dès 3 mois', text2: 'Une prise en charge attentive et sécurisée pour les tout-petits.', },
						{ Icon: RockingChair, bg: 'bg-koala-yellow', text: 'Repos équilibré', text2: 'Des temps de repos adaptés au rythme de chaque enfant.' },
						{ Icon: Shapes, bg: 'bg-koala-blue', text: 'Activités éducatives', text2: 'Des jeux et découvertes qui stimulent la curiosité et l’apprentissage.' },
						{ Icon: Snail, bg: 'bg-koala-salmon', text: 'Sorties en pleine nature', text2: 'Des moments en extérieur pour explorer, bouger et respirer.' },
						{ Icon: Star, bg: 'bg-slate-300', text: 'Adaptation personnalisée', text2: 'Un accompagnement sur mesure pour faciliter la transition et le bien-être.' },
					].map(({ Icon, bg, text, text2 }, i) => (
						<div key={i} className={`rounded-2xl ${bg} p-5 border border-white/40`}>
							<div className="w-10 h-10 rounded-xl bg-white/60 grid place-content-center mb-3">
								<Icon className="w-5 h-5 text-slate-700" />
							</div>
							<div className="text-slate-700 text-sm font-semibold">{text}</div>
							<p className="text-slate-600 text-xs mt-1">{text2}</p>
						</div>
					))}
				</div>
			</section>
			<section ref={sections.galeria} id="galeria" className="py-20 container-max">

				<div className="container-max flex flex-col items-center gap-4 mb-6">
					<h2 className="text-4xl font-bold mb-2 font-secondary">Photo Gallery</h2>
					<p className="text-slate-600 text-center px-6" >Photos de activites et des moments inoubliables avec nos enfants.</p></div>
				<Galeria images={images} onSelect={setSelectedImage} />
				<ImageModal selectedImage={selectedImage} onClose={() => setSelectedImage(null)} />


			</section>

			{/* TARIFS */}

			<section ref={sections.tarifs} id="tarifs" className="py-20">
				<div className="container-max">
					<h2 className="text-3xl font-bold mb-8 font-secondary text-center text-koala-blue_gray">Tarifs & subventions</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<Tarif onOpenModal={tarifModalOpen}  />
					</div>
				</div>
			</section>
			<section ref={sections.horaries} id="horaries">
				<Horaires />
			</section>
			{/* CONTACT */}
			<section ref={sections.contact} id="contact" className="py-10 bg-white">
				<div className="container-max grid md:grid-cols-2 gap-12 items-start">
					<div>
						<h2 className="text-3xl font-bold mb-4 text-koala-blue_gray">Contact & visites</h2>
						<p className="text-slate-600 mb-6">Ernst-Schüler-Strasse 31, 2502 Biel
							— À 5 minutes de la gare.</p>
						<ContactForm />

					</div>
					<div className="card p-2">
						<div className="aspect-[4/3] rounded-2xl overflow-hidden bg-koala-blue/50 relative">
							<iframe
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2713.877795677337!2d7.247940777202915!3d47.14066017115093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e194ca6458c85%3A0xa09c5a311631ff98!2sErnst-Sch%C3%BCler-Strasse%2031%2C%202502%20Biel!5e0!3m2!1sfr!2sch!4v1755722436320!5m2!1sfr!2sch"
								className="absolute top-0 left-0 w-full h-full"
								style={{ border: 0 }}
								allowFullScreen
								loading="lazy"
								referrerPolicy="no-referrer-when-downgrade"
							></iframe>
						</div>
					</div>
				</div>
			</section>

			{openModal && (
				<TarifModal modal={tarifModal} closeModal={setOpenModal} lien={sections.contact} scrollTo={scrollTo} />

			)}



			<Footer />

		</div>
	)
}