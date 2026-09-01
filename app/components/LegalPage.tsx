import { Footer } from "./Footer";
import { Header } from "./Header";

export function LegalPage({
  eyebrow,
  title,
  children
}: Readonly<{ eyebrow: string; title: string; children: React.ReactNode }>) {
  return (
    <>
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <div className="concept-ribbon">
        <span>Conceito independente</span><span>Não é o website oficial</span><span>01.09.2026</span>
      </div>
      <Header />
      <main id="conteudo" className="legal-page">
        <header>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
        </header>
        <div className="legal-content">{children}</div>
      </main>
      <Footer />
    </>
  );
}
