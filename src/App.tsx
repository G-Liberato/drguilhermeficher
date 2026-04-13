/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  CheckCircle2, 
  Star, 
  ShieldCheck, 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  Instagram, 
  X,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Expert Data
const EXPERT = {
  name: "Dr. Guilherme Ficher",
  profession: "Lentes de Porcelana",
  city: "Brooklin - São Paulo",
  whatsapp: "https://api.whatsapp.com/send/?phone=5511943088899&text=Olá Dr. Guilherme, gostaria de agendar minha primeira consulta gratuita.&type=phone_number&app_absent=0",
  instagram: "https://www.instagram.com/p/CxvMVH2Acbz/?img_index=2",
};

// Images
const IMAGES = {
  hero: "https://i.imgur.com/tA33hEP.png",
  expert: "https://i.imgur.com/YaD4YgG.jpeg",
  results: [
    "https://i.imgur.com/XJFY7je.jpeg",
    "https://i.imgur.com/UfmwvBi.jpeg",
    "https://i.imgur.com/Qi2GJJl.jpeg",
    "https://i.imgur.com/v59Zqxx.jpeg",
    "https://i.imgur.com/QHjYAGM.jpeg",
    "https://i.imgur.com/AKploVK.jpeg",
    "https://i.imgur.com/4cfSvqM.jpeg",
    "https://i.imgur.com/DeNsGB0.jpeg",
    "https://i.imgur.com/5wrqfJo.jpeg",
    "https://i.imgur.com/QCiz7H1.jpeg",
  ]
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <section className={`py-16 px-6 ${className}`}>
    <div className="max-w-md mx-auto">
      {children}
    </div>
  </section>
);

const Button = ({ href, children, variant = "primary", className = "" }: { href: string; children: React.ReactNode; variant?: "primary" | "secondary"; className?: string }) => {
  const baseStyles = "flex items-center justify-center gap-2 py-4 px-8 rounded-full font-semibold transition-all duration-300 shadow-lg active:scale-95";
  const variants = {
    primary: "bg-[#25D366] text-white hover:bg-[#128C7E]",
    secondary: "bg-premium-dark text-white hover:bg-black",
  };
  
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </a>
  );
};

