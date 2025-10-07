import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const blogPosts = [
  {
    title: "Ansible roles for load balancer and apache webserver",
    excerpt: "ARTH — Task 15: Setting up load balancer and apache webserver using Ansible roles",
    date: "Dec 21, 2022",
    readTime: "5 min read",
    url: "https://medium.com/@manmohan4tech/ansible-roles-for-load-balancer-and-apache-webserver-fa10c9e57a60",
  },
  {
    title: "Configuring Reverse Proxy over AWS instances Using Ansible Playbook",
    excerpt: "Step-by-step guide to configure reverse proxy on AWS instances with Ansible automation",
    date: "Dec 21, 2022",
    readTime: "6 min read",
    url: "https://medium.com/@manmohan4tech/configuring-reverse-proxy-over-aws-instances-using-ansible-playbook-2776156272a8",
  },
  {
    title: "Configuring Load Balancer using Ansible",
    excerpt: "ARTH — Task 12: Automating load balancer configuration with Ansible playbooks",
    date: "Dec 21, 2022",
    readTime: "5 min read",
    url: "https://medium.com/@manmohan4tech/configuring-load-balancer-using-ansible-d75b2d5b422",
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
            <a 
              key={index}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="bg-card border-border hover:border-primary/50 transition-all duration-300 cursor-pointer group hover:shadow-[0_0_30px_-5px_hsl(var(--primary))] h-full">
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
