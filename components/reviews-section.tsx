"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReviewsSection() {
  const [currentVideoReview, setCurrentVideoReview] = useState(0)
  const [currentTextReview, setCurrentTextReview] = useState(0)
  const [reviewsPerSlide, setReviewsPerSlide] = useState(3)
  const [videoPosters, setVideoPosters] = useState<(string | null)[]>([])

  const videoWrapperRef = useRef<HTMLDivElement | null>(null)
  const textWrapperRef = useRef<HTMLDivElement | null>(null)

  const videoReviews = [
    { name: "Сергій М.", car: "2019 Ford Escape", video: "/video/IMG_1041.MP4", poster:"/posters/IMAGE 2025-09-22 15:58:17.jpg", text: "Дуже задоволений автомобілем!" },
    { name: "Наталя П.", car: "2017 Audi Q3", video: "/video/IMG_1044.MP4",poster:"/posters/2025-09-22-15-59-52.jpg", text: "Дуже задоволена!" },
    { name: "Дмитро Ю.", car: "2021 Tesla Model Y", video: "/video/IMG_1042.MP4",poster:"/posters/2025-09-22 16.00.27.jpg", text: "Run and Drive, все супер!" },
    { name: "Антон К.", car: "2018 Nissan Leaf", video: "/video/IMG_1043.MP4",poster:"/posters/2025-09-22 16.00.35.jpg", text: "Автомобіль приїхав вчасно" },
  ]

  const textReviews = [
    { name: "Анна С.", car: "2022 Tesla Model 3", rating: 5, text: "Електромобіль доставили в ідеальному стані!" },
    { name: "Віктор М.", car: "2020 Porsche Cayenne", rating: 5, text: "Швидко знайшли потрібну модель" },
    { name: "Ірина Л.", car: "2021 Range Rover Evoque", rating: 5, text: "Чудовий сервіс!" },
    { name: "Сергій Т.", car: "2020 Volkswagen Tiguan", rating: 5, text: "Професійна команда!" },
    { name: "Оксана Р.", car: "2019 Audi A4", rating: 5, text: "Автомобіль доставили вчасно" },
    { name: "Максим К.", car: "2021 BMW 3 Series", rating: 5, text: "Знайшли саме те, що шукав" },
  ]

  // Меняем количество отзывов на слайд в зависимости от ширины экрана
  useEffect(() => {
    const updateReviewsPerSlide = () => {
      if (window.innerWidth < 768) setReviewsPerSlide(1)
      else setReviewsPerSlide(3)
    }

    updateReviewsPerSlide()
    window.addEventListener("resize", updateReviewsPerSlide)
    return () => window.removeEventListener("resize", updateReviewsPerSlide)
  }, [])

  // Свайп обработчик
  const useSwipe = (ref: React.RefObject<HTMLDivElement>, onSwipeLeft: () => void, onSwipeRight: () => void) => {
    useEffect(() => {
      const el = ref.current
      if (!el) return

      let startX = 0

      const handleTouchStart = (e: TouchEvent) => {
        startX = e.touches[0].clientX
      }

      const handleTouchEnd = (e: TouchEvent) => {
        const endX = e.changedTouches[0].clientX
        const diff = startX - endX

        if (Math.abs(diff) > 50) {
          if (diff > 0) onSwipeLeft()
          else onSwipeRight()
        }
      }

      el.addEventListener("touchstart", handleTouchStart)
      el.addEventListener("touchend", handleTouchEnd)

      return () => {
        el.removeEventListener("touchstart", handleTouchStart)
        el.removeEventListener("touchend", handleTouchEnd)
      }
    }, [ref, onSwipeLeft, onSwipeRight])
  }

  // Подключаем свайпы
  useSwipe(videoWrapperRef,
      () => setCurrentVideoReview((prev) => (prev + 1) % videoReviews.length),
      () => setCurrentVideoReview((prev) => (prev - 1 + videoReviews.length) % videoReviews.length)
  )

  useSwipe(textWrapperRef,
      () => setCurrentTextReview((prev) => (prev + 1) % Math.ceil(textReviews.length / reviewsPerSlide)),
      () => setCurrentTextReview((prev) => (prev - 1 + Math.ceil(textReviews.length / reviewsPerSlide)) % Math.ceil(textReviews.length / reviewsPerSlide))
  )

  return (
      <section id="reviews" className="py-20" style={{ backgroundColor: "#0b1254" }}>
        <div className="container mx-auto px-4">
          {/* Видео отзывы */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-4">ВІДГУКИ НАШИХ КЛІЄНТІВ</h2>
          </div>

          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white text-center mb-8">ВІДЕО ВІДГУКИ</h3>
            <div className="relative max-w-4xl mx-auto" ref={videoWrapperRef}>
              <div className="overflow-hidden rounded-lg">
                <div
                    className="flex transition-transform duration-500 ease-in-out"
                    style={{transform: `translateX(-${currentVideoReview * 100}%)`}}
                >
                  {videoReviews.map((review, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-4">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg overflow-hidden">
                          <div className="relative aspect-video">
                            <video
                                src={review.video}
                                className="w-full h-full object-cover"
                                controls
                                preload="metadata"
                                playsInline
                                poster={videoPosters[index] ?? review.poster}
                            />
                          </div>
                          <div className="p-6">
                            <h3 className="text-xl font-bold text-white mb-1">{review.name}</h3>
                            <p className="text-white font-semibold mb-3">{review.car}</p>
                            <p className="text-white/90 leading-relaxed">{review.text}</p>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
              </div>

              {/* кнопки слева/справа */}
              <Button
                  onClick={() =>
                      setCurrentVideoReview((prev) => (prev - 1 + videoReviews.length) % videoReviews.length)
                  }
                  variant="outline"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <ChevronLeft className="w-4 h-4"/>
              </Button>

              <Button
                  onClick={() => setCurrentVideoReview((prev) => (prev + 1) % videoReviews.length)}
                  variant="outline"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
              >
                <ChevronRight className="w-4 h-4"/>
              </Button>

              {/* точки-переключатели */}
              <div className="flex justify-center gap-2 mt-6">
                {videoReviews.map((_, index) => (
                    <button
                        key={index}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentVideoReview ? "bg-white" : "bg-white/30"
                        }`}
                        onClick={() => setCurrentVideoReview(index)}
                    />
                ))}
              </div>
            </div>

          </div>

          {/* Текстовые отзывы */}
          <div>
          <h3 className="text-2xl font-bold text-white text-center mb-8">ВІДГУКИ КЛІЄНТІВ</h3>
          <div className="relative max-w-6xl mx-auto" ref={textWrapperRef}>
            <div className="overflow-hidden">
              <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{transform: `translateX(-${currentTextReview * 100}%)`}}
              >
                {Array.from({length: Math.ceil(textReviews.length / reviewsPerSlide)}).map(
                    (_, slideIndex) => (
                        <div key={slideIndex} className="w-full flex-shrink-0 px-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {textReviews
                                .slice(
                                    slideIndex * reviewsPerSlide,
                                    slideIndex * reviewsPerSlide + reviewsPerSlide
                                )
                                .map((review, index) => (
                                    <div
                                        key={index}
                                        className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6"
                                    >
                                      <div className="flex items-center gap-1 mb-3">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                                            />
                                        ))}
                                      </div>
                                      <p className="text-white/90 leading-relaxed mb-4">{review.text}</p>
                                      <div className="border-t border-white/20 pt-4">
                                        <h4 className="text-white font-bold">{review.name}</h4>
                                        <p className="text-white/70 text-sm">{review.car}</p>
                                      </div>
                                    </div>
                                ))}
                          </div>
                        </div>
                    )
                )}
              </div>
            </div>

            {/* кнопки слева/справа */}
            <Button
                onClick={() =>
                    setCurrentTextReview(
                        (prev) =>
                            (prev - 1 + Math.ceil(textReviews.length / reviewsPerSlide)) %
                            Math.ceil(textReviews.length / reviewsPerSlide)
                    )
                }
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <ChevronLeft className="w-4 h-4"/>
            </Button>

            <Button
                onClick={() =>
                    setCurrentTextReview(
                        (prev) => (prev + 1) % Math.ceil(textReviews.length / reviewsPerSlide)
                    )
                }
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
            >
              <ChevronRight className="w-4 h-4"/>
            </Button>

            {/* точки-переключатели */}
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({length: Math.ceil(textReviews.length / reviewsPerSlide)}).map(
                  (_, index) => (
                      <button
                          key={index}
                          className={`w-3 h-3 rounded-full transition-colors ${
                              index === currentTextReview ? "bg-white" : "bg-white/30"
                          }`}
                          onClick={() => setCurrentTextReview(index)}
                      />
                  )
              )}
            </div>
          </div>

        </div>
        </div>
      </section>
  )
}
