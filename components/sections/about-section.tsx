import { Badge } from "@/components/ui/badge";
import { personalInfo, technologies } from "@/lib/data";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center w-full py-10 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-6xl">
        <div className="flex flex-col gap-6 items-center justify-center flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Sobre mim
          </h2>
          <div className="flex items-center gap-4 border w-full max-w-lg bg-transparent backdrop-blur-lg rounded-xl shadow-md p-6 h-full">
            <div className="flex items-start flex-col">
              <div className="text-sm text-muted-foreground space-y-3">
                <p>{personalInfo.description}</p>
                <p>{personalInfo.education}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 items-center justify-center flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Tecnologias
          </h2>
          <div className="flex items-center gap-4 border w-full max-w-lg bg-transparent backdrop-blur-lg rounded-xl shadow-md p-6 h-full">
            <div className="flex items-start flex-col w-full">
              <div className="text-sm flex flex-wrap gap-2 text-muted-foreground justify-center">
                {technologies.map((tech) => (
                  <Badge key={tech.name} variant={tech.variant}>
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
