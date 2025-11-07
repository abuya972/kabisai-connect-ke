import { Facebook, Twitter, Youtube, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">Team K'abisai 2027</h3>
            <p className="text-primary-foreground/80">
              Building a better Kisumu County through transparent leadership and community engagement.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>About Vincent K'abisai</li>
              <li>Our Vision</li>
              <li>Get Involved</li>
              <li>Contact Us</li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-6 w-6" />
              </a>
              <a href="mailto:info@senatorkabisai.ke" className="hover:text-accent transition-colors">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>© 2024 Team K'abisai 2027. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
