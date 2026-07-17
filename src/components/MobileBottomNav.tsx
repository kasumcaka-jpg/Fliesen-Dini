import { Home, ThumbsUp, Images, Milestone, MessageCircle } from "lucide-react";
import type { BottomNavItem } from "@/components/ui/bottom-nav-bar";

import BottomNavBar from "@/components/ui/bottom-nav-bar";

const navItems: BottomNavItem[] = [
  { label: "Home", icon: Home },
  { label: "Leistungen", icon: ThumbsUp },
  { label: "Referenzen", icon: Images },
  { label: "Prozess", icon: Milestone },
  { label: "Kontakt", icon: MessageCircle },
];

const targets = ["top", "leistungen", "referenzen", "prozess", "kontakt"];

export default function MobileBottomNav() {
  const scrollTo = (target: string) => {
    if (target === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="md:hidden fixed inset-x-0 bottom-4 z-40 flex justify-center px-4">
      <BottomNavBar
        stickyBottom
        defaultIndex={0}
        navItems={navItems}
        className="w-fit"
        onSelect={(index) => scrollTo(targets[index])}
      />
    </div>
  );
}
