# Relatório de verificação — 1 de setembro de 2026

## Verificações concluídas

- TypeScript em modo estrito: aprovado.
- ESLint / regras Core Web Vitals: aprovado, sem avisos.
- Build de produção Next.js: aprovado.
- Oito rotas geradas, incluindo páginas jurídicas, robots, manifest e imagem Open Graph.
- Homepage, aviso legal, privacidade e acessibilidade: HTTP 200.
- Página inexistente: HTTP 404.
- Cabeçalhos verificados: `nosniff`, `DENY`, política de referência, política de permissões e `noindex`.
- HTML com um único `h1`, idioma `pt-PT`, landmarks, skip link e identificadores únicos.
- Links vazios: não encontrados.
- Formulários, cookies, local storage, analytics, pixels e pedidos de rede do cliente: não encontrados.
- Breakpoints dedicados a tablet, telemóvel e telemóvel pequeno presentes.
- Secções sticky e animações pesadas são desativadas no mobile e em `prefers-reduced-motion`.

## Contraste calculado

| Combinação | Resultado |
|---|---:|
| Papel sobre verde-tinta | 14,21:1 |
| Verde de destaque sobre fundo profundo | 13,81:1 |
| Texto claro secundário sobre fundo profundo | 7,89:1 |
| Texto secundário sobre papel | 5,74:1 |

## Desempenho do build

- JavaScript inicial da homepage: 97,5 kB segundo o relatório do Next.js.
- A homepage é pré-renderizada.
- Não há imagens raster, bibliotecas de animação, WebGL ou pedidos a fontes externas.

## Limitação conhecida

O navegador remoto utilizado para inspeção rejeitou endereços `localhost` por política do ambiente. Assim, não foi possível concluir uma captura visual automatizada nesta execução. O build, a marcação renderizada, as rotas, os breakpoints e as regras de layout foram verificados, mas recomenda-se uma última revisão visual após publicação da preview na Vercel e antes do envio à sociedade.

## Testes finais após publicação

- Chrome, Firefox e Safari atuais.
- iPhone em largura de 390 px.
- Android intermediário em largura de 360 px.
- Tablet em 768 px.
- Teclado completo e leitor de ecrã.
- Zoom de 200%.
- Lighthouse e AccessMonitor através do URL público.
- Validação dos textos e dados pela sociedade.
