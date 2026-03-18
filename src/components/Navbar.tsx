import { Link } from "react-router-dom";
import { ShoppingCart, Code2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const { items } = useCart();

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <Code2 className="h-5 w-5 text-primary" />
          <span className="font-semibold text-foreground tracking-tight">
            Discovering<span className="text-primary">Java</span>
          </span>
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/courses" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            Courses
          </Link>
          <Link to="/cart" className="relative text-muted-foreground hover:text-foreground transition-colors">
            <ShoppingCart className="h-5 w-5" />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
