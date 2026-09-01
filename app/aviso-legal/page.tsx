import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = { title: "Aviso legal" };

export default function LegalNoticePage() {
  return (
    <LegalPage eyebrow="Informação da demonstração" title="Aviso legal">
      <section>
        <h2>Natureza desta versão</h2>
        <p>Este website é um conceito independente desenvolvido para apresentação. Não foi encomendado, aprovado ou publicado por Ricardo Nuno Fonseca &amp; Associados — Sociedade de Advogados, SP, RL.</p>
      </section>
      <section>
        <h2>Conteúdo</h2>
        <p>Os dados institucionais utilizados provêm do diretório público da Ordem dos Advogados consultado em 1 de setembro de 2026. As restantes secções demonstram apenas uma possível arquitetura digital e não descrevem áreas de atuação, profissionais, clientes, resultados ou especializações da sociedade.</p>
      </section>
      <section>
        <h2>Sem aconselhamento jurídico</h2>
        <p>O conteúdo desta demonstração é geral e não constitui consulta ou aconselhamento jurídico. A sua visualização não cria qualquer relação profissional com a sociedade ou com os autores do conceito.</p>
      </section>
      <section>
        <h2>Publicação oficial</h2>
        <p>Antes de uma eventual publicação oficial, a identificação societária, os conteúdos, os contactos, os avisos e as obrigações profissionais e legais deverão ser validados pela sociedade e por profissionais portugueses competentes.</p>
      </section>
    </LegalPage>
  );
}
