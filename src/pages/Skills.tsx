import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Python", "Terraform"],
  },
  {
    title: "Operating System and IDE",
    skills: ["Linux"],
  },
  {
    title: "Tools",
    skills: ["Jenkins", "Ansible", "Git", "GitHub", "Docker", "Kubernetes", "Kafka", "Bitbucket", "Ranchers"],
  },
  {
    title: "Monitoring Tools",
    skills: ["Prometheus", "Grafana", "Beats", "ELK", "CloudWatch"],
  },
  {
    title: "Cloud Services",
    skills: [
      "AWS EC2", "AWS S3", "AWS EBS", "AWS ECS", "AWS ELB", "AWS IAM", 
      "AWS SQS", "AWS SNS", "AWS Lambda", "AWS Route53", "AWS CloudFront",
      "AWS CloudWatch", "AWS EKS", "AWS Autoscaling", "AWS CloudFormation", 
      "AWS ACM", "AWS CodePipeline", "AWS CodeDeploy", "Microsoft Azure"
    ],
  },
  {
    title: "DevSecOps",
    skills: ["Prowler", "Terrascan", "Dockerscan"],
  },
  {
    title: "GitOps",
    skills: ["ArgoCD"],
  },
  {
    title: "CI/CD Tools",
    skills: ["GitHub Actions", "Jenkins", "CodePipeline"],
  },
  {
    title: "Database",
    skills: ["RDS", "MongoDB"],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-12 px-6">
        <div className="container mx-auto">
          <Link to="/">
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          
          <div className="mb-12">
            <h1 className="text-5xl font-bold mb-4">
              Technical <span className="text-primary">Skills</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Comprehensive expertise across DevOps technologies and cloud platforms
            </p>
          </div>

          <div className="grid gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/50 transition-all duration-300"
              >
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-4 py-2 text-sm bg-secondary/50 hover:bg-secondary/80 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Skills;
