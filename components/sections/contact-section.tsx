"use client";

import { socialLinks } from "@/lib/data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ContactForm } from "@/components/contact-form";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-start w-full py-10 sm:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16"
    >
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Contato
      </h2>
      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-1/2 space-y-4">
          {socialLinks.map(({ href, label, icon: Icon, title }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={label}
              aria-label={label}
              className="flex items-center gap-4 border w-full bg-transparent backdrop-blur-lg rounded-xl shadow-md p-6 hover:bg-muted/50 transition-colors"
            >
              <div className="flex flex-row items-center gap-3">
                <Avatar className="bg-muted hover:bg-muted/70 transition-colors w-10 h-10">
                  <AvatarFallback>
                    <Icon className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col items-start min-w-0">
                  <span className="text-sm font-medium text-muted-foreground">
                    {label}
                  </span>
                  <span className="text-xs text-muted-foreground/70 break-all max-w-full">
                    {title}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="w-full lg:w-1/2">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
