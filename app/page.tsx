"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Linkedin,
  Facebook,
  Instagram,
  Star,
  Home,
  Key,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import { useState } from "react"

export default function BusinessCard() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      text: "Adrián nám pomohol nájsť náš vysnívaný byt v centre mesta. Jeho znalosti trhu a dôslednosť urobili celý proces jednoduchým a bez stresu.",
      author: "Anna & Peter K.",
      initials: "AP",
    },
    {
      text: "Profesionálny, spoľahlivý a vždy dostupný. Adrián predal náš dom rýchlo a za skvelú cenu. Určite odporúčam jeho služby!",
      author: "Tomáš M.",
      initials: "TM",
    },
    {
      text: "Výnimočná služba od začiatku do konca. Adriánova odbornosť na bratislavskom trhu je bezkonkurenčná. Sme nesmierne spokojní s naším novým domovom!",
      author: "Elena S.",
      initials: "ES",
    },
  ]

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
      <div className="min-h-screen bg-background">
        {/* Hero Sekcia */}
        <section
            className="
          relative
          px-4
          py-12 md:py-16 lg:py-20
          bg-gradient-to-b from-muted/30 to-background
          md:min-h-[58vh] lg:min-h-[64vh]
        "
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-8 lg:gap-12 items-center lg:items-start">
            {/* Portrét */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative">
                <img
                    src="/adrian-varga.jpg"
                    alt="Adrián Varga - Realitný maklér"
                    className="object-cover rounded-xl shadow-2xl w-64 h-80 sm:w-72 sm:h-96 lg:w-[22rem] lg:h-[28rem]"
                />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent rounded-full flex items-center justify-center shadow-lg">
                  <Home className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-accent-foreground" />
                </div>
              </div>
            </div>

            {/* Obsah */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-4 lg:space-y-5">
              <div>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2">
                  Adrián Varga
                </h1>
                <p className="font-sans text-lg sm:text-xl lg:text-2xl text-muted-foreground mb-3">
                  Real Estate Agent
                </p>
                <p className="font-sans text-base sm:text-lg text-foreground max-w-md lg:max-w-xl lg:pr-6 mx-auto lg:mx-0">
                  Pomôžem vám nájsť ideálny domov v Bratislave
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1">
                <Button asChild size="lg" className="font-sans">
                  <a href="tel:+421948321765">
                    <Phone className="w-5 h-5 mr-2" />
                    Zavolať
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg" className="font-sans bg-transparent">
                  <a href="mailto:adrian.varga.realty@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Poslať email
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* O mne */}
        <section className="py-12 px-4 bg-card border-t border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative inline-block mb-6">
              <h2 className="font-serif text-3xl lg:text-4xl font-bold text-card-foreground">O mne</h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-accent rounded-full"></div>
            </div>
            <p className="font-sans text-lg text-card-foreground leading-relaxed max-w-3xl mx-auto">
              S viac ako 10 rokmi skúseností na bratislavskom realitnom trhu poskytujem personalizované služby
              pri kúpe, predaji a prenájme nehnuteľností. Moje nasadenie, profesionalita a spokojnosť klientov
              vytvorili dlhodobé vzťahy po celom hlavnom meste.
            </p>
          </div>
        </section>

        {/* Služby */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-foreground mb-8">Služby</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Predaj nehnuteľností</h3>
                <p className="font-sans text-muted-foreground flex-grow">
                  Odborné poradenstvo počas celého procesu predaja – od ocenenia až po odovzdanie.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Key className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Prenájom nehnuteľností</h3>
                <p className="font-sans text-muted-foreground flex-grow">
                  Nájdite ideálny prenájom alebo nájomcu s komplexnou podporou a preverovaním.
                </p>
              </Card>

              <Card className="p-6 text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
                <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">Analýza trhu</h3>
                <p className="font-sans text-muted-foreground flex-grow">
                  Podrobné trhové prehľady a ocenenia nehnuteľností na základe aktuálnych trendov.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* Referencie */}
        <section className="py-12 px-4 bg-card border-t border-border/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-center text-card-foreground mb-8">
              Referencie klientov
            </h2>
            <div className="relative">
              <Card className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="font-sans text-card-foreground mb-6 text-lg leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <span className="font-sans font-semibold text-accent-foreground text-sm">
                    {testimonials[currentTestimonial].initials}
                  </span>
                  </div>
                  <p className="font-sans text-sm text-muted-foreground">— {testimonials[currentTestimonial].author}</p>
                </div>
              </Card>

              {/* Carousel Ovládanie */}
              <div className="flex justify-center gap-4 mt-6">
                <Button variant="outline" size="sm" onClick={prevTestimonial} className="w-10 h-10 p-0 bg-transparent">
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <div className="flex gap-2 items-center">
                  {testimonials.map((_, index) => (
                      <button
                          key={index}
                          onClick={() => setCurrentTestimonial(index)}
                          className={`w-2 h-2 rounded-full transition-colors ${
                              index === currentTestimonial ? "bg-accent" : "bg-muted"
                          }`}
                      />
                  ))}
                </div>
                <Button variant="outline" size="sm" onClick={nextTestimonial} className="w-10 h-10 p-0 bg-transparent">
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Kontakt */}
        <section className="py-11 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl font-bold text-foreground mb-8">Kontaktujte ma</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Phone className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Telefón</h3>
                <a
                    href="tel:+421948321765"
                    className="font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  +421 948 321 765
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Email</h3>
                <a
                    href="mailto:adrian.varga.realty@gmail.com"
                    className="font-sans text-muted-foreground hover:text-foreground transition-colors"
                >
                  adrian.varga.realty@gmail.com
                </a>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <MapPin className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-serif text-lg font-semibold mb-2">Adresa</h3>
                <p className="font-sans text-muted-foreground">Bratislava, Slovensko</p>
              </div>
            </div>

            <div className="space-y-4">
              <Button asChild size="lg" className="font-sans">
                <a href="https://calendly.com/adrian-varga" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5 mr-2" />
                  Naplánovať stretnutie
                </a>
              </Button>

              <div className="flex justify-center space-x-6">
                <a
                    href="#"
                    className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Linkedin className="w-6 h-6 text-muted-foreground hover:text-accent-foreground" />
                </a>
                <a
                    href="#"
                    className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Facebook className="w-6 h-6 text-muted-foreground hover:text-accent-foreground" />
                </a>
                <a
                    href="#"
                    className="w-12 h-12 bg-muted rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                >
                  <Instagram className="w-6 h-6 text-muted-foreground hover:text-accent-foreground" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 px-4 bg-card border-t-2 border-border">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-sans text-sm text-muted-foreground mb-2">© 2025 Adrián Varga. Všetky práva vyhradené.</p>
            <p className="font-sans text-xs text-muted-foreground">Vytvorené spoločnosťou PawLynx.</p>
          </div>
        </footer>

        {/* Fixné mobilné tlačidlá */}
        <div className="fixed bottom-4 left-4 right-4 flex gap-3 md:hidden z-50">
          <Button asChild className="flex-1 font-sans">
            <a href="tel:+421948321765">
              <Phone className="w-5 h-5 mr-2" />
              Zavolať
            </a>
          </Button>
          <Button asChild variant="outline" className="flex-1 font-sans bg-background/90 backdrop-blur-sm">
            <a href="mailto:adrian.varga.realty@gmail.com">
              <Mail className="w-5 h-5 mr-2" />
              Email
            </a>
          </Button>
        </div>
      </div>
  )
}
