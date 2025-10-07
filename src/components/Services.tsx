import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Server, GitBranch, Container, Shield, Gauge } from "lucide-react";

const services = [
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description: "Design and manage scalable cloud infrastructure on AWS, Azure, and GCP.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    description: "Build and optimize continuous integration and deployment workflows.",
  },
  {
    icon: Container,
    title: "Containerization",
    description: "Docker and Kubernetes orchestration for containerized applications.",
  },
  {
    icon: Server,
    title: "Infrastructure as Code",
    description: "Terraform, Ansible, and CloudFormation for automated provisioning.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Implement security best practices and ensure compliance standards.",
  },
  {
    icon: Gauge,
    title: "Monitoring & Logging",
    description: "Set up comprehensive monitoring and logging solutions for insights.",
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          My <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Comprehensive DevOps solutions to streamline your development and operations
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--primary))]"
            >
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
