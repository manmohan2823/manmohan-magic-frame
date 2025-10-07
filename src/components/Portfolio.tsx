import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Cloud Migration Project",
    description: "Migrated on-premise infrastructure to AWS with zero downtime",
    tags: ["AWS", "Docker", "Terraform"],
    link: "#",
  },
  {
    title: "CI/CD Pipeline Automation",
    description: "Implemented Jenkins pipelines reducing deployment time by 70%",
    tags: ["Jenkins", "Kubernetes", "Git"],
    link: "#",
  },
  {
    title: "Microservices Architecture",
    description: "Designed and deployed containerized microservices on GCP",
    tags: ["GCP", "Docker", "Kubernetes"],
    link: "#",
  },
  {
    title: "Infrastructure Monitoring",
    description: "Set up comprehensive monitoring using Prometheus and Grafana",
    tags: ["Prometheus", "Grafana", "ELK"],
    link: "#",
  },
];

export const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Portfolio</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Recent projects showcasing DevOps excellence and innovation
        </p>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-[0_0_30px_-5px_hsl(var(--primary))]"
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <a 
                    href={project.link}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </div>
                <CardDescription className="text-muted-foreground mt-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge 
                      key={tagIndex}
                      variant="secondary"
                      className="bg-primary/10 text-primary border-primary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
