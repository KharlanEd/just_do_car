import { FaTelegramPlane, FaInstagram, FaViber, FaYoutube, FaTiktok } from "react-icons/fa"
import { Phone, Mail } from "lucide-react"

export function Footer() {
  const socialLinks = [
    { icon: FaTelegramPlane, label: "Telegram", href: "https://t.me/justdocar" },
    { icon: FaInstagram, label: "Instagram", href: "https://instagram.com/just_do_car" },
    // { icon: FaViber, label: "Viber", href: "#" },
    { icon: FaYoutube, label: "YouTube", href: "https://www.youtube.com/@justdocar" },
    { icon: FaTiktok, label: "TikTok", href: "https://tiktok.com/@justdocar" },
  ]

  const menuLinks = [
    { label: "головна", href: "#" },
    { label: "аукціони", href: "#" },
    { label: "процес купівлі авто", href: "#" },
    { label: "відгуки", href: "#" },
    { label: "адреса", href: "#" },
  ]

  const legalLinks = [
    { label: "політика конфіденційності", href: "/privacy-policy" },
    { label: "публічна оферта", href: "/public-offer" },
  ]

  return (
    <footer style={{ backgroundColor: "#000" }}>
      <div className="container mx-auto px-4 py-12">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Контакты */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ЗВ'ЯЗАТИСЯ З НАМИ</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-orange-500" />
                <div>
                  <a href="tel:+380632012525" className="text-white hover:text-orange-500 transition-colors">
                    063 201 25 25
                  </a>
                  <br />
                  <a href="tel:+380662012525" className="text-white hover:text-orange-500 transition-colors">
                    066 201 25 25
                  </a>
                  <br />
                  <a href="tel:+380982012525" className="text-white hover:text-orange-500 transition-colors">
                    098 201 25 25
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500" />
                <a href="mailto:justdocar@gmail.com" className="text-white hover:text-orange-500 transition-colors">
                  justdocar@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Адрес */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">АДРЕСА</h3>
            <p className="text-gray-300">м. Одеса, вул. Інглезі 2б</p>
          </div>


          {/* Социальные сети */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">НАШІ СОЦМЕРЕЖІ</h3>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-10 h-10 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Нижняя часть */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              {legalLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-sm text-gray-300 hover:text-orange-500 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-sm text-gray-300">© 2024 JustDoCar. Всі права захищені.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
