import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Heart, Code } from "lucide-react";

const values = [
  { icon: Target, title: "Accessibility", desc: "Economical, live training so every aspiring developer can learn regardless of background." },
  { icon: Eye, title: "Transparency", desc: "Clear pricing, no hidden fees, no upsells. What you see is what you get." },
  { icon: Heart, title: "Community", desc: "Peer-to-peer learning and collaboration — because coding is better together." },
  { icon: Code, title: "Hands-On", desc: "Project-based curriculum that builds real skills, not just theoretical knowledge." },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <div className="container py-10 max-w-3xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0 }}>
        <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">About Us</p>
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Our Story</h1>

        <div className="surface-matte p-6 mb-8">
          <h2 className="font-semibold mb-3">Vision</h2>
          <p className="text-muted-foreground leading-relaxed">
            To democratize the magic of software creation — ensuring every aspiring developer can understand and build the technological foundation of tomorrow from the ground up.
          </p>
        </div>

        <div className="surface-matte p-6 mb-8">
          <h2 className="font-semibold mb-3">Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            To bridge the gap between curiosity and expertise by providing economical, live, interactive coding education that transforms beginners into confident Java developers ready for the industry.
          </p>
        </div>

        <div className="mb-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">Our Values</p>
          <div className="grid sm:grid-cols-2 gap-4">
            {values.map((v) => (
              <div key={v.title} className="surface-matte p-5">
                <v.icon className="h-5 w-5 text-primary mb-3" />
                <h3 className="font-semibold mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface-matte p-6">
          <h2 className="font-semibold mb-3">Who We Are</h2>
          <p className="text-muted-foreground leading-relaxed">
            Discovering Java is a live, affordable, interactive coding academy designed for beginners. We provide structured training in Java fundamentals, OOP, and Data Structures — helping students build a strong foundation through real-time instruction, peer collaboration, and hands-on projects. Founded by passionate developers who believe great education shouldn't break the bank.
          </p>
        </div>
      </motion.div>
    </div>
    <Footer />
  </div>
);

export default AboutPage;
