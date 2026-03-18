import { useParams, Link } from "react-router-dom";
import { courses } from "@/data/courses";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Star, Users, Clock, Calendar, Check, ShoppingCart, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

const CourseDetailPage = () => {
  const { id } = useParams();
  const course = courses.find((c) => c.id === id);
  const { addToCart, isInCart } = useCart();

  if (!course) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Course not found</h1>
          <Link to="/courses"><Button variant="outline">Back to Courses</Button></Link>
        </div>
      </div>
    );
  }

  const inCart = isInCart(course.id);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10">
        <Link to="/courses" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Courses
        </Link>

        <div className="grid lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{course.level}</span>
              {course.isLive && (
                <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest text-live">
                  <span className="h-1.5 w-1.5 rounded-full bg-live animate-pulse-live" /> Live
                </span>
              )}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-3">{course.title}</h1>
            <p className="text-lg text-muted-foreground mb-6">{course.subtitle}</p>

            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-1.5"><Clock className="h-4 w-4" /> {course.duration}</span>
              <span className="flex items-center gap-1.5"><Calendar className="h-4 w-4" /> {course.schedule}</span>
              <span className="flex items-center gap-1.5"><Star className="h-4 w-4 text-primary fill-primary" /> {course.rating}</span>
              <span className="flex items-center gap-1.5"><Users className="h-4 w-4" /> {course.students} students</span>
            </div>

            {/* Description */}
            <div className="surface-matte p-6 mb-8">
              <h2 className="font-semibold mb-3">About This Course</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.description}</p>
            </div>

            {/* Curriculum */}
            <div className="surface-matte p-6 mb-8">
              <h2 className="font-semibold mb-4">What You'll Learn</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {course.topics.map((topic) => (
                  <div key={topic} className="flex items-start gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-muted-foreground">{topic}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Instructor */}
            <div className="surface-matte p-6">
              <h2 className="font-semibold mb-3">Instructor</h2>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-sm font-bold text-primary">
                  {course.instructor.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <p className="font-medium">{course.instructor}</p>
                  <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider">Java Instructor</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Sticky Buy Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0, delay: 0.2 }}
          >
            <div className="surface-matte p-6 lg:sticky lg:top-20">
              <div className="flex items-baseline gap-3 mb-1">
                <span className="text-3xl font-bold font-mono text-primary">${course.price}</span>
                {course.originalPrice && (
                  <span className="text-sm font-mono text-muted-foreground line-through">${course.originalPrice}</span>
                )}
              </div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-6">
                One-time enrollment fee
              </p>

              {inCart ? (
                <Link to="/cart">
                  <Button variant="outline" className="w-full gap-2">
                    <ShoppingCart className="h-4 w-4" /> View in Cart
                  </Button>
                </Link>
              ) : (
                <Button className="w-full gap-2" onClick={() => addToCart(course)}>
                  <ShoppingCart className="h-4 w-4" /> Add to Cart
                </Button>
              )}

              <div className="mt-6 space-y-3 text-sm text-muted-foreground">
                <p className="font-mono text-[10px] uppercase tracking-widest mb-2">What's Included</p>
                {[
                  `${course.duration} of live sessions`,
                  "Peer-to-peer collaboration",
                  "Project-based learning",
                  "Certificate of completion",
                  "Lifetime access to recordings",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="h-3.5 w-3.5 text-primary shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CourseDetailPage;
