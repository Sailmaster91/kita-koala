import EnfantsJouent from './enfantsSvg';
import TarifInfo from './Tarif-Info';
import './modalTarif.css'
import BabyFooter from './baby-f';

const TarifModal = ({ modal = {}, closeModal }) => {
	const { tarifType = '' } = modal;

	if (!tarifType) return null;

	const {  tarifPresence = [], tarifRepas = [], imagefooter = '' } = modal;

	if (!tarifPresence.length && !tarifRepas.length) return null;

	return (
		<div className="modalcontainer">

			<div className="tarif-container">
				<div className="tarifInfo">
					<div className="titleTarif">
						<h5>TARIF - KITA-CRÉCHE KOALA</h5>
						<h1>{tarifType}</h1>
					</div>
					<TarifInfo  tarifType = {tarifPresence}/>
					<TarifInfo  tarifType = {tarifRepas}/>

					
					<p className='fraisIncription'>Frais d’inscription:<span>CHF 200.–</span> (par enfant unique).</p>
					<p className='noteFrais'>Tarifs indicatifs. Contactez‑nous pour les subventions communales et un devis personnalisé.</p>

				</div>

				<button className='btn-close' onClick={() => closeModal(false)}>
					<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-square" viewBox="0 0 16 16">
						<path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
					</svg></button>
				<section className="footerDes ">
					<div className="imgFooter">
						<img src={modal.imagefooter} alt=""  className="mx-auto" />
					</div>
					<div className="tarifActionBtn">
						<button className='contact-btn'>Contacté nous</button>
						<button className='fermer-btn' onClick={() => closeModal(false)}>Fermer</button>
					</div>

				</section>
			</div>
		</div>


	);
}



export default TarifModal;