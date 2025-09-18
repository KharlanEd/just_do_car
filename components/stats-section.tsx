

export function StatsSection() {
  const stats = [
    { number: "6", label: "РОКІВ", subtitle: "ДОСВІДУ ПОНАД" },
    { number: "2000+", label: "ЗАДОВОЛЕНИХ", subtitle: "КЛІЄНТІВ" },
    { number: "3000+", label: "ПРИДБАНИХ", subtitle: "АВТО" },
  ]

  return (
    <section id="auctions" className="py-20" style={{ backgroundColor: "#0b1254" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">ДОСТАВЛЕНІ АВТО</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-lg font-bold text-white mb-1">{stat.subtitle}</div>
              <div className="text-4xl md:text-5xl font-black text-orange-500 mb-2">{stat.number}</div>
              <div className="text-lg font-bold text-white">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { year: "2018", make: "JEEP", model: "COMPASS", price: "11 900$" },
            { year: "2018", make: "AUDI", model: "A4", price: "14 000$" },
            { year: "2019", make: "Volkswagen", model: "Tiguan Diesel", price: "22 500$" },
            { year: "2015", make: "Audi", model: "A4 Allroad", price: "10 800$" },
            { year: "2018", make: "Lincoln", model: "MKZ 3.0", price: "12 500$" },
            { year: "2024", make: "TESLA", model: "MODEL Y AWD", price: "25 400$" },
          ].map((car, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden hover:scale-105 transition-transform duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-800">
                <img
                  src={`/abstract-geometric-shapes.png?height=300&width=400&query=${car.year} ${car.make} ${car.model}`}
                  alt={`${car.year} ${car.make} ${car.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">
                  {car.year} {car.make} {car.model}
                </h3>
                <div className="text-2xl font-black text-orange-500">{car.price}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
