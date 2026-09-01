import { ArgumentField } from "./components/ArgumentField";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const modules = [
  {
    number: "01",
    title: "A sociedade",
    text: "História, estrutura e informação institucional reunidas numa leitura contínua."
  },
  {
    number: "02",
    title: "Áreas de atuação",
    text: "Páginas preparadas para conteúdo específico, revisto e aprovado pela sociedade."
  },
  {
    number: "03",
    title: "Equipa",
    text: "Perfis profissionais com percurso, idiomas e inscrições devidamente confirmados."
  },
  {
    number: "04",
    title: "Conhecimento",
    text: "Artigos organizados por tema, autoria e data, com enquadramento editorial claro."
  }
];

const principles = [
  {
    index: "I",
    title: "Informação sem ruído",
    text: "A hierarquia substitui o excesso. O utilizador encontra a informação institucional sem depender de efeitos ou caminhos escondidos."
  },
  {
    index: "II",
    title: "Conteúdo verificável",
    text: "A credibilidade nasce de dados concretos. Não são usados resultados, especialidades, distinções ou testemunhos sem confirmação."
  },
  {
    index: "III",
    title: "Contacto por iniciativa própria",
    text: "Os contactos permanecem acessíveis, mas a experiência evita urgência, promessas e captação insistente."
  }
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>
      <div className="concept-ribbon">
        <span>Conceito independente</span>
        <span>Conteúdo sujeito a validação</span>
        <span>01.09.2026</span>
      </div>
      <Header />
      <Experience />

      <main id="conteudo">
        <section className="hero" data-hero aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Coimbra · Sociedade de Advogados · Registo 18/25</p>
            <h1 id="hero-title">
              A informação ganha forma quando cada elemento ocupa o <em>lugar certo.</em>
            </h1>
            <p className="hero-intro">
              Proposta de website institucional para Ricardo Nuno Fonseca &amp; Associados — concebida para
              transformar informação dispersa numa presença digital clara, sóbria e acessível.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sociedade">Explorar o conceito</a>
              <a className="text-link" href="#contactos">Ver informação institucional <span aria-hidden="true">↘</span></a>
            </div>
          </div>
          <div className="hero-visual">
            <ArgumentField />
          </div>
          <div className="hero-foot">
            <span>Progresso</span>
            <div className="progress-track"><span /></div>
            <span>Descer</span>
          </div>
        </section>

        <section id="sociedade" className="alignment-scene" data-scroll-scene aria-labelledby="sociedade-title">
          <div className="alignment-sticky">
            <div className="section-label"><span>01</span><span>Informação confirmada</span></div>
            <div className="alignment-stage" aria-hidden="true">
              <p className="alignment-line line-one">RICARDO NUNO</p>
              <p className="alignment-line line-two">FONSECA &amp; ASSOCIADOS</p>
              <p className="alignment-line line-three">SOCIEDADE DE ADVOGADOS</p>
            </div>
            <div className="society-summary" data-reveal>
              <h2 id="sociedade-title">Uma sociedade com sede em Coimbra.</h2>
              <p>
                A proposta começa apenas com o que pode ser confirmado. A identidade, as áreas de atuação, a
                equipa e o conteúdo editorial serão desenvolvidos com a sociedade antes de uma publicação oficial.
              </p>
            </div>
            <dl className="fact-grid" data-reveal>
              <div><dt>Natureza</dt><dd>Sociedade de Advogados, SP, RL</dd></div>
              <div><dt>Constituição</dt><dd>24 de junho de 2025</dd></div>
              <div><dt>Registo</dt><dd>18/25 · Ordem dos Advogados</dd></div>
              <div><dt>Localidade</dt><dd>Coimbra, Portugal</dd></div>
            </dl>
          </div>
        </section>

        <section id="estrutura" className="structure-section section-pad" aria-labelledby="estrutura-title">
          <div className="section-heading" data-reveal>
            <p className="eyebrow dark">02 · Arquitetura editorial</p>
            <h2 id="estrutura-title">Quatro espaços.<br />Uma só leitura.</h2>
            <p>
              A estrutura está preparada para crescer sem transformar a navegação num catálogo. Cada conteúdo
              ocupa uma função reconhecível e pode ser atualizado de forma independente.
            </p>
          </div>
          <div className="module-list">
            {modules.map((module) => (
              <article className="module-row" key={module.number} data-reveal>
                <span className="module-number">{module.number}</span>
                <h3>{module.title}</h3>
                <p>{module.text}</p>
                <span className="module-mark" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section className="reading-scene" data-scroll-scene aria-labelledby="reading-title">
          <div className="reading-sticky">
            <div className="reading-copy">
              <p className="eyebrow">03 · Percurso</p>
              <h2 id="reading-title">Ler.<br />Compreender.<br /><em>Decidir.</em></h2>
              <p>O movimento acompanha a progressão da leitura. Não bloqueia, não altera a velocidade do navegador e desaparece quando o utilizador prefere movimento reduzido.</p>
            </div>
            <div className="reading-visual" aria-hidden="true">
              <div className="reading-card card-a"><span>01</span><strong>Contexto</strong><small>Quem é a sociedade</small></div>
              <div className="reading-card card-b"><span>02</span><strong>Matéria</strong><small>Como está organizada</small></div>
              <div className="reading-card card-c"><span>03</span><strong>Contacto</strong><small>Onde pode ser encontrada</small></div>
              <div className="reading-axis" />
            </div>
          </div>
        </section>

        <section id="principios" className="principles-section section-pad" aria-labelledby="principios-title">
          <div className="principles-intro" data-reveal>
            <p className="eyebrow dark">04 · Princípios digitais</p>
            <h2 id="principios-title">A confiança não precisa de superlativos.</h2>
          </div>
          <div className="principles-list">
            {principles.map((principle) => (
              <article key={principle.index} data-reveal>
                <span>{principle.index}</span>
                <h3>{principle.title}</h3>
                <p>{principle.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="contactos" className="contact-section" aria-labelledby="contactos-title">
          <div className="contact-top">
            <div data-reveal>
              <p className="eyebrow">05 · Informação institucional</p>
              <h2 id="contactos-title">Coimbra,<br />Portugal.</h2>
            </div>
            <p className="contact-note" data-reveal>
              Os canais abaixo constam do registo público da Ordem dos Advogados. Esta demonstração não possui
              formulário, analytics, chat ou recolha de dados pessoais.
            </p>
          </div>
          <div className="contact-grid" data-reveal>
            <address>
              <span>Morada</span>
              Rua Cidade de Halle, Lote 16, R/C A<br />
              3000-107 Coimbra<br />Portugal
            </address>
            <div>
              <span>Telefone</span>
              <a href="tel:+351239104447">+351 239 104 447</a>
            </div>
            <div>
              <span>Endereço eletrónico</span>
              <a href="mailto:ricardofonseca-51643C@adv.oa.pt">ricardofonseca-51643C@adv.oa.pt</a>
            </div>
            <div>
              <span>Referência oficial</span>
              <a href="https://portal.oa.pt/advogados/pesquisa-de-sociedades-de-advogados/?cg=C&cp=&lo=coimbra&m=&n=&o=0&op=&page=3&r=" target="_blank" rel="noreferrer">
                Consultar na Ordem dos Advogados <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className="contact-line" aria-hidden="true"><span /></div>
        </section>
      </main>

      <Footer />
    </>
  );
}
