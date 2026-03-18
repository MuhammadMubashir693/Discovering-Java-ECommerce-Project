import { Link } from "react-router-dom";
import { Star, Users } from "lucide-react";
import { Course } from "@/context/CartContext";
import { motion } from "framer-motion";

interface CourseCardProps {
  course: Course;
}

const CourseCard = ({ course }: CourseCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ type: "spring", bounce: 0 }}
  >
    <Link to={`/courses/${course.id}`} className="block group">
      <div className="surface-matte p-5 h-full flex flex-col transition-all duration-200 hover:border-primary/40 hover:glow-amber">
        <div className="flex items-center justify-between mb-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
            {course.level}
          </span>
          {course.isLive && (
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-live">
              <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse-live" />
              Live
            </span>
          )}
        </div>

        <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">
          {course.subtitle}
        </p>

        <div className="font-mono text-xs text-muted-foreground mb-3">
          {course.duration} // {course.schedule}
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-border">
          <div className="flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Star className="h-3 w-3 text-primary fill-primary" />
              {course.rating}
            </span>
            <span className="flex items-center gap-1">
              <Users className="h-3 w-3" />
              {course.students}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {course.originalPrice && (
              <span className="font-mono text-xs text-muted-foreground line-through">
                ${course.originalPrice}
              </span>
            )}
            <span className="font-mono text-sm font-semibold text-primary">
              ${course.price}
            </span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default CourseCard;
