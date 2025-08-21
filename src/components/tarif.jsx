import { ChevronRight, Baby, BookOpen, Shield, HeartHandshake, Users, Calendar, Star, MapPin, Clock } from 'lucide-react'


const Tarif = ({onOpenModal}) => {

  const enfantsModal = {
    tarifType: "Enfants (3mois - 12 mois)",
    tarifPresence: [
      { icon: null, tarif: "Toute la journée", price: "130 CHF" },
      { icon: null, tarif: "Demi-Journée (matin)", price: "90 CHF" },
      { icon: null, tarif: "Aprés-midi", price: "70 CHF" },
    ],
    tarifRepas: [
      { icon: 'icon_deje.svg', tarif: "Petite déjeurner", price: "Gratuit" },
      { icon: 'icon-repa.svg', tarif: "Repas du midi", price: "5.50 CHF" },
      { icon: 'icon-gouter.svg', tarif: "Le goûter", price: "1.5 CHF" },
    ],
    imagefooter: 'src/assets/img/babys-img.svg'
  }

  const enfantsModal1 = {
    tarifType: "Enfants (12 mois - 5 ans)",
    tarifPresence: [
      { icon: null, tarif: "Toute la journée", price: "130 CHF" },
      { icon: null, tarif: "Demi-Journée (matin)", price: "90 CHF" },
      { icon: null, tarif: "Aprés-midi", price: "70 CHF" },
    ],
    tarifRepas: [
      { icon: 'icon_deje.svg', tarif: "Petite déjeurner", price: "Gratuit" },
      { icon: 'icon-repa.svg', tarif: "Repas du midi", price: "5.50 CHF" },
      { icon: 'icon-gouter.svg', tarif: "Le goûter", price: "1.5 CHF" },
    ],
    imagefooter: 'src/assets/img/enfants-jouent.svg'
  }


    return (
<>
  {[
              { title: "Bébés (3–12 mois)", desc: "Découvrir les tarifs détaillés, les horaires et les aides disponibles pour les bébés", bg: 'bg-koala-green', dot: '#F3E8B5', modal: enfantsModal , image: './img/tarif-img1.jpg' },
              { title: "Petits explorateurs (12 mois–5 ans)", desc: " Découvrir les tarifs détaillés, les horaires et les aides disponibles pour les enfants", bg: 'bg-koala-blue', dot: '#7AA3C0', modal: enfantsModal1 ,image: './img/tarif-img2.jpg'},
            ].map((t, i) => (
              <div key={i} className={`relative card overflow-hidden `}>
                   <div className='img-tarif'>
                        <img src={`${t.image}`} className='object-cover  aspect-[4/3] w-full max-h-[2502pxpx]' ></img>
                    </div>
                <div className={`p-6 md:p-8 ${t.bg}`}>
                 
                  <h3 className="text-xl font-semibold text-slate-800 font-secondary">{t.title}</h3>
                  <p className="text-slate-700 mt-2 max-w-md">{t.desc}</p>
                  <button key={i} className=" font-secondary btn-primary mt-5" onClick={(e) => {
                    onOpenModal(t.modal);
                    
                  }}> voir tarifs
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="badge-dot" style={{ background: t.dot }} />
              </div>
            ))}
</>

    );
}

export default Tarif;