import { Link } from 'react-router-dom';
import Panel from '../components/Panel.jsx';

export function NotFoundPage() {
  return (
    <Panel
      id="not-found"
      title="Página não encontrada"
      className="md:col-span-2 xl:row-span-3"
    >
      <p className="text-muted">
        Esse endereço não existe no painel financeiro.
      </p>
      <div className="mt-4">
        <Link
          to="/"
          className="inline-block rounded-lg bg-primary px-4 py-2 font-bold text-background"
        >
          Voltar ao painel
        </Link>
      </div>
    </Panel>
  );
}
