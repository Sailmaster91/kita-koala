import { useState } from 'react'
import { Phone, Mail, ChevronRight } from 'lucide-react'

export default function Header({ onNav }){
  const [open,setOpen]=useState(false)
  const nav=[
    {id:'about',label:'Notre crèche'},
    {id:'services',label:'Nos Services'},
    {id:'tarifs',label:'Tarifs'},
    {id:'contact',label:'Contact'},
  ]
  const go=(id)=>{ onNav?.(id); setOpen(false) }
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
      <div className="w-full bg-white">
        <div className="container-max py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="leading-tight">
            <img src="./img/logocreche.png" type="image/png" alt="Kita‑Crèche Koala" className="w-48 " onError={(e)=>{e.currentTarget.style.display='flex'}}/>

            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            {nav.map(n=> (
              <button key={n.id} onClick={()=>go(n.id)} className="text-sm text-slate-600 hover:text-slate-900">{n.label}</button>
            ))}
            <a href="#contact" onClick={(e)=>{e.preventDefault();go('contact')}} className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium shadow-sm hover:shadow">
              Planifier une visite <ChevronRight className="w-4 h-4"/>
            </a>
          </nav>
          <div className="hidden md:flex items-center gap-5 text-sm">
            <a href="tel:+41320000000" className="flex items-center gap-2 text-slate-600"><Phone className="w-4 h-4"/>+41 32 000 00 00</a>
            <a href="mailto:bonjour@koalakids.ch" className="flex items-center gap-2 text-slate-600"><Mail className="w-4 h-4"/>bonjour@koalakids.ch</a>
          </div>
          <button onClick={()=>setOpen(!open)} className="md:hidden inline-flex items-center px-3 py-2 rounded-lg border border-slate-300">
            <span className="sr-only">Menu</span>
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-max py-3 grid gap-2">
            {nav.map(n=> <button key={n.id} onClick={()=>go(n.id)} className="text-left py-2 text-slate-700">{n.label}</button>)}
            <a href="#contact" onClick={(e)=>{e.preventDefault();go('contact')}} className="mt-2 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium">Planifier une visite <ChevronRight className="w-4 h-4"/></a>
          </div>
        </div>
      )}
    </header>
  )
}