'use client';

import {
  Home,
  Building2,
  TrendingUp,
  Shield,
  Search,
  FileCheck,
  Key,
  Mail,
  Phone,
  MapPin,
  Award,
  Users,
  Clock
} from 'lucide-react';
import { useState } from 'react';
import Image from "next/image";

export default function Page() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <main className="relative overflow-hidden">
      {/* Hero Section - Exaggerated Minimalism */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium">
            <MapPin className="w-4 h-4" />
            <span>Bratislava</span>
          </div>

          <h1 className="font-[var(--font-heading)] font-bold tracking-tight mb-6">
            <span className="block text-6xl sm:text-8xl lg:text-9xl text-foreground">
              Adrián
            </span>
            <span className="block text-6xl sm:text-8xl lg:text-9xl text-primary mt-2">
              Varga
            </span>
          </h1>

          <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/70 font-light max-w-3xl mx-auto mb-12 leading-relaxed">
            Váš partner pri hľadaní <span className="text-primary font-medium">vysnívaného domova</span> v Bratislave
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#kontakt"
              className="group px-8 py-4 bg-primary text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
            >
              Začnime spolu
            </a>
            <a
              href="#sluzby"
              className="px-8 py-4 border-2 border-primary/20 text-primary rounded-full font-medium text-lg transition-all duration-300 hover:border-primary hover:bg-primary/5 cursor-pointer"
            >
              Zistite viac
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section - Flowing into next section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Award, number: '10+', label: 'Rokov skúseností' },
              { icon: Users, number: '200+', label: 'Spokojných klientov' },
              { icon: Home, number: '150+', label: 'Predaných nehnuteľností' }
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group cursor-pointer transition-all duration-300"
              >
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110" />
                <div className="text-5xl font-[var(--font-heading)] font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-foreground/70 font-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section - Seamless transition */}
      <section id="o-mne" className="py-32 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-[var(--font-heading)] text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Realitný trh je môj svet
              </h2>
              <p className="text-lg text-foreground/70 leading-relaxed mb-6">
                S viac ako 10-ročnými skúsenosťami v realitnom sektore v Bratislave vám pomôžem nájsť perfektnú nehnuteľnosť, ktorá zodpovedá vašim potrebám a rozpočtu.
              </p>
              <p className="text-lg text-foreground/70 leading-relaxed">
                Špecializujem sa na rezidenčné nehnuteľnosti v Bratislave a okolí. Moja filozofia je jednoduchá: <span className="text-primary font-medium">osobný prístup, transparentnosť a profesionalita</span> v každom kroku.
              </p>
            </div>

            <div className="relative h-96 rounded-3xl overflow-hidden">
              <Image
                  src="/images/varga-image.jpg"
                  alt="Adrián Varga"
                  fill
                  className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="sluzby" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-heading)] text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Služby
            </h2>
            <p className="text-xl text-foreground/70 font-light max-w-2xl mx-auto">
              Komplexné riešenia pre váš realitný sen
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Hľadanie nehnuteľnosti',
                description: 'Nájdem pre vás ideálnu nehnuteľnosť podľa vašich požiadaviek a rozpočtu.'
              },
              {
                icon: TrendingUp,
                title: 'Predaj nehnuteľnosti',
                description: 'Predám vašu nehnuteľnosť za najlepšiu možnú cenu v optimálnom čase.'
              },
              {
                icon: FileCheck,
                title: 'Právne poradenstvo',
                description: 'Kompletná pomoc s dokumentáciou a právnymi náležitosťami.'
              },
              {
                icon: Shield,
                title: 'Ocenenie nehnuteľnosti',
                description: 'Presné ocenenie trhové hodnoty vašej nehnuteľnosti.'
              },
              {
                icon: Key,
                title: 'Prenájom',
                description: 'Pomoc pri prenájme a správe vašich nehnuteľností.'
              },
              {
                icon: Building2,
                title: 'Investičné poradenstvo',
                description: 'Odborné rady pre investície do nehnuteľností v Bratislave.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group p-8 rounded-3xl bg-white/50 dark:bg-white/5 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 cursor-pointer"
              >
                <service.icon className="w-12 h-12 text-primary mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3" />
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Before/After concept */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-secondary/5 to-transparent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-heading)] text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Ako to funguje
            </h2>
            <p className="text-xl text-foreground/70 font-light">
              Jednoduchý proces k vášmu novému domovu
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '01', title: 'Konzultácia', description: 'Zistíme vaše potreby a požiadavky' },
              { number: '02', title: 'Vyhľadávanie', description: 'Nájdeme perfektné možnosti pre vás' },
              { number: '03', title: 'Prehliadky', description: 'Navštívime vybrané nehnuteľnosti' },
              { number: '04', title: 'Uzavretie', description: 'Dokončíme všetky formality' }
            ].map((step, index) => (
              <div key={index} className="text-center group cursor-pointer">
                <div className="text-7xl font-[var(--font-heading)] font-bold text-primary/20 mb-6 transition-all duration-300 group-hover:text-primary/40 group-hover:scale-110">
                  {step.number}
                </div>
                <h3 className="font-[var(--font-heading)] text-2xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio/Properties Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-heading)] text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Portfólio
            </h2>
            <p className="text-xl text-foreground/70 font-light">
              Úspešne realizované projekty
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="group relative h-80 rounded-3xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={`/images/property-${item}.jpg`}
                  alt={`Projekt ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-[var(--font-heading)] text-xl font-semibold mb-2">
                      Projekt {item}
                    </h3>
                    <p className="text-white/80 text-sm">
                      Bratislava
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-primary/5 to-transparent">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-[var(--font-heading)] text-5xl lg:text-7xl font-bold text-foreground mb-6">
              Kontakt
            </h2>
            <p className="text-xl text-foreground/70 font-light">
              Začnime váš príbeh
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Telefón</h3>
                  <a href="tel:+421 948 321 765" className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                    +421 948 321 765
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <a href="mailto:adrian@example.com" className="text-foreground/70 hover:text-primary transition-colors cursor-pointer">
                    adrian.varga.realty@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Adresa</h3>
                  <p className="text-foreground/70">
                    Bratislava, Slovensko
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Pracovný čas</h3>
                  <p className="text-foreground/70">
                    Pondelok - Piatok: 9:00 - 18:00<br />
                    Víkend: Na dohovore
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Meno
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                  Telefón
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Správa
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-white/5 border border-primary/20 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-colors resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary text-white rounded-full font-medium text-lg transition-all duration-300 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/20 cursor-pointer"
              >
                Odoslať správu
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-foreground/50 text-sm">
            © {new Date().getFullYear()} Adrián Varga. Všetky práva vyhradené.
          </p>
        </div>
      </footer>
    </main>
  );
}
