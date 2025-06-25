"use client";
import { motion } from "motion/react";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/now",
    name: "Now",
  },
  {
    path: "/guestbook",
    name: "Guestbook",
  },
  {
    path: "/writing",
    name: "Writing",
  },
];

export default function Home() {
  let pathname = usePathname() || "/";
  const [hoveredPath, setHoveredPath] = useState(pathname);
  return (
    <div className="flex min-h-screen flex-col items-center">
      <div className="fixed top-0 flex items-center justify-between">
        <nav className="relative z-[100] flex w-full justify-start gap-2 rounded-lg">
          {navItems.map((item, index) => {
            const isActive = item.path === pathname;

            return (
              <Link
                key={item.path}
                className={`relative rounded-md px-4 py-2 text-sm no-underline duration-300 ease-in lg:text-base ${
                  isActive ? "text-zinc-100" : "text-zinc-400"
                }`}
                data-active={isActive}
                href={item.path}
                onMouseOver={() => setHoveredPath(item.path)}
                onMouseLeave={() => setHoveredPath(pathname)}
              >
                <span>{item.name}</span>
                {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 -z-10 h-full rounded-md bg-stone-800/80"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )}
                {/* {item.path === hoveredPath && (
                  <motion.div
                    className="absolute bottom-0 left-0 -z-10 h-full rounded-md bg-stone-800/80"
                    layoutId="navbar"
                    aria-hidden="true"
                    style={{
                      width: "100%",
                    }}
                    transition={{
                      type: "spring",
                      bounce: 0.25,
                      stiffness: 130,
                      damping: 9,
                      duration: 0.3,
                    }}
                  />
                )} */}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
