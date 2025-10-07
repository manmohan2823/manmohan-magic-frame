import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Have a project in mind? Let's discuss how I can help you achieve your goals
        </p>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border flex items-start gap-4">
                <Mail className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <p className="text-muted-foreground">manmohan@example.com</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-card border-border flex items-start gap-4">
                <Phone className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <p className="text-muted-foreground">+91 98765 43210</p>
                </div>
              </Card>
              
              <Card className="p-6 bg-card border-border flex items-start gap-4">
                <MapPin className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Location</h4>
                  <p className="text-muted-foreground">Mumbai, India</p>
                </div>
              </Card>
            </div>
          </div>
          
          <Card className="p-8 bg-card border-border">
            <form className="space-y-6">
              <div>
                <Input 
                  placeholder="Your Name" 
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Input 
                  placeholder="Subject" 
                  className="bg-background border-border"
                />
              </div>
              <div>
                <Textarea 
                  placeholder="Your Message" 
                  rows={5}
                  className="bg-background border-border resize-none"
                />
              </div>
              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
