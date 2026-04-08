import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Mail, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast({ title: "Please fill in all required fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10 max-w-4xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0 }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Get In Touch</p>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-8">Contact Us</h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <div className="lg:col-span-3">
            {submitted ? (
              <div className="surface-matte p-10 text-center">
                <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Thank you!</h2>
                <p className="text-muted-foreground">Your message has been sent. We'll respond within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Full Name *</label>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Email Address *</label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Subject</label>
                  <input
                    type="text"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Message *</label>
                  <textarea
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={5}
                    className="w-full bg-transparent border border-border rounded-md p-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50 resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="surface-matte p-5">
              <Mail className="h-5 w-5 text-primary mb-2" />
              <p className="font-semibold text-sm mb-1">Email</p>
              <p className="text-sm text-muted-foreground">hello@discoveringjava.com</p>
            </div>
            <div className="surface-matte p-5">
              <MapPin className="h-5 w-5 text-primary mb-2" />
              <p className="font-semibold text-sm mb-1">Location</p>
              <p className="text-sm text-muted-foreground">Online — Available Worldwide</p>
            </div>
            <div className="surface-matte p-5">
              <Clock className="h-5 w-5 text-primary mb-2" />
              <p className="font-semibold text-sm mb-1">Response Time</p>
              <p className="text-sm text-muted-foreground">Within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
