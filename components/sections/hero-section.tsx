import { personalInfo } from "@/lib/data";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center w-full py-10 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="text-center max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          {personalInfo.name}
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground">
          {personalInfo.title}
        </p>
      </div>
    </section>
  );
}
