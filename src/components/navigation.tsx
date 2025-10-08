import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

import WhatsAppIcon from "@/assets/whatsapp.svg";
import LogoIcon from "@/assets/logo.svg";
import { Link } from "react-router-dom";
import { cookieStorage } from "@/lib/cookie";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    {
      name: "Try Now",
      icon: <img src={WhatsAppIcon} className="size-5" />,
      onClick: () => window.open("https://wa.me/message/B7TFROF4KEZNM1", "_blank"),
    },
  ];

  return (
    <header
      className={`fixed top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${
        isScrolled ? "h-14 bg-[#1B1B1B]/40 backdrop-blur-xl border border-white/10 scale-95 w-[90%] max-w-2xl" : "h-14 bg-[#1B1B1B] w-[95%] max-w-3xl"
      }`}
    >
      <div className="mx-auto h-full px-6">
        <nav className="flex items-center justify-between h-full">
          <Link to="/">
            <div className="flex items-center gap-2">
              <img src={LogoIcon} className="size-8" />
              <span className="font-bold text-base">QuickSplit</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                onClick={(e) => {
                  e.preventDefault();
                  if (item.onClick) {
                    item.onClick();
                  }
                }}
                className="cursor-pointer text-sm text-foreground hover:text-muted-foreground transition-all duration-300 flex items-center gap-1"
              >
                {item.name}
              </a>
            ))}
            {cookieStorage.getItem("p_id") ? (
              <Link to="/dashboard">
                <Button size="sm" className="button-gradient !w-[100px]">
                  Dashboard
                </Button>
              </Link>
            ) : (
              <Link to="/login">
                <Button size="sm" className="button-gradient !w-[100px]">
                  Login
                </Button>
              </Link>
            )}
          </div>

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="glass">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="bg-[#1B1B1B]">
                <div className="flex flex-col mt-8">
                  {navItems.map((item) => (
                    <Button
                      variant="outline"
                      className="mt-4 flex items-center gap-2 rounded-3xl"
                      size="lg"
                      onClick={(e) => {
                        e.preventDefault();
                        if (item.onClick) {
                          item.onClick();
                        }
                      }}
                    >
                      {item.name}
                      {item.icon}
                    </Button>
                  ))}
                  <Button
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                    }}
                    className="button-gradient mt-4 "
                  >
                    Login
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
