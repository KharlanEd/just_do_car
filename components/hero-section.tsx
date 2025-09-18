"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"

export function HeroSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.")
        setFormData({ name: "", phone: "" })
      } else {
        setSubmitMessage("Ошибка отправки. Попробуйте еще раз или позвоните нам.")
      }
    } catch (error) {
      console.error("Error:", error)
      setSubmitMessage("Ошибка отправки. Попробуйте еще раз или позвоните нам.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Фоновое изображение автомобилей */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-cars-in-a-row-dark-background-automotive-sh.jpg"
          alt="Автомобили в ряд"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 text-balance">
            АВТО З США, КОРЕЇ,
            <br />
            КИТАЮ ТА ЄВРОПИ
          </h1>

          <p className="text-xl md:text-2xl text-white mb-12 text-pretty font-bold">
            підбір, доставка, розмитнення,
            <br />
            ремонт - під ключ!
          </p>

          {/* Форма подбора авто */}
          <div className="max-w-md mx-auto bg-white/95 backdrop-blur-sm rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="ІМ'Я"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-bold"
                required
                disabled={isSubmitting}
              />
              <Input
                type="tel"
                placeholder="ТЕЛЕФОН"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 font-bold"
                required
                disabled={isSubmitting}
              />
              <Button
                type="submit"
                className="w-full font-black py-3 text-lg text-white"
                style={{ backgroundColor: "#0b1254" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? "ВІДПРАВЛЯЄМО..." : "ПІДІБРАТИ АВТО"}
              </Button>
              {submitMessage && (
                <p className={`text-sm mt-2 ${submitMessage.includes("успешно") ? "text-green-600" : "text-red-600"}`}>
                  {submitMessage}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
