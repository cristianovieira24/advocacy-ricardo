import Image from "next/image";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

const practiceArchitecture = [
  {
    number: "01",
    title: "Pessoas e relações",
    text: "Uma entrada clara para matérias que acompanham decisões pessoais, familiares e patrimoniais."
  },
  {
    number: "02",
    title: "Contratos e património",
    text: "Conteúdo organizado por situação, documento e momento de decisão — sem linguagem desnecessariamente técnica."
  },
  {
    number: "03",
    title: "Empresas e atividade",
    text: "Um espaço preparado para enquadrar necessidades de organizações, sócios e projetos profissionais."
  },
  {
    number: "04",
    title: "Prevenção e conflito",
    text: "Informação que distingue acompanhamento preventivo, negociação e representação em litígio."
  }
];

const profileContents = [
  "Percurso e inscrição profissional",
  "Áreas de prática confirmadas",
  "Idiomas e formas de contacto"
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Saltar para o conteúdo</a>

      <div className="concept-ribbon">
        <span>Conceito independente</span>
        <span>Direção fotográfica de apresentação</span>
        <span>Coimbra · 2026</span>
      </div>

      <Header />
      <Experience />

      <main id="conteudo">
        <section className="hero" data-hero aria-labelledby="hero-title">
          <div className="hero-media" aria-hidden="true">
            <Image src="/images/hero-office.webp" alt="" fill priority sizes="100vw" />
          </div>
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-orbit orbit-one" aria-hidden="true" />
          <div className="hero-orbit orbit-two" aria-hidden="true" />

          <div className="hero-layout">
            <div className="hero-copy">
              <p className="eyebrow">Sociedade de Advogados · Coimbra</p>
              <h1 id="hero-title">
                Compreender<br />
                antes de <em>decidir.</em>
              </h1>
              <p className="hero-intro">
                Uma proposta de presença digital para Ricardo Nuno Fonseca &amp; Associados — construída
                para tornar a informação institucional mais clara, próxima e fácil de consultar.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#sociedade">Conhecer a sociedade</a>
                <a className="button button-ghost" href="#contactos">Contactos <span aria-hidden="true">↗</span></a>
              </div>
            </div>

            <div className="hero-index" aria-hidden="true">
              <span>RNF</span>
              <span>40° 12′ N</span>
              <span>08° 25′ W</span>
            </div>
          </div>

          <div className="hero-caption">
            <span>Imagem conceptual para direção fotográfica</span>
            <span className="hero-caption-line" />
            <span>Descer para explorar</span>
          </div>
        </section>

        <section className="fact-band" aria-label="Informação oficial da sociedade">
          <div><span>Natureza</span><strong>Sociedade de Advogados, SP, RL</strong></div>
          <div><span>Registo</span><strong>18/25 · Ordem dos Advogados</strong></div>
          <div><span>Sede</span><strong>Coimbra, Portugal</strong></div>
          <div><span>Constituição</span><strong>24 de junho de 2025</strong></div>
        </section>

        <section id="sociedade" className="society-section section-pad" aria-labelledby="sociedade-title">
          <div className="society-heading" data-reveal>
            <p className="eyebrow dark">01 · A sociedade</p>
            <h2 id="sociedade-title">
              Uma presença com <em>rosto, contexto</em> e informação útil.
            </h2>
          </div>

          <div className="society-layout">
            <div className="society-copy" data-reveal>
              <p className="lead">
                O website deixa de apresentar apenas um nome e um contacto. Passa a explicar quem está do outro
                lado, como a informação está organizada e onde começa cada conversa.
              </p>
              <p>
                Esta demonstração utiliza somente dados institucionais confirmados no registo público. O percurso
                da equipa, as áreas de atuação e os textos jurídicos serão definidos com a sociedade antes de uma
                publicação oficial.
              </p>

              <a className="line-link" href="#equipa">
                Ver proposta para a equipa <span aria-hidden="true">↓</span>
              </a>
            </div>

            <figure className="portrait-frame" data-parallax-media data-reveal>
              <div className="portrait-image">
                <Image
                  src="/images/corridor-concept.webp"
                  alt="Imagem conceptual de uma profissional num espaço de trabalho contemporâneo"
                  fill
                  sizes="(max-width: 760px) 100vw, 44vw"
                />
              </div>
              <figcaption>
                <span>Direção fotográfica proposta</span>
                <span>Retratos oficiais a substituir na versão final</span>
              </figcaption>
            </figure>
          </div>
        </section>

        <section className="narrative-scene" data-scroll-scene aria-labelledby="percurso-title">
          <div className="narrative-sticky">
            <div className="narrative-media" aria-hidden="true">
              <Image src="/images/corridor-concept.webp" alt="" fill sizes="(max-width: 860px) 100vw, 60vw" />
              <div className="narrative-wash" />
            </div>

            <div className="narrative-counter" aria-hidden="true">
              <span data-counter>01</span>
              <i />
              <span>03</span>
            </div>

            <div className="narrative-copy">
              <p className="eyebrow">02 · Percurso proposto</p>
              <h2 id="percurso-title" className="sr-only">Percurso de acompanhamento proposto</h2>

              <article className="narrative-beat beat-one">
                <span>01</span>
                <h3>Escutar o contexto.</h3>
                <p>Antes da matéria, existe uma situação concreta. O primeiro contacto deve permitir explicá-la com clareza.</p>
              </article>
              <article className="narrative-beat beat-two">
                <span>02</span>
                <h3>Distinguir o essencial.</h3>
                <p>A informação certa reduz ruído e ajuda a perceber o que precisa de decisão, documento ou acompanhamento.</p>
              </article>
              <article className="narrative-beat beat-three">
                <span>03</span>
                <h3>Definir o próximo passo.</h3>
                <p>O website orienta sem prometer resultados e mantém o contacto acessível sem criar pressão comercial.</p>
              </article>
            </div>

            <p className="narrative-caption">O progresso do scroll altera o enquadramento e a leitura.</p>
          </div>
        </section>

        <section id="atuacao" className="practice-section section-pad" aria-labelledby="atuacao-title">
          <div className="practice-heading" data-reveal>
            <div>
              <p className="eyebrow dark">03 · Arquitetura de atuação</p>
              <h2 id="atuacao-title">Organizar primeiro.<br /><em>Detalhar depois.</em></h2>
            </div>
            <p>
              Uma estrutura inicial para receber as áreas efetivamente exercidas pela sociedade. Os títulos e
              conteúdos abaixo são uma proposta editorial e serão confirmados antes da publicação oficial.
            </p>
          </div>

          <div className="practice-list">
            {practiceArchitecture.map((item) => (
              <article className="practice-row" key={item.number} data-reveal>
                <span className="practice-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <span className="practice-arrow" aria-hidden="true">↗</span>
              </article>
            ))}
          </div>
        </section>

        <section id="equipa" className="team-section" aria-labelledby="equipa-title">
          <div className="team-media" data-team-media>
            <Image
              src="/images/team-concept.webp"
              alt="Imagem conceptual de uma equipa profissional reunida num escritório"
              fill
              sizes="100vw"
            />
            <div className="team-overlay" />
          </div>

          <div className="team-copy" data-reveal>
            <p className="eyebrow">04 · Equipa</p>
            <h2 id="equipa-title">As pessoas não podem ser um rodapé.</h2>
            <p>
              A versão oficial deverá apresentar cada profissional com uma fotografia coerente, informação
              verificável e um percurso fácil de compreender.
            </p>
            <ul>
              {profileContents.map((item) => <li key={item}>{item}</li>)}
            </ul>
            <span className="photo-disclaimer">Imagem conceptual · não representa a equipa real</span>
          </div>
        </section>

        <section className="closing-statement" aria-label="Princípio editorial">
          <p data-reveal>Confiança não se declara.</p>
          <p data-reveal>Constrói-se com <em>clareza.</em></p>
        </section>

        <section id="contactos" className="contact-section" aria-labelledby="contactos-title">
          <div className="contact-heading" data-reveal>
            <p className="eyebrow">05 · Contactos</p>
            <h2 id="contactos-title">Começar uma<br />conversa.</h2>
          </div>

          <div className="contact-details" data-reveal>
            <address>
              <span>Escritório</span>
              Rua Cidade de Halle, Lote 16, R/C A<br />
              3000-107 Coimbra · Portugal
            </address>

            <div>
              <span>Telefone</span>
              <a href="tel:+351239104447">+351 239 104 447</a>
            </div>

            <div>
              <span>Endereço eletrónico</span>
              <a href="mailto:ricardofonseca-51643C@adv.oa.pt">ricardofonseca-51643C@adv.oa.pt</a>
            </div>

            <a className="contact-cta" href="mailto:ricardofonseca-51643C@adv.oa.pt">
              Escrever uma mensagem <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-foot" data-reveal>
            <p>Dados constantes do registo público da Ordem dos Advogados.</p>
            <a
              href="https://portal.oa.pt/advogados/pesquisa-de-sociedades-de-advogados/?cg=C&cp=&lo=coimbra&m=&n=&o=0&op=&page=3&r="
              target="_blank"
              rel="noreferrer"
            >
              Consultar registo oficial <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
