"use client"

import { useState, useEffect, useRef } from "react"
import { Phone, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ProcessSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const processSteps = [
    {
      step: "1.",
      title: "ЗАЯВКА",
      description: "Ви залишаєте заявку або пишете нам у Дірект. Розповідаєте, яке авто шукаєте і який бюджет маєте.",
      image: "/car-consultation-meeting-automotive-business.jpg",
    },
    {
      step: "2.",
      title: "ПІДБІР АВТО",
      description: "Ми підбираємо для вас варіанти автомобілів. Показуємо + фото, історію авто і чесно розповідаємо про стан",
      image: "/car-auction-bidding-automotive-selection.jpg",
    },
    {
      step: "3.",
      title: "ПОКУПКА ТА ДОСТАВКА",
      description: "Після погодження купуємо авто на аукціоні або у перевіреного продавця. Організовуємо доставку в Україну",
      image: "/car-purchase-inspection-automotive-documentation.jpg",
    },
    {
      step: "4.",
      title: "РОЗМИТНЕННЯ",
      description: "Проводимо повне митне оформлення, сплачуємо всі необхідні збори та отримуємо дозволи.",
      image: "/customs-clearance-automotive-documentation.jpg",
    },
    {
      step: "5.",
      title: "Відновлення",
      description: "Власні станції СТО дозволяють ремонтувати автомобіль швидко та якісно. Ми відповідальні за ремонт, адже ви отримуєте готове до експлуатації авто.",
      image: "/car-shipping-delivery-truck-automotive-logistics.jpg",
    },

    {
      step: "6.",
      title: "ПЕРЕДАЧА",
      description: "Передаємо вам готовий до експлуатації автомобіль з повним пакетом документів.",
      image: "/car-handover-keys-delivery-automotive-service.jpg",
    },
  ]

  useEffect(() => {
    if (autoPlay) {
      timerRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % processSteps.length)
      }, 4000)
    } else {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current)
      }
    }
  }, [processSteps.length, autoPlay])

  const nextSlide = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev + 1) % processSteps.length)
  }

  const prevSlide = () => {
    setAutoPlay(false)
    setCurrentSlide((prev) => (prev - 1 + processSteps.length) % processSteps.length)
  }

  return (
    <section id="process" className="py-20" style={{ backgroundColor: "#0b1254" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">ПРОЦЕС КУПІВЛІ АВТО</h2>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {processSteps.map((step, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                    <div className="aspect-[2/1] overflow-hidden">
                      <img
                        src={step.image || "/placeholder.svg"}
                        alt={step.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="text-4xl font-black text-white">{step.step}</div>
                        <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-white/90 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Навигация */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Индикаторы */}
          <div className="flex justify-center gap-2 mt-6">
            {processSteps.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? "bg-white" : "bg-white/30"
                }`}
                onClick={() => {
                  setAutoPlay(false)
                  setCurrentSlide(index)
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
