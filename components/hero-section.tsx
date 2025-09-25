"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Phone } from "lucide-react"
import {ContactForm} from "@/components/ContactForm";

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
          <div className="absolute inset-0 bg-black/50"/>
        </div>

        {/* Контент */}
        <div className="relative z-10 container mx-auto px-4 h-full">
          <div className="flex flex-col md:flex-row items-center justify-center h-full gap-8 max-w-6xl mx-auto">

            {/* Левая колонка: текст */}
            <div className="md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 text-balance">
                АВТО З США, КОРЕЇ,
                <br/>
                КИТАЮ ТА ЄВРОПИ
              </h1>
              <p className="text-xl md:text-2xl text-white mb-6 text-pretty font-bold">
                підбір, доставка, розмитнення,
                <br/>
                ремонт - під ключ!
              </p>
            </div>

            {/* Правая колонка: форма */}
            <div className="md:w-1/2 w-full flex items-center">
              <div className="w-full">
                <ContactForm/>
              </div>
            </div>

          </div>
        </div>

      </section>
  )
}