export default function App() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % IMAGES.results.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (selectedImage !== null) {
      setSelectedImage((selectedImage - 1 + IMAGES.results.length) % IMAGES.results.length);
    }
  };

  return (
    <div className="min-h-screen bg-premium-cream selection:bg-premium-gold selection:text-white">
      {/* 1. HERO */}
      <section className="relative min-h-[90vh] flex flex-col justify-end overflow-hidden bg-premium-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt={EXPERT.name} 
            className="w-full h-full object-cover object-center opacity-80"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-premium-dark via-premium-dark/40 to-transparent" />
        </div>
        
        <div className="relative z-10 px-6 pb-12 max-w-md mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-premium-gold uppercase tracking-[0.2em] text-xs font-semibold mb-3 block">
              {EXPERT.profession}
            </span>
            <h1 className="text-white text-5xl font-serif mb-4 leading-tight">
              Eu sou <br />
              <span className="text-premium-gold italic">{EXPERT.name}</span>, <br />
              seu dentista no {EXPERT.city.split(' - ')[0]}.
            </h1>
            <p className="text-white/80 text-lg mb-8 font-light leading-relaxed">
              Transformando sorrisos com a excelência das lentes de porcelana. Sua nova versão começa aqui.
            </p>
            
            <Button href={EXPERT.whatsapp} className="w-full mb-4">
              <MessageCircle size={20} />
              Agendar consulta gratuita
            </Button>
            <p className="text-white/50 text-center text-xs tracking-wide">
              Resposta rápida • Sem compromisso
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <Section className="bg-white">
        <div className="flex flex-col gap-8">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl"
          >
            <img 
              src={IMAGES.expert} 
              alt={EXPERT.name} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <div>
            <h2 className="text-3xl font-serif mb-6 text-premium-dark">Excelência em cada detalhe</h2>
            <p className="text-premium-dark/70 leading-relaxed mb-6">
              Acredito que um sorriso não é apenas estética, é confiança. Meu trabalho é focado em entregar resultados naturais e harmônicos, respeitando a individualidade de cada paciente.
            </p>
            <ul className="space-y-4">
              {[
                "Especialista em Lentes de Porcelana",
                "Foco em Naturalidade e Harmonia",
                "Atendimento Personalizado e Humano",
                "Tecnologia de Ponta no Brooklin"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-premium-dark/80">
                  <CheckCircle2 size={18} className="text-premium-gold" />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* 3. RESULTADOS REAIS */}
      <Section className="bg-premium-cream">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-serif mb-2">Resultados Reais</h2>
          <p className="text-premium-dark/60 italic">Transformações que inspiram confiança</p>
        </div>
        
        <div className="grid grid-cols-2 gap-3">
          {IMAGES.results.map((img, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => openLightbox(i)}
              className="aspect-square rounded-xl overflow-hidden shadow-md cursor-pointer bg-white"
            >
              <img 
                src={img} 
                alt={`Resultado ${i + 1}`} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          ))}
        </div>
        <p className="text-center text-[10px] text-premium-dark/40 mt-6 uppercase tracking-widest">
          Resultados podem variar de pessoa para pessoa.
        </p>
      </Section>

      {/* 4. POR QUE CONFIAR */}
      <Section className="bg-premium-dark text-white">
        <h2 className="text-3xl font-serif mb-10 text-center">Por que confiar em mim?</h2>
        <div className="grid gap-6">
          {[
            {
              icon: <ShieldCheck className="text-premium-gold" />,
              title: "Avaliação Honesta",
              desc: "Diagnósticos precisos e transparentes sobre o que é melhor para você."
            },
            {
              icon: <MessageCircle className="text-premium-gold" />,
              title: "Atendimento Direto",
              desc: "Sem intermediários. Você fala diretamente comigo para tirar suas dúvidas."
            },
            {
              icon: <Star className="text-premium-gold" />,
              title: "Foco no Resultado",
              desc: "Comprometimento total com a sua satisfação e o seu novo sorriso."
            },
            {
              icon: <Sparkles className="text-premium-gold" />,
              title: "Estética Premium",
              desc: "Uso dos melhores materiais do mercado para um acabamento impecável."
            }
          ].map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/10"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-serif mb-2 text-premium-gold">{card.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <Section className="bg-premium-gold text-premium-dark text-center">
        <h2 className="text-3xl font-serif mb-4">Dê o primeiro passo hoje</h2>
        <p className="mb-8 font-medium opacity-90">
          Sua primeira consulta de avaliação é totalmente gratuita e sem compromisso.
        </p>
        <Button href={EXPERT.whatsapp} variant="secondary" className="w-full">
          <MessageCircle size={20} />
          Falar no WhatsApp agora
        </Button>
      </Section>

      {/* 6. COMO FUNCIONA */}
      <Section className="bg-white">
        <h2 className="text-3xl font-serif mb-12 text-center">Como funciona</h2>
        <div className="space-y-12">
          {[
            {
              step: "01",
              title: "WhatsApp",
              desc: "Clique no botão e envie uma mensagem para iniciarmos o contato."
            },
            {
              step: "02",
              title: "Agendamento",
              desc: "Escolhemos o melhor horário para sua visita ao consultório no Brooklin."
            },
            {
              step: "03",
              title: "Avaliação",
              desc: "Realizamos uma análise completa do seu caso sem custo algum."
            }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <span className="text-4xl font-serif text-premium-gold/30 leading-none">{item.step}</span>
              <div>
                <h3 className="text-xl font-serif mb-2">{item.title}</h3>
                <p className="text-premium-dark/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 p-6 bg-premium-cream rounded-2xl border border-premium-gold/20 text-center">
          <p className="text-premium-gold font-bold uppercase tracking-widest text-xs mb-2">Atenção</p>
          <p className="text-premium-dark text-sm font-medium italic">
            "A primeira consulta é o momento de tirar todas as suas dúvidas com total segurança."
          </p>
        </div>
      </Section>

      {/* 8. CTA FINAL */}
      <section className="py-24 px-6 bg-premium-dark text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--color-premium-gold)_0%,_transparent_70%)]" />
        </div>
        
        <div className="relative z-10 max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-serif mb-6 leading-tight">
              Pronto para o seu <br />
              <span className="text-premium-gold">novo sorriso?</span>
            </h2>
            <p className="text-white/70 mb-10 text-lg font-light">
              Não adie a transformação que você merece. Agende agora sua avaliação gratuita.
            </p>
            <Button href={EXPERT.whatsapp} className="w-full py-6 text-xl">
              <MessageCircle size={24} />
              Quero minha consulta gratuita
            </Button>
            <div className="flex items-center justify-center gap-4 mt-8 text-white/40">
              <div className="flex items-center gap-1">
                <Calendar size={14} />
                <span className="text-xs">Vagas Limitadas</span>
              </div>
              <div className="w-1 h-1 rounded-full bg-white/20" />
              <div className="flex items-center gap-1">
                <ShieldCheck size={14} />
                <span className="text-xs">100% Seguro</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="py-12 px-6 bg-white border-t border-premium-dark/5 text-center">
        <div className="max-w-md mx-auto">
          <h3 className="font-serif text-2xl mb-1">{EXPERT.name}</h3>
          <p className="text-premium-gold font-medium text-sm mb-4 uppercase tracking-widest">{EXPERT.profession}</p>
          <p className="text-premium-dark/50 text-sm mb-8">{EXPERT.city}</p>
          
          <div className="flex justify-center gap-6 mb-8">
            <a href={EXPERT.instagram} target="_blank" rel="noopener noreferrer" className="text-premium-dark/40 hover:text-premium-gold transition-colors">
              <Instagram size={24} />
            </a>
            <a href={EXPERT.whatsapp} target="_blank" rel="noopener noreferrer" className="text-premium-dark/40 hover:text-premium-gold transition-colors">
              <MessageCircle size={24} />
            </a>
          </div>
          
          <p className="text-[10px] text-premium-dark/30 uppercase tracking-[0.2em]">
            © {new Date().getFullYear()} • Todos os direitos reservados
          </p>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
          >
            <button 
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-2"
            >
              <X size={32} />
            </button>
            
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2"
            >
              <ChevronLeft size={48} />
            </button>
            
            <motion.div 
              key={selectedImage}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="max-w-full max-h-[80vh] relative"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={IMAGES.results[selectedImage]} 
                alt="Resultado ampliado" 
                className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-12 left-0 right-0 text-center text-white/60 text-sm">
                {selectedImage + 1} / {IMAGES.results.length}
              </div>
            </motion.div>
            
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/50 hover:text-white p-2"
            >
              <ChevronRight size={48} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating WhatsApp for Mobile */}
      <motion.a
        href={EXPERT.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 2, type: 'spring' }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-90"
      >
        <MessageCircle size={28} />
      </motion.a>
    </div>
  );
}
