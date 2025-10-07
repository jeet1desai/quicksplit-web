import { Twitter } from "lucide-react";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="w-full py-12 mt-20">
      <div className="container px-4 text-left">
        <div className="glass glass-hover rounded-xl p-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-32">
            <div className="space-y-4 text-left">
              <h3 className="font-medium text-lg ">QuickSplit</h3>
              <p className="text-sm text-muted-foreground">
                Split expenses with your friends and family.
              </p>
              <div className="flex space-x-4">
                <Button variant="outline" size="icon">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Support</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://tallyfeed.com/"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="#pricing"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="https://userjot.com"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Feedback
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-medium">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10">
            <p className="text-sm text-muted-foreground text-center">
              Copyright © {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
