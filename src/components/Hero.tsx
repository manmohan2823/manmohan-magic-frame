import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <p className="text-muted-foreground mb-4">Hello, I'm</p>
            <h1 className="text-6xl md:text-8xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Manmohan
              </span>
            </h1>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 text-foreground">
              DevOps Engineer
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Passionate about automation, cloud infrastructure, and building scalable solutions.
              Based in India, delivering excellence in DevOps practices.
            </p>
            <div className="flex gap-4 mb-8">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                About Me
              </Button>
            </div>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/manmohan-singh-8a0b24186/" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://github.com/manmohan2823" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://medium.com/@manmohan4tech" className="text-foreground hover:text-primary transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-full blur-3xl"></div>
            <div className="relative text-9xl font-bold text-transparent" style={{
              WebkitTextStroke: "2px hsl(var(--primary))",
            }}>
              MM
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
