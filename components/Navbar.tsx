"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import TrackLink from "@/components/TrackLink";
import { useDictionary } from "@/components/DictionaryProvider";
import { CV_PDF_HREF } from "@/data/site";

export default function Navbar() {
  const { dict } = useDictionary();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const menuId = useId();

  function closeMenu() {
    setOpen(false);
  }

  function toggleMenu() {
    setOpen((current) => !current);
  }

  // Cierra el menú al cambiar de ruta.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Evita scroll del body cuando el menú móvil está abierto (iOS).
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  function linkClass(href: string) {
    const active = pathname === href;
    return active
      ? "text-sm text-ink border-b border-ink pb-0.5"
      : "text-sm text-muted transition-colors hover:text-ink";
  }

  return (
    <header className="sticky top-0 z-50 isolate border-b border-line bg-bg/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-6">
        <Link
          href="/"
          className="min-w-0 shrink truncate text-sm font-medium tracking-wide text-ink"
          onClick={closeMenu}
        >
          {dict.profile.name}
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <nav className="flex items-center gap-6" aria-label={dict.navbar.navAria}>
            {dict.nav.map((link) => (
              <Link key={link.href} href={link.href} className={linkClass(link.href)}>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4 border-l border-line pl-6">
            <LocaleSwitcher />
            <TrackLink
              href={CV_PDF_HREF}
              event="download_cv"
              className="text-sm text-accent"
              target="_blank"
              rel="noopener noreferrer"
              download="Israel-Santos-CV.pdf"
            >
              {dict.navbar.downloadCv}
            </TrackLink>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 md:hidden">
          <LocaleSwitcher />
          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-md border border-line bg-surface touch-manipulation"
            onClick={toggleMenu}
            aria-expanded={open}
            aria-controls={menuId}
            aria-label={open ? dict.navbar.closeMenu : dict.navbar.openMenu}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav
          id={menuId}
          className="border-t border-line bg-bg/90 px-6 py-5 backdrop-blur-xl md:hidden"
          aria-label={dict.navbar.mobileAria}
        >
          <div className="flex flex-col gap-4">
            {dict.nav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="py-1 text-base text-ink"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
            <TrackLink
              href={CV_PDF_HREF}
              event="download_cv"
              className="py-1 text-base text-accent"
              onClick={closeMenu}
              target="_blank"
              rel="noopener noreferrer"
              download="Israel-Santos-CV.pdf"
            >
              {dict.navbar.downloadCv}
            </TrackLink>
          </div>
        </nav>
      )}
    </header>
  );
}
