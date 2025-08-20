import { Phone, Mail, MapPin } from 'lucide-react'

export default function Footer(){
  return (
    <footer className="mt-24">
      <div className="footer-wave h-28 bg-koala-blue"/>
      <div className="bg-koala-slate text-slate-100">
        <div className="container-max py-12 grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 grid place-content-center text-white font-bold">K</div>
              <div>
                <div className="font-semibold">Kita‑Crèche Koala</div>
                <div className="text-xs text-slate-300">Biel/Bienne</div>
              </div>
            </div>
            <p className="text-sm text-slate-200">Chez Koala, nous créons un cocon affectueux où chaque enfant peut s’épanouir à son rythme.</p>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Contact</div>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Phone className="w-4 h-4"/> +41 32 000 00 00</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4"/> bonjour@koalakids.ch</li>
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4"/> Ernst-Schüler-Strasse 31, 2502 Biel
</li>
            </ul>
          </div>
          <div className="text-sm">
            <div className="font-semibold mb-3">Liens</div>
            <ul className="space-y-2 text-slate-200">
              <li><a href="#about" className="hover:underline">Notre crèche</a></li>
              <li><a href="#services" className="hover:underline">Services</a></li>
              <li><a href="#tarifs" className="hover:underline">Tarifs</a></li>
              <li><a href="#contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/10">
          <div className="container-max py-4 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
            <span>© {new Date().getFullYear()} Kita‑Crèche Koala</span>
            <span>Mentions légales • Politique de confidentialité</span>
          </div>
        </div>
      </div>
    </footer>
  )
}