import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, Radio } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring" as const, bounce: 0 } },
};

const features = [
  {
    icon: Radio,
    title: "Live Sessions",
    desc: "Real-time instruction with Q&A, not pre-recorded videos gathering dust.",
  },
  {
    icon: Users,
    title: "Peer Learning",
    desc: "Collaborate with fellow students in live coding exercises and group projects.",
  },
  {
    icon: BookOpen,
    title: "Structured Path",
    desc: "From zero to data structures — a clear curriculum that builds on itself.",
  },
];

const Index = () => {
  const featured = courses.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="container pt-20 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, duration: 0.8 }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-4">
            Live Java Academy
          </p>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] mb-6">
            Stop watching tutorials.
            <br />
            <span className="text-primary">Start building Java.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Affordable, live training in Java fundamentals, OOP, and Data Structures. 
            Build the foundation that separates real developers from tutorial watchers.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link to="/courses">
              <Button size="lg" className="gap-2">
                Browse Courses <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/courses">
              <Button variant="outline" size="lg">
                View Pricing
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Terminal preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ type: "spring", bounce: 0, delay: 0.4, duration: 0.8 }}
          className="mt-12 surface-matte overflow-hidden max-w-2xl"
        >
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border">
            <span className="h-3 w-3 rounded-full bg-live/60" />
            <span className="h-3 w-3 rounded-full bg-primary/60" />
            <span className="h-3 w-3 rounded-full bg-success/60" />
            <span className="font-mono text-[10px] text-muted-foreground ml-2">HelloWorld.java</span>
          </div>
          <pre className="p-4 text-sm font-mono text-muted-foreground leading-relaxed overflow-x-auto">
<span className="text-accent">public class</span> <span className="text-primary">HelloWorld</span> {"{\n"}
{"  "}<span className="text-accent">public static void</span> <span className="text-foreground">main</span>(String[] args) {"{\n"}
{"    "}System.out.println(<span className="text-success">"Hello, future developer!"</span>);{"\n"}
{"  }\n}"}
          </pre>
        </motion.div>
      </section>

      {/* Social Proof */}
      <section className="border-y border-border bg-card/50">
        <div className="container py-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-muted-foreground">
          <span className="font-mono text-[10px] uppercase tracking-widest">Trusted by 1,200+ students</span>
          <span className="hidden md:inline text-border">|</span>
          <span>University students</span>
          <span className="text-border">·</span>
          <span>Career switchers</span>
          <span className="text-border">·</span>
          <span>Self-taught developers</span>
        </div>
      </section>

      {/* Features */}
      <section className="container py-20">
        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <motion.p variants={item} className="font-mono text-[10px] uppercase tracking-widest text-primary mb-3">
            Why Discovering Java
          </motion.p>
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-bold tracking-tight mb-10">
            Build your foundation
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f) => (
              <motion.div key={f.title} variants={item} className="surface-matte p-6">
                <f.icon className="h-5 w-5 text-primary mb-4" />
                <h3 className="font-semibold mb-2">{f.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Featured Courses */}
      <section className="container pb-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Popular Courses</p>
            <h2 className="text-2xl font-bold tracking-tight">Start learning today</h2>
          </div>
          <Link to="/courses">
            <Button variant="ghost" className="gap-1 text-sm">
              View all <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container pb-20">
        <div className="surface-matte p-10 text-center">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-3">
            Ready to write your first class?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Join 1,200+ students building real Java skills with live instruction starting at just $79.
          </p>
          <Link to="/courses">
            <Button size="lg" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
