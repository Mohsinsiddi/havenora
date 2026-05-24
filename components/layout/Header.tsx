"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/components/brand/Logo";
import { ButtonLink } from "@/components/ui/Button";
import { ChevronDown, LeafSpark, Menu, Close } from "@/components/ui/icons";
import { nav } from "@/lib/content";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on route change + lock scroll while open
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => void (document.body.style.overflow = "");
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/85 backdrop-blur-md shadow-[0_1px_0_rgba(93,111,85,0.12)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8">
        <Link href="/" aria-label="Havenora Care — home" className="shrink-0">
          <Logo variant="horizontal" markClassName="h-11 w-auto" hideWordmarkOnMobile />
        </Link>

        {/* desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-full px-3.5 py-2 text-body transition-colors ${
                  isActive(item.href)
                    ? "text-lavender"
                    : "text-forest/90 hover:text-lavender"
                }`}
              >
                {item.label}
                {item.children && <ChevronDown className="text-sage transition-transform group-hover:rotate-180" />}
              </Link>

              {item.children && (
                <div className="invisible absolute left-0 top-full min-w-48 translate-y-1 rounded-2xl border border-sage-light/40 bg-ivory p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  {item.children.map((c) => (
                    <Link
                      key={c.href}
                      href={c.href}
                      className="block rounded-xl px-3 py-2 text-small text-forest/85 hover:bg-cream hover:text-lavender"
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <div className="hidden sm:block">
            <ButtonLink href="/contact" size="sm">
              Book a Session <LeafSpark className="text-honey" />
            </ButtonLink>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full text-forest hover:bg-sage-light/30 lg:hidden"
          >
            {open ? <Close className="text-2xl" /> : <Menu className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* mobile drawer */}
      <div
        className={`overflow-hidden border-t border-sage-light/30 bg-cream/95 backdrop-blur-md transition-[max-height] duration-500 lg:hidden ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-5 py-4">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`rounded-xl px-4 py-3 text-body-lg ${
                isActive(item.href) ? "bg-sage-light/30 text-lavender" : "text-forest"
              }`}
            >
              {item.label}
            </Link>
          ))}
          <ButtonLink href="/contact" className="mt-3 w-full">
            Book a Session <LeafSpark className="text-honey" />
          </ButtonLink>
        </nav>
      </div>
    </header>
  );
}
