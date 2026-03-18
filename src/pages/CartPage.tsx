import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { X, ArrowRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import CourseCard from "@/components/CourseCard";
import { courses } from "@/data/courses";

const CartPage = () => {
  const { items, removeFromCart, total } = useCart();

  const suggestions = courses.filter((c) => !items.find((i) => i.id === c.id)).slice(0, 2);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10 max-w-3xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0 }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Review</p>
          <h1 className="text-3xl font-bold tracking-tight mb-8">Your Cart</h1>
        </motion.div>

        {items.length === 0 ? (
          <div className="surface-matte p-12 text-center">
            <ShoppingCart className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground mb-4">Your cart is empty</p>
            <Link to="/courses">
              <Button className="gap-2">Browse Courses <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        ) : (
          <>
            <div className="space-y-4 mb-8">
              <AnimatePresence>
                {items.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    exit={{ opacity: 0, x: -20 }}
                    className="surface-matte p-5 flex items-center justify-between gap-4"
                  >
                    <div className="flex-1 min-w-0">
                      <Link to={`/courses/${item.id}`} className="font-semibold hover:text-primary transition-colors">
                        {item.title}
                      </Link>
                      <p className="font-mono text-xs text-muted-foreground mt-1">
                        {item.duration} // {item.schedule}
                      </p>
                    </div>
                    <span className="font-mono font-semibold text-primary shrink-0">${item.price}</span>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-muted-foreground hover:text-foreground transition-colors p-1"
                      aria-label={`Remove ${item.title}`}
                    >
                      <X className="h-5 w-5" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            {/* Summary */}
            <div className="surface-matte p-6 mb-8">
              <div className="flex justify-between items-baseline mb-4">
                <span className="text-muted-foreground">Total</span>
                <span className="text-2xl font-bold font-mono text-primary">${total}</span>
              </div>
              <Link to="/checkout">
                <Button className="w-full gap-2" size="lg">
                  Proceed to Checkout <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </>
        )}

        {/* Cross-sell */}
        {suggestions.length > 0 && (
          <div className="mt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">
              Students also started with
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {suggestions.map((c) => (
                <CourseCard key={c.id} course={c} />
              ))}
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
