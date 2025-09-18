import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"

export function CarsGallery() {
  const cars = [
    {
      year: "2018",
      make: "JEEP",
      model: "COMPASS",
      price: "11 900$",
      image: "/2018-jeep-compass-suv-dark-background.jpg",
    },
    {
      year: "2018",
      make: "AUDI",
      model: "A4",
      price: "14 000$",
      image: "/2018-audi-a4-sedan-luxury.jpg",
    },
    {
      year: "2019",
      make: "Volkswagen",
      model: "Tiguan Diesel",
      price: "22 500$",
      image: "/2019-volkswagen-tiguan-suv-dark-background.jpg",
    },
    {
      year: "2015",
      make: "Audi",
      model: "A4 Allroad",
      price: "10 800$",
      image: "/2018-audi-a4-sedan-luxury-car-dark-background.PNG",
    },
    {
      year: "2018",
      make: "Lincoln",
      model: "MKZ 3.0",
      price: "12 500$",
      image: "/2018-lincoln-mkz-luxury-sedan-dark-background.jpg",
    },
    {
      year: "2024",
      make: "TESLA",
      model: "MODEL Y AWD",
      price: "25 400$",
      image: "/2024-tesla-model-y-electric-suv-dark-background.jpg",
    },
  ]

  return (
    <section className="py-20" style={{ backgroundColor: "#0b1254" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">ДОСТАВЛЕНІ АВТО</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden car-shadow hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={car.image || "/placeholder.svg"}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {car.year} {car.make} {car.model}
                </h3>
                <div className="text-2xl font-black text-white mb-4">{car.price}</div>
                <Button className="w-full bg-white hover:bg-white/90 text-[#0b1254] font-bold">ДЕТАЛЬНІШЕ</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
