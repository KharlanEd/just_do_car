import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json()

    if (!name || !phone) {
      return NextResponse.json({ success: false, error: "Имя и телефон обязательны" }, { status: 400 })
    }

    // Настраиваем transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // твоя почта
        pass: process.env.GMAIL_PASS, // пароль приложения
      },
    })

    // Отправляем письмо
    await transporter.sendMail({
      from: `"JUSTDOCAR" <${process.env.GMAIL_USER}>`,
      to: "eduardxarlan@gmail.com", // получатель
      subject: "Новая заявка - JUSTDOCAR",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color:#0b1254">Новая заявка</h2>
          <p><b>Имя:</b> ${name}</p>
          <p><b>Телефон:</b> ${phone}</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Заявка успешно отправлена" })
  } catch (error) {
    console.error("Ошибка отправки:", error)
    return NextResponse.json({ success: false, error: "Ошибка сервера" }, { status: 500 })
  }
}
