import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { experiences, education } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section
      id="work"
      className="min-h-screen flex items-start justify-center w-full py-10 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <div className="flex flex-col lg:flex-row gap-8 items-start justify-center w-full max-w-6xl">
        {/* Experiência Profissional */}
        <div className="flex flex-col gap-6 items-center justify-center flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Experiência
          </h2>
          <div className="space-y-4 w-full">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border w-full bg-transparent backdrop-blur-lg rounded-xl shadow-md p-6"
              >
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <AvatarImage src={experience.logo} />
                  <AvatarFallback>{experience.fallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-muted-foreground font-semibold">
                    {experience.position}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {experience.period}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Formação Acadêmica */}
        <div className="flex flex-col gap-6 items-center justify-center flex-1">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Formação Acadêmica
          </h2>
          <div className="space-y-4 w-full">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border w-full bg-transparent backdrop-blur-lg rounded-xl shadow-md p-6"
              >
                <Avatar className="w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
                  <AvatarImage src={edu.logo} />
                  <AvatarFallback>{edu.fallback}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-bold">
                    {edu.institution}
                  </h3>
                  <p className="text-sm text-muted-foreground font-semibold">
                    {edu.course}
                  </p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
