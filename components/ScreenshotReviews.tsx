"use client";

import { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

const screenshotReviews = [
    "/reviews/IMG_1025.PNG",
    "/reviews/IMG_1024.PNG",
    "/reviews/IMG_1026.PNG",
    // Добавим еще несколько отзывов для лучшей работы loop
    "/reviews/IMG_1025.PNG",
    "/reviews/IMG_1024.PNG",
];

export default function ScreenshotReviews() {
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    return (
        <section
            id="screen_reviews"
            className="py-20"
            style={{ backgroundColor: "#0b1254" }}
        >
            <div className="max-w-5xl mx-auto px-4 py-12 relative">

                <div className="relative">
                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: true }}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            1024: { slidesPerView: 3, loop: screenshotReviews.length >= 6 }, // Включаем loop только если достаточно слайдов
                        }}
                        className="pb-12"
                    >
                        {screenshotReviews.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={src}
                                    alt={`Відгук ${i + 1}`}
                                    className="rounded-xl shadow-lg border border-white/20 cursor-pointer"
                                    onClick={() => setActiveImage(src)}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Кастомные кнопки навигации */}
                    <button
                        ref={prevRef}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
                    >
                        <ChevronLeft size={32} />
                    </button>
                    <button
                        ref={nextRef}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-all"
                    >
                        <ChevronRight size={32} />
                    </button>
                </div>

                {/* Подпись */}
                <p className="text-center text-white/70 mt-4">
                    Реальні відгуки з Telegram та Соціальних мереж
                </p>

                {/* Модалка */}
                {activeImage && (
                    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
                        <button
                            className="absolute top-4 right-4 text-white"
                            onClick={() => setActiveImage(null)}
                        >
                            <X size={32} />
                        </button>
                        <img
                            src={activeImage}
                            alt="Відгук"
                            className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-2xl"
                        />
                    </div>
                )}
            </div>
        </section>
    );
}