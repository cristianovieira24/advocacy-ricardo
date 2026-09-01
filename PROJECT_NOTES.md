# Diagnóstico e direção do projeto

## 1. Factos confirmados

- Denominação: Ricardo Nuno Fonseca & Associados — Sociedade de Advogados, SP, RL.
- Conselho Regional: Coimbra.
- Registo: 18/25.
- Constituição: 24 de junho de 2025.
- Morada: Rua Cidade de Halle, Lote 16, R/C A, 3000-107 Coimbra.
- Telefone: +351 239 104 447.
- Email público: ricardofonseca-51643C@adv.oa.pt.
- Fonte: diretório público da Ordem dos Advogados, consultado em 1 de setembro de 2026.

Não foram encontrados website próprio, logótipo público confirmado, retratos autorizados, áreas de atuação, composição completa da equipa ou informação societária suficiente para uma publicação oficial.

## 2. Leitura das referências

| Elemento observado | Função | Sensação | Aplicação | Risco | Adaptação |
|---|---|---|---|---|---|
| Grandes títulos editoriais | Criar hierarquia | Autoridade e clareza | Títulos fluidos e muito espaço negativo | Parecer template de advocacia | Tipografia sem símbolos jurídicos |
| Contraste escuro/claro | Separar momentos | Contenção e ritmo | Alternância entre tinta e papel | Azul-marinho genérico | Verde-tinta e marfim quente |
| Verde vivo | Marcar interação | Atualidade | Linha de progresso e foco | Aparência de startup | Uso restrito, nunca dominante |
| Cartões sobrepostos | Criar profundidade | Movimento | Planos que se alinham no scroll | Glassmorphism gratuito | Superfícies opacas e editoriais |
| Scroll narrativo | Conduzir leitura | Continuidade | Nome fragmentado que se organiza | Bloquear navegação | Sticky curto, sem hijacking, fallback estático |
| Fotografia de profissionais | Humanizar | Proximidade | Reservar estrutura futura | Inventar pessoas | Nenhum retrato na demonstração |

## 3. Direções consideradas

### A — Linha de fundamento — selecionada

Uma linha contínua atravessa a experiência e transforma fragmentos em estrutura. É a direção com melhor equilíbrio entre diferenciação, credibilidade, desempenho e adaptação mobile.

### B — Arquivo em camadas

Composição inspirada em dossiers e páginas sobrepostas. Forte para conteúdo, mas demasiado próxima de uma metáfora jurídica previsível.

### C — Intervalo institucional

Tipografia muito silenciosa e espaços vazios extremos. Elegante, porém menos memorável e com menor capacidade de demonstrar movimento.

## 4. Conceito selecionado

**Linha de fundamento** — a informação fragmentada ganha precisão à medida que o utilizador avança.

A linha verde não representa “justiça”; representa continuidade editorial. Os planos escuros organizam-se com o scroll, enquanto o conteúdo essencial permanece em HTML e acessível sem animação.

## 5. Sitemap da demonstração

- Página inicial
  - Abertura
  - Informação confirmada
  - Arquitetura editorial proposta
  - Percurso de leitura
  - Princípios digitais
  - Contactos públicos
- Aviso legal
- Privacidade
- Acessibilidade
- Página 404

## 6. Movimento

- Hero: planos derivados do grid editorial respondem suavemente ao primeiro trecho do scroll.
- Sociedade: as três partes da denominação alinham-se durante uma secção sticky curta.
- Percurso: três blocos de informação convergem para um eixo comum.
- Mobile: cenas sticky tornam-se composição estática vertical; nenhuma informação depende de hover.
- Movimento reduzido: transformações e transições são removidas.

## 7. Matriz resumida de conformidade

| Tema | Aplicação | Estado | Pendente |
|---|---|---|---|
| Veracidade | Só são publicados factos do diretório da OA | Implementado | Validação pela sociedade |
| Angariação | CTAs neutros; sem urgência ou promessas | Implementado | Revisão deontológica final |
| RGPD | Sem formulários, analytics ou cookies opcionais | Implementado na demo | Política oficial e fornecedores |
| Cookies | Nenhum banner falso; nenhum recurso opcional | Implementado na demo | Rever integrações futuras |
| Identificação | Nome, forma, registo, morada e contactos públicos | Parcial | NIPC, matrícula e outros dados |
| Acessibilidade | Semântica, teclado, foco, contraste, redução de movimento | Implementado e testável | Auditoria com tecnologias de apoio |
| SEO | Metadados presentes; demonstração bloqueada a indexação | Implementado | Ativar somente com autorização |
| Segurança | Sem recolha de dados; cabeçalhos defensivos | Implementado | CSP com nonce e revisão do alojamento |

## 8. Decisões técnicas

- Next.js e TypeScript para semântica, SEO, manutenção e páginas institucionais.
- Animação com CSS e JavaScript nativo: não há dependência de GSAP, Three.js ou WebGL sem necessidade conceptual.
- Sem imagens de stock e sem representação gerada de pessoas reais.
- Sem recursos de terceiros no carregamento da página.
