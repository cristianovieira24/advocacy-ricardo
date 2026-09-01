import Link from "next/link";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div>
          <p className="footer-name">Ricardo Nuno Fonseca &amp; Associados</p>
          <p>Sociedade de Advogados, SP, RL</p>
        </div>
        <div>
          <p>Registo 18/25</p>
          <p>Conselho Regional de Coimbra</p>
        </div>
        <nav aria-label="Informação legal">
          <Link href="/aviso-legal">Aviso legal</Link>
          <Link href="/privacidade">Privacidade</Link>
          <Link href="/acessibilidade">Acessibilidade</Link>
        </nav>
      </div>
      <div className="footer-note">
        <p>Conceito independente para apresentação. Não é o website oficial da sociedade.</p>
        <p>© 2026 · Conteúdo institucional sujeito a validação.</p>
      </div>
    </footer>
  );
}
