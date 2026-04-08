import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="border-t border-border bg-card mt-20">
    <div className="container py-10">
      <div className="flex flex-col md:flex-row justify-between gap-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img src={logo} alt="Discovering Java" className="h-6 w-auto" />
            <span className="font-semibold tracking-tight">
              Discovering<span className="text-primary">Java</span>
            </span>
          </div>
          <p className="text-sm text-muted-foreground max-w-xs">
            Affordable, live Java training for aspiring developers. Build your foundation.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 text-sm">
          <div className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Platform</p>
            <Link to="/courses" className="block text-muted-foreground hover:text-foreground transition-colors">All Courses</Link>
            <Link to="/courses" className="block text-muted-foreground hover:text-foreground transition-colors">Pricing</Link>
            <Link to="/about" className="block text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
          </div>
          <div className="space-y-2">
            <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Connect</p>
            <Link to="/contact" className="block text-muted-foreground hover:text-foreground transition-colors">Contact Us</Link>
            <p className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Instagram</p>
            <p className="text-muted-foreground hover:text-foreground transition-colors cursor-pointer">Facebook</p>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-6 border-t border-border text-center">
        <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          © 2026 Discovering Java. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
