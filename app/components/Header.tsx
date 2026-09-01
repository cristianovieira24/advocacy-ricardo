"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#sociedade", label: "Sociedade" },
  { href: "/#atuacao", label: "Atuação" },
  { href: "/#equipa", label: "Equipa" },
  { href: "/#contactos", label: "Contactos" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [open]);

  return (
    <header className="site-header" data-open={open ? "true" : "false"}>
      <div className="header-inner">
        <Link className="wordmark" href="/" aria-label="Página inicial">
          <span>Ricardo Nuno Fonseca</span>
          <small>&amp; Associados · Sociedade de Advogados</small>
        </Link>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>

        <nav id="primary-navigation" className="primary-nav" aria-label="Navegação principal">
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
