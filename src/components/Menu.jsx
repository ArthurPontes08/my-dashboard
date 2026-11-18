import { Link } from 'react-router-dom';

export default function Menu() {
  return (
    <nav className="flex flex-col gap-2 p-2">
      <Link
        to="/"
        className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50"
      >
        Resumo
      </Link>
      <Link
        to="/"
        className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50"
      >
        Próximo vencimento
      </Link>
      <Link
        to="/lista"
        className="rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50"
      >
        Extrato
      </Link>
    </nav>
  );
}
