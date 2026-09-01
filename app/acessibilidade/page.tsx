import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = { title: "Acessibilidade" };

export default function AccessibilityPage() {
  return (
    <LegalPage eyebrow="Objetivo de qualidade" title="Acessibilidade">
      <section>
        <h2>Princípios implementados</h2>
        <p>A demonstração utiliza HTML semântico, navegação por teclado, ligação para saltar conteúdo, foco visível, alvos táteis, contraste controlado e composição responsiva.</p>
      </section>
      <section>
        <h2>Movimento</h2>
        <p>As animações respeitam a preferência <code>prefers-reduced-motion</code>. Quando essa preferência está ativa, secções fixadas, deslocamentos e transições não essenciais são removidos.</p>
      </section>
      <section>
        <h2>Limitações</h2>
        <p>Esta página não constitui uma declaração formal de conformidade. Uma publicação oficial deverá ser acompanhada por auditoria real, testes com tecnologias de apoio e correção dos problemas encontrados.</p>
      </section>
    </LegalPage>
  );
}
