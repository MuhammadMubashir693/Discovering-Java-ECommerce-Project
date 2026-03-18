import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Check, Lock, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const CheckoutPage = () => {
  const { items, total, clearCart } = useCart();
  const { toast } = useToast();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", card: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.card) {
      toast({ title: "Please fill in all fields", variant: "destructive" });
      return;
    }
    setSubmitted(true);
    clearCart();
  };

  if (items.length === 0 && !submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center max-w-lg mx-auto">
          <h1 className="text-2xl font-bold mb-4">Nothing to checkout</h1>
          <p className="text-muted-foreground mb-6">Add some courses to your cart first.</p>
          <Link to="/courses"><Button className="gap-2">Browse Courses</Button></Link>
        </div>
        <Footer />
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container py-20 text-center max-w-lg mx-auto">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: "spring", bounce: 0.3 }}>
            <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <Check className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-2xl font-bold mb-3">Enrollment Complete!</h1>
            <p className="text-muted-foreground mb-6">Welcome to Discovering Java. Check your email for next steps.</p>
            <Link to="/"><Button variant="outline">Back to Home</Button></Link>
          </motion.div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container py-10 max-w-4xl mx-auto">
        <Link to="/cart" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="h-4 w-4" /> Back to Cart
        </Link>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ type: "spring", bounce: 0 }}>
          <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">Checkout</p>
          <h1 className="text-3xl font-bold tracking-tight mb-8">Complete Your Enrollment</h1>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-6">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Full Name</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Email Address</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground block mb-2">Card Number</label>
              <input
                type="text"
                value={form.card}
                onChange={(e) => setForm({ ...form, card: e.target.value })}
                className="w-full bg-transparent border-b border-border py-3 text-foreground outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/50"
                placeholder="4242 4242 4242 4242"
              />
            </div>

            <div className="flex items-center gap-1.5 text-muted-foreground pt-2">
              <Lock className="h-3 w-3" />
              <span className="font-mono text-[10px] uppercase tracking-widest">Secure Encrypted Checkout</span>
            </div>

            <Button type="submit" size="lg" className="w-full">
              Pay ${total}
            </Button>
          </form>

          {/* Order Summary */}
          <div className="lg:col-span-2">
            <div className="surface-matte p-6 lg:sticky lg:top-20">
              <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-4">Order Summary</p>
              <div className="space-y-4 mb-6">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{item.title}</span>
                    <span className="font-mono font-medium">${item.price}</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-border pt-4 flex justify-between">
                <span className="font-medium">Total</span>
                <span className="text-xl font-bold font-mono text-primary">${total}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CheckoutPage;
