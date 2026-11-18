import { useState } from 'react';
import Panel from '../components/Panel.jsx';
import ListItem from '../components/ListItem.jsx';
import { transactions } from '../data/transactions.js';

const filterOptions = [
  { id: 'all', label: 'Todas' },
  { id: 'paid', label: 'Pagas' },
  { id: 'pending', label: 'Pendentes' },
];

export function ListPage() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const visibleTransactions = transactions.filter((tx) => {
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'paid' && tx.isPaid) ||
      (statusFilter === 'pending' && !tx.isPaid);

    const matchesSearch = tx.title.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="md:col-span-2 xl:col-span-2">
      <Panel id="list" title="Extrato Completo" className="xl:min-h-80">
        {/* Caixa de Pesquisa (Input Controlado) */}
        <div className="mb-4">
          <label htmlFor="transaction-search" className="sr-only">
            Pesquisar transação
          </label>
          <input
            id="transaction-search"
            type="search"
            placeholder="Pesquisar por nome..."
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            className="w-full rounded-md border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none"
          />
        </div>

        <div className="mb-4 flex flex-wrap gap-2">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              type="button"
              onClick={() => setStatusFilter(option.id)}
              aria-pressed={statusFilter === option.id}
              className={
                statusFilter === option.id
                  ? 'rounded-full border border-primary bg-primary px-3 py-1 text-sm font-semibold text-background'
                  : 'rounded-full border border-border px-3 py-1 text-sm text-muted hover:border-primary'
              }
            >
              {option.label}
            </button>
          ))}
        </div>

        {visibleTransactions.length === 0 ? (
          <p className="text-muted">Nenhuma transação encontrada.</p>
        ) : (
          <ul className="flex flex-col">
            {visibleTransactions.map((tx) => (
              <li key={tx.id}>
                <ListItem
                  title={tx.title}
                  amount={tx.amount}
                  isPaid={tx.isPaid}
                />
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </div>
  );
}
