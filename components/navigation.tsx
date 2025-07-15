"use client";

import { useEffect, useState } from "react";

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "work", "contact"];

      let currentSection = "home";

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]!;
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2) {
            currentSection = section;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    // Executar imediatamente para definir a seção inicial
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Ajuste para o header fixo
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
  };

  const isActive = (sectionId: string) => activeSection === sectionId;

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40">
      <div className="flex items-center gap-1 sm:gap-2 bg-background/80 backdrop-blur-lg border rounded-full px-2 sm:px-4 py-2 shadow-lg">
        {[
          { id: "home", label: "Início", shortLabel: "Início" },
          { id: "about", label: "Sobre", shortLabel: "Sobre" },
          { id: "work", label: "Experiência", shortLabel: "Exp" },
          { id: "contact", label: "Contato", shortLabel: "Contato" },
        ].map(({ id, label, shortLabel }) => (
          <button
            key={id}
            onClick={() => scrollToSection(id)}
            className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
              isActive(id)
                ? "bg-primary text-primary-foreground shadow-md"
                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
            }`}
            title={label}
          >
            <span className="hidden sm:inline">{label}</span>
            <span className="sm:hidden">{shortLabel}</span>
          </button>
        ))}
      </div>
    </nav>
  );
}
