import { Card } from "@/components/ui/card";

export const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="w-full aspect-square bg-gradient-to-br from-primary/20 to-secondary rounded-2xl"></div>
          </div>
          
          <div>
            <h2 className="text-5xl font-bold mb-6">
              About <span className="text-primary">Me</span>
            </h2>
            <h3 className="text-2xl font-semibold mb-4">DevOps Engineer</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm a passionate DevOps Engineer with expertise in cloud infrastructure, 
              CI/CD pipelines, and automation. I love building scalable solutions and 
              optimizing workflows to deliver efficient and reliable systems.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              With a strong foundation in modern DevOps practices, I specialize in 
              containerization, orchestration, and infrastructure as code. My goal is 
              to bridge the gap between development and operations, ensuring seamless 
              deployment and delivery.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-4 bg-card hover:bg-card/80 transition-colors border-border">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </Card>
              <Card className="p-4 bg-card hover:bg-card/80 transition-colors border-border">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Done</div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
