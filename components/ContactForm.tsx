"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X } from "lucide-react"

type ContactFormProps = {
    onClose?: () => void
    prefill?: { name?: string; phone?: string }
    fullWidth?: boolean // новый пропс
}

export function ContactForm({ onClose, prefill, fullWidth }: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: prefill?.name || "",
        phone: prefill?.phone || "",
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
                headers: { "Content-Type": "application/json" },
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
            console.error(error)
            setSubmitMessage("Ошибка отправки. Попробуйте еще раз или позвоните нам.")
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <div
            className={`bg-white/95 backdrop-blur-sm p-6 rounded-lg relative ${
                fullWidth ? "w-full max-w-2xl" : "max-w-md mx-auto"
            }`}
        >
            {onClose && (
                <button
                    onClick={onClose}
                    className="absolute -top-3 -right-3 p-2 bg-gray-100 rounded-full shadow hover:bg-gray-200"
                >
                    <X className="w-5 h-5 text-gray-700"/>
                </button>

            )}
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
                    {isSubmitting ? "ВІДПРАВЛЯЄМО..." : "ВІДПРАВИТИ"}
                </Button>
                {submitMessage && (
                    <p className={`text-sm mt-2 ${submitMessage.includes("успешно") ? "text-green-600" : "text-red-600"}`}>
                        {submitMessage}
                    </p>
                )}
            </form>
        </div>
    )
}
