import { Phone, MapPin } from "lucide-react"

export function ContactSection() {
  return (
    <section id="address" className="py-20" style={{ backgroundColor: "#0b1254" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">НАША АДРЕСА</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
              <div className="aspect-[4/3]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2747.8234567890123!2d30.7233!3d46.4825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c631368c9b0000%3A0x0!2z0LLRg9C7LiDQhtC90LPQu9C10LfRliAyYiwg0J7QtNC10YHQsA!5e0!3m2!1suk!2sua!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="JustDoCar офіс в Одесі"
                />
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8">
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-white mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">м. Одеса, вул. Інглезі 2б</h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    Наш офіс розташований в Одесі. Приїжджайте на консультацію або для огляду доставлених
                    автомобілів.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white"/>
                  <a href="tel:+380632012525" className="text-white hover:text-white/80 transition-colors">
                    +38 (063) 201-25-25
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white"/>
                  <a href="tel:+380632012525" className="text-white hover:text-white/80 transition-colors">
                    +38 (066) 201-25-25
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-white"/>
                  <a href="tel:+380632012526" className="text-white hover:text-white/80 transition-colors">
                    +38 (098) 201-25-25
                  </a>
                </div>
                <div className="pt-4">
                  <h4 className="text-lg font-bold text-white mb-2">Години роботи:</h4>
                  <p className="text-white/90">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-white/90">Сб: 10:00 - 16:00</p>
                  <p className="text-white/90">Нд: вихідний</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
