import type { Metadata } from "next";
import { LegalPage } from "../components/LegalPage";

export const metadata: Metadata = { title: "Privacidade" };

export default function PrivacyPage() {
  return (
    <LegalPage eyebrow="Versão de apresentação" title="Privacidade">
      <section>
        <h2>Recolha de dados</h2>
        <p>Esta demonstração não contém formulários, newsletter, chat, área reservada, analytics, pixels publicitários, mapas incorporados ou ferramentas de profiling.</p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>Não são definidos cookies opcionais pelo website. Por esse motivo, esta versão não apresenta um banner de consentimento meramente decorativo.</p>
      </section>
      <section>
        <h2>Registos técnicos</h2>
        <p>O fornecedor de alojamento poderá tratar dados técnicos estritamente necessários à segurança e disponibilização do website, como endereço IP, data, hora e recurso solicitado, de acordo com a respetiva documentação.</p>
      </section>
      <section>
        <h2>Versão oficial</h2>
        <p>Uma eventual versão oficial deverá possuir uma política de privacidade completa, identificando o responsável pelo tratamento, finalidades, bases de licitude, conservação, destinatários e direitos dos titulares.</p>
      </section>
    </LegalPage>
  );
}
