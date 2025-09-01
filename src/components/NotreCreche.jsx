
import Horaires from './Horaires'
import SliderInfinito from './sliderInfinito/SliderInfinite'

const NotreCreche = () => {
	const imagesKita = [
		"./img/visite/kita_place1.png",
		"./img/visite/foto_creche1.jpg",
		"./img/visite/kita_place2.png",
		"./img/visite/foto_creche2.jpg",
		"./img/visite/kita_place3.png",
		"./img/visite/kita_place4.png",
		"./img/visite/foto_creche4.jpg",
	    "./img/visite/foto_creche3.jpg"];

	return (


		<section className="notre-creche container-max">
			<h2 className="text-3xl font-bold mb-8 font-secondary text-left text-koala-blue_gray">Notre Crèche Kita Koala à Bienne</h2>
			<div className="grid-notrekita grid gap-4 mb-4 md:grid-cols-2 sm:grid-cols-1 items-center ">
				<div className="texto-kita text-l leading-relaxed text-justify">
					<p className="mb-4"> La Crèche Koala, nous offrons un environnement chaleureux et sécurisé où chaque enfant se sent aimé et respecté. </p>

					<p className="mb-4">Nos valeurs reposent sur la bienveillance, la confiance et l’éveil éducatif, afin d’accompagner vos petits dans leurs premières découvertes.</p>
					<p className="mb-4">Située au cœur de Bienne, notre équipe professionnelle veille chaque jour au développement harmonieux des enfants, en favorisant l’autonomie, la créativité et le partage.
					</p>
					<div className="logo-member w-full flex gap-10 justify-center align-center p-10 sm:gap-5">
						<img src="./logo-kibesuisse.png" alt="Membre Kibessuisse"  className='w-[auto] max-w-[50%] h-[100%] ' />
						<img src="./SBFI_SEFRI_Vignette_140mm_FR.png" alt="vignette SBFI" className='w-[auto] max-w-[50%] h-[150px] sm:max-h-[120px]' /></div>
				</div>
				<SliderInfinito
					photo={imagesKita}
					autoPlay={true}
					interval={3500}
					showArrows
					showDots />
			</div>
		</section>
	);
}

export default NotreCreche;