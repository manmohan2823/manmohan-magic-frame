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
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors">
                <Twitter className="h-6 w-6" />
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
