"use client"

import { useState, useRef, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Если клик был вне меню и вне кнопки меню, закрываем меню
      if (
          isMenuOpen &&
          menuRef.current &&
          !menuRef.current.contains(event.target as Node) &&
          buttonRef.current &&
          !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isMenuOpen])

  return (
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Image src="/logo.svg" alt="JUSTDOCAR" width={120} height={40} className="h-10 w-auto" />
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="font-bold text-gray-700 hover:text-primary transition-colors">
                Головна
              </a>
              <a href="#process" className="font-bold text-gray-700 hover:text-primary transition-colors">
                Процес купівлі авто
              </a>
              <a href="#reviews" className="font-bold text-gray-700 hover:text-primary transition-colors">
                Відгуки
              </a>
              <a href="#address" className="font-bold text-gray-700 hover:text-primary transition-colors">
                Адреса
              </a>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-primary">
                <Phone className="w-5 h-5"/>
                <a href="tel:+380632012525" className="font-bold text-gray-700 hover:text-primary transition-colors">
                  +38 (063) 201-25-25
                </a>
              </div>
            </div>

            <button
                ref={buttonRef}
                onClick={toggleMenu}
                className="md:hidden p-2 text-gray-700 hover:text-primary"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {isMenuOpen && (
              <div
                  ref={menuRef}
                  className="md:hidden py-4 border-t border-gray-200"
              >
                <nav className="flex flex-col space-y-4">
                  <a
                      href="#home"
                      className="font-bold text-gray-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                  >
                    Головна
                  </a>
                  <a
                      href="#process"
                      className="font-bold text-gray-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                  >
                    Процес купівлі авто
                  </a>
                  <a
                      href="#reviews"
                      className="font-bold text-gray-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                  >
                    Відгуки
                  </a>
                  <a
                      href="#address"
                      className="font-bold text-gray-700 hover:text-primary transition-colors"
                      onClick={toggleMenu}
                  >
                    Адреса
                  </a>
                  <div className="flex items-center space-x-2 text-primary pt-2 border-t border-gray-200">
                    <Phone className="w-5 h-5" />
                    <span className="font-black text-lg">063 201 25 25</span>
                  </div>
                </nav>
              </div>
          )}
        </div>
      </header>
  )
}