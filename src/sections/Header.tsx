"use client";
import { FC, MouseEvent, useEffect, useState } from "react";
import Button from "@/components/Button";
import { motion, useAnimate } from "motion/react";

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  { label: "About", href: "#intro" },
  { label: "Selected Works", href: "#projects" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Header: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scope, animate] = useAnimate();
  const [navScope] = useAnimate();

  useEffect(() => {
    if (isOpen) {
      animate([
        [".top-line", { translateY: 4 }],
        [".top-line", { rotate: 45 }],
        [".bottom-line", { translateY: -4 }],
        [".bottom-line", { rotate: -45 }],
        [navScope.current, { height: "100%" }, { duration: 0.7 }]
      ]);
    } else {
      animate([
        [".top-line", { rotate: 0 }],
        [".top-line", { translateY: 0 }],
        [".bottom-line", { rotate: 0 }],
        [".bottom-line", { translateY: 0 }],
        [navScope.current, { height: 0 }]
      ]);
    }
  }, [isOpen, animate, navScope]);

  const handleClickMobileNavItem = (e: MouseEvent<HTMLAnchorElement>) => {
    const url = new URL(e.currentTarget.href);
    const hash = url.hash;
    const target = document.querySelector(hash);

    if (target) {
      e.preventDefault();
      setIsOpen(false);
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      {/* Mobile Menu */}
      <div className="fixed top-0 left-0 w-full h-0 overflow-hidden bg-stone-900 z-10" ref={navScope}>
        <nav className="mt-20 flex flex-col">
          {navItems.map(({ label, href }) => (
            <a
              href={href}
              key={label}
              className="text-stone-200 border-t last:border-b border-stone-800 py-8 group/nav-item relative z-10"
              onClick={handleClickMobileNavItem}
            >
              <div className="container !max-w-full flex items-center justify-between">
                <span className="text-3xl group-hover/nav-item:pl-4 transition-all duration-500">
                  {label}
                </span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </div>
              <div className="absolute w-full h-0 bg-stone-800 group-hover/nav-item:h-full transition-all duration-500 bottom-0 -z-10"></div>
            </a>
          ))}
        </nav>
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 w-full backdrop-blur-md z-10">
        <div className="container !max-w-full">
          <div className="flex justify-between h-20 items-center">
            <a href=" ">
              <div className="text-xl font-bold uppercase text-stone-900">Prince&nbsp;Bhesaniya</div>
            </a>
          </div>
        </div>
      </div>

      {/* Navigation + Menu Button */}
      <div className="fixed top-0 left-0 w-full z-10">
        <div className="container !max-w-full">
          <div className="flex justify-end h-20 items-center">
            <div className="flex items-center gap-4">
              <div ref={scope} className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <motion.rect x="3" y="7" width="18" height="2" fill="currentColor" className="top-line" style={{ transformOrigin: "12px 8px" }} />
                  <motion.rect x="3" y="15" width="18" height="2" fill="currentColor" className="bottom-line" style={{ transformOrigin: "12px 16px" }} />
                </svg>
              </div>
              <Button variant="primary" className="hidden md:inline-flex">Contact Me</Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;