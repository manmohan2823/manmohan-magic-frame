import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Kubernetes Best Practices for Production",
    excerpt: "Learn essential practices for running Kubernetes in production environments",
    date: "2025-03-15",
    readTime: "5 min read",
  },
  {
    title: "Automating Infrastructure with Terraform",
    excerpt: "A comprehensive guide to infrastructure automation using Terraform",
    date: "2025-03-10",
    readTime: "8 min read",
  },
  {
    title: "CI/CD Pipeline Optimization Strategies",
    excerpt: "Techniques to improve your CI/CD pipeline performance and reliability",
    date: "2025-03-05",
    readTime: "6 min read",
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-24 px-6 bg-secondary/50">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Latest <span className="text-primary">Blog Posts</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Insights and tutorials on DevOps, cloud infrastructure, and automation
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {blogPosts.map((post, index) => (
            <Card 
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_30px_-5px_hsl(var(--primary))]"
            >
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">
                  {post.excerpt}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
