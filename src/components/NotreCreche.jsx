
import Horaires from './Horaires'
import SliderInfinito from './sliderInfinito/SliderInfinite'

const NotreCreche = () => {
	const imagesKita = [
		"https://picsum.photos/500/?random=1",
		"https://picsum.photos/500/?random=2",
		"https://picsum.photos/500/?random=3",
		"https://picsum.photos/500/?random=4",
		"https://picsum.photos/500/?random=5",
		"https://picsum.photos/500/?random=6",];

	return (


		<section className="notre-creche container-max">
			<h2 className="text-3xl font-bold mb-8 font-secondary text-left text-koala-blue_gray">Notre Crèche Kita Koala à Bienne</h2>
			<div className="grid-notrekita grid gap-4 mb-4 md:grid-cols-2 sm:grid-cols-1 items-center ">
				<div className="texto-kita text-l leading-relaxed text-justify">
					<p className="mb-4"> La Crèche Koala, nous offrons un environnement chaleureux et sécurisé où chaque enfant se sent aimé et respecté. </p>

					<p className="mb-4">Nos valeurs reposent sur la bienveillance, la confiance et l’éveil éducatif, afin d’accompagner vos petits dans leurs premières découvertes.</p>
					<p className="mb-4">Située au cœur de Bienne, notre équipe professionnelle veille chaque jour au développement harmonieux des enfants, en favorisant l’autonomie, la créativité et le partage.
					</p>
					<Horaires />
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