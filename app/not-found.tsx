import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <p className="eyebrow">Erro 404</p>
      <h1>Esta página não faz parte do processo.</h1>
      <p>O endereço pode estar incompleto ou ter sido alterado.</p>
      <Link className="button button-primary" href="/">Voltar à página inicial</Link>
    </main>
  );
}
