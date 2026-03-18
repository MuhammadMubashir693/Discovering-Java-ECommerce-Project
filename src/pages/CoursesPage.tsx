import { useState } from "react";
import { courses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CourseCard from "@/components/CourseCard";
import { motion } from "framer-motion";

const levels = ["All", "Beginner", "Intermediate"];

const CoursesPage = () => {
  const [filter, setFilter] = useState("All");

  const filtered = filter === "All" ? courses : courses.filter((c) => c.level === filter);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0 }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Catalog</p>
          <h1 className="text-3xl font-bold tracking-tight mb-2">All Courses</h1>
          <p className="text-muted-foreground mb-8">Structured, live Java training — from first line of code to data structures.</p>
        </motion.div>

        {/* Filters */}
        <div className="flex gap-2 mb-8">
          {levels.map((level) => (
            <button
              key={level}
              onClick={() => setFilter(level)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                filter === level
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {level}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20">No courses match that filter.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CoursesPage;
