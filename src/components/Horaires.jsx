const Horaries = () => {
    return (
    <section className="py-16 bg-koala-blue/10" id="horaries">
      <div className="container-max text-center">
        <h2 className="text-3xl font-bold text-koala-blue mb-6 flex items-center justify-center gap-2">
          <span className="text-4xl">🕒</span> Nos horaires d’accueil
        </h2>
        
        <div className="max-w-md mx-auto bg-white shadow-lg rounded-2xl p-6">
          <ul className="text-lg text-gray-700 space-y-3">
            <li className="flex justify-between border-b pb-2">
              <span className="font-semibold">Lundi – Vendredi</span>
              <span>06h30 – 18h00</span>
            </li>
            <li className="flex justify-between">
              <span className="font-semibold">Samedi & Dimanche</span>
              <span className="text-gray-400">Fermé</span>
            </li>
          </ul>
        </div>
      </div>
    </section>);
    
}

export default Horaries;