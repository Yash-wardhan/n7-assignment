"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX, IconBrandGithub } from "@tabler/icons-react";
import {
  ChevronDown,
  Zap,
  Shield,
  Sparkles,
  BookOpen,
  PlayCircle,
  FileText,
  MessageSquare,
  ExternalLink,
  Headphones,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

import React, { useRef, useState } from "react";

export const Navbar = ({ children, className }) => {
  const ref = useRef(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <motion.div
      ref={ref}
      className={cn("fixed inset-x-0 top-4 z-40 w-full", className)}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { visible })
          : child
      )}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 0 0 1px rgba(255, 255, 255, 0.05)",
        width: "100%",
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      style={{
        maxWidth: "1000px",
        height: "64px",
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-xl bg-white/10 dark:bg-neutral-950/40 backdrop-blur-xl border border-white/10 px-4 py-2 lg:flex",
        visible && "bg-white/20 dark:bg-neutral-950/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }) => {
  const [hovered, setHovered] = useState(null);
  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);

  return (
    <motion.div
      onMouseLeave={() => {
        setHovered(null);
        setFeaturesOpen(false);
        setResourcesOpen(false);
      }}
      className={cn(
        "absolute inset-0 hidden flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium lg:flex lg:space-x-2",
        className
      )}
    >
      {items.map((item, idx) => {
        const isFeatures = item.name === "Solutions";
        const isResources = item.name === "Resources";

        if (isFeatures) {
          return (
            <div
              key={`link-${idx}`}
              onMouseEnter={() => {
                setHovered(idx);
                setFeaturesOpen(true);
                setResourcesOpen(false);
              }}
              onMouseLeave={() => setFeaturesOpen(false)}
              className="relative py-2"
            >
              <button className="relative z-20 flex items-center gap-1 px-4 py-2 transition-colors cursor-pointer">
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-white/10 dark:bg-neutral-800 -z-10"
                  />
                )}
                <span className="relative z-20 flex items-center gap-1 text-zinc-300 hover:text-white transition-colors">
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      featuresOpen && "rotate-180"
                    )}
                  />
                </span>
              </button>

              <AnimatePresence>
                {featuresOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] rounded-2xl border border-zinc-200 bg-white/95 p-5 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 z-50 grid grid-cols-12 gap-5"
                  >
                    {/* Left Column */}
                    <div className="col-span-7 flex flex-col gap-2">
                      <a
                        href="#features"
                        onClick={onItemClick}
                        className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                      >
                        <div className="rounded-lg bg-blue-50 p-2 text-blue-600 dark:bg-blue-950 dark:text-blue-400">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
                            Lightning Fast
                          </h4>
                          <p className="text-[10px] text-zinc-500 mt-0.5 leading-normal">
                            Optimized edge routing and fast build times.
                          </p>
                        </div>
                      </a>

                      <a
                        href="#features"
                        onClick={onItemClick}
                        className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors"
                      >
                        <div className="rounded-lg bg-indigo-50 p-2 text-indigo-600 dark:bg-indigo-950 dark:text-indigo-400">
                          <Shield className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-zinc-900 dark:text-white">
                            Security First
                          </h4>
                          <p className="text-[10px] text-zinc-500 mt-0.5 leading-normal">
                            DDOS prevention and secure SSL certificate keys.
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* Right Column - Banner */}
                    <div className="col-span-5 flex flex-col justify-between overflow-hidden rounded-xl bg-zinc-900 p-4 text-white relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-600 opacity-20" />
                      <div className="relative z-10">
                        <span className="inline-flex items-center gap-1 rounded-full bg-blue-500/20 px-2 py-0.5 text-[8px] font-medium text-blue-300">
                          <Sparkles className="h-2 w-2" /> Live Demo
                        </span>
                        <h4 className="text-[11px] font-bold mt-2 text-white">
                          N7 Admin Portal
                        </h4>
                        <p className="text-[9px] text-zinc-400 mt-1 leading-relaxed">
                          Monitor dynamic metrics and live build streams.
                        </p>
                      </div>
                      <div className="mt-3 relative rounded-lg overflow-hidden border border-white/10 aspect-video z-10 bg-zinc-950 flex flex-col p-2 select-none">
                        <div className="flex gap-1 mb-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                          <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                        </div>
                        <div className="flex-1 flex flex-col justify-between">
                          <div className="flex items-end gap-1 h-8">
                            <div className="w-full bg-blue-500/30 rounded-t h-4" />
                            <div className="w-full bg-blue-500/50 rounded-t h-6" />
                            <div className="w-full bg-blue-500/40 rounded-t h-5" />
                            <div className="w-full bg-indigo-500/80 rounded-t h-7" />
                          </div>
                          <div className="flex justify-between items-center text-[7px] text-zinc-500 font-mono mt-1 pt-1 border-t border-white/5">
                            <span>n7-app_v2</span>
                            <span className="text-green-400 font-bold">online</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        if (isResources) {
          return (
            <div
              key={`link-${idx}`}
              onMouseEnter={() => {
                setHovered(idx);
                setResourcesOpen(true);
                setFeaturesOpen(false);
              }}
              onMouseLeave={() => setResourcesOpen(false)}
              className="relative py-2"
            >
              <button className="relative z-20 flex items-center gap-1 px-4 py-2 transition-colors cursor-pointer">
                {hovered === idx && (
                  <motion.div
                    layoutId="hovered"
                    className="absolute inset-0 h-full w-full rounded-full bg-white/10 dark:bg-neutral-800 -z-10"
                  />
                )}
                <span className="relative z-20 flex items-center gap-1 text-zinc-300 hover:text-white transition-colors">
                  {item.name}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-300",
                      resourcesOpen && "rotate-180"
                    )}
                  />
                </span>
              </button>

              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[300px] rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/95 z-50"
                  >
                    {/* Learn section */}
                    <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest px-2.5 pb-2">
                      Learn
                    </p>
                    {[
                      {
                        icon: BookOpen,
                        label: "Documentation",
                        sub: "Guides, API reference, and examples",
                      },
                      {
                        icon: PlayCircle,
                        label: "Video tutorials",
                        sub: "Step-by-step walkthroughs",
                      },
                      {
                        icon: FileText,
                        label: "Changelog",
                        sub: "What's new in every release",
                      },
                    ].map(({ icon: Icon, label, sub }) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center gap-3 rounded-xl px-2.5 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group"
                      >
                        <Icon className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-zinc-900 dark:text-white">
                            {label}
                          </p>
                          <p className="text-[10px] text-zinc-500">{sub}</p>
                        </div>
                        <ExternalLink className="h-3 w-3 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}

                    <div className="border-t border-zinc-100 dark:border-zinc-800 my-2" />

                    {/* Community section */}
                    <p className="text-[10px] font-medium text-zinc-400 uppercase tracking-widest px-2.5 pb-2">
                      Community
                    </p>
                    {[
                      {
                        icon: MessageSquare,
                        label: "Community forum",
                        sub: "Ask questions and share ideas",
                      },
                      {
                        icon: IconBrandGithub,
                        label: "GitHub",
                        sub: "Open source integrations and tools",
                      },
                    ].map(({ icon: Icon, label, sub }) => (
                      <a
                        key={label}
                        href="#"
                        className="flex items-center gap-3 rounded-xl px-2.5 py-2 hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors group"
                      >
                        <Icon className="h-4 w-4 text-zinc-400 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="text-xs font-medium text-zinc-900 dark:text-white">
                            {label}
                          </p>
                          <p className="text-[10px] text-zinc-500">{sub}</p>
                        </div>
                        <ExternalLink className="h-3 w-3 text-zinc-300 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ))}

                    {/* CTA */}
                    <div className="mt-2 mx-1 rounded-xl bg-blue-50 dark:bg-blue-950/40 p-3 flex items-center gap-3 cursor-pointer hover:bg-blue-100 dark:hover:bg-blue-950/60 transition-colors">
                      <Headphones className="h-5 w-5 text-blue-500 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">
                          Talk to support
                        </p>
                        <p className="text-[10px] text-blue-500 dark:text-blue-400">
                          Get help from the N7 team
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        }

        return (
          <a
            onMouseEnter={() => {
              setHovered(idx);
              setFeaturesOpen(false);
              setResourcesOpen(false);
            }}
            onClick={onItemClick}
            className="relative px-4 py-2 text-zinc-300 hover:text-white transition-colors"
            key={`link-${idx}`}
            href={item.link}
          >
            {hovered === idx && (
              <motion.div
                layoutId="hovered"
                className="absolute inset-0 h-full w-full rounded-full bg-white/10 dark:bg-neutral-800"
              />
            )}
            <span className="relative z-20">{item.name}</span>
          </a>
        );
      })}
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }) => {
  return (
    <motion.div
      animate={{
        backdropFilter: "blur(16px)",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "0 0 0 1px rgba(255, 255, 255, 0.05)",
        width: "100%",
        paddingRight: visible ? "12px" : "0px",
        paddingLeft: visible ? "12px" : "0px",
        borderRadius: visible ? "4px" : "2rem",
        y: 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-white/10 dark:bg-neutral-950/40 backdrop-blur-xl border border-white/10 px-4 py-2 lg:hidden",
        visible && "bg-white/20 dark:bg-neutral-950/50",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({ children, className }) => {
  return (
    <div className={cn("flex w-full flex-row items-center justify-between w-[90%]", className)}>
      {children}
    </div>
  );
};

export const MobileNavMenu = ({ children, className, isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full h-[160px] flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950",
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({ isOpen, onClick }) => {
  return isOpen ? (
    <IconX className="text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-white" onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <span className="font-semibold text-xl text-white">N7</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};