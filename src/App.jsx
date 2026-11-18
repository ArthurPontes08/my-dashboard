import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';
import ListItem from './components/ListItem.jsx';
import { useState } from 'react';
import { transactions } from './data/transactions.js';

const filterOptions = [
  { id: 'all', label: 'Todas' },
  { id: 'paid', label: 'Pagas' },
  { id: 'pending', label: 'Pendentes' },
];

function App() {
  const [statusFilter, setStatusFilter] = useState('all');
  const [search, setSearch] = useState('');

  const totalAmount = transactions.reduce((total, tx) => total + tx.amount, 0);

  const paidCount = transactions.filter((tx) => tx.isPaid).length;

  const pendingCount = transactions.length - paidCount;

  const summaryCards = [
    {
      id: 'balance',
      title: 'Total Registado',
      value: `R$ ${totalAmount.toFixed(2)}`,
      icon: '💰',
      isHighlighted: true,
    },
    {
      id: 'total-tx',
      title: 'Transações',
      value: transactions.length,
      icon: '📄',
    },
    { id: 'paid-tx', title: 'Pagas', value: paidCount, icon: '✅' },
    { id: 'pending-tx', title: 'Pendentes', value: pendingCount, icon: '⏳' },
  ];

  const visibleTransactions = transactions.filter((tx) => {
    const matchesStatus =
      statusFilter === 'all' ||
      (statusFilter === 'paid' && tx.isPaid) ||
      (statusFilter === 'pending' && !tx.isPaid);

    const matchesSearch = tx.title.toLowerCase().includes(search.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <main
        className="grid flex-1 grid-cols-1 content-start gap-4 p-4
        md:grid-cols-2 md:gap-6 md:p-6
        xl:grid-cols-[15rem_1fr_1fr] xl:p-8"
      >
        <Menu />

        <Panel id="summary" title="Resumo" className="md:col-span-2">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {summaryCards.map((card) => (
              <SummaryCard
                key={card.id}
                title={card.title}
                value={card.value}
                icon={card.icon}
                isHighlighted={card.isHighlighted}
              />
            ))}
          </div>
        </Panel>

        <Panel
          id="highlight"
          title="Próximo vencimento"
          className="md:col-span-2"
        >
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-heading text-xl font-bold">
              Fatura do Cartão de Crédito
            </h3>
            <StatusBadge label="Em aberto" isActive />
            <StatusBadge label="Débito automático" />
          </div>

          <p className="mt-1 text-muted">
            Fechamento e pagamento previsto para os próximos dias.
          </p>

          <div className="mt-4 grid gap-x-6 md:grid-cols-2">
            <InfoRow label="Vencimento" value="15/11/2026" />
            <InfoRow label="Valor atual" value="R$ 1.450,00" />
            <InfoRow label="Instituição" value="Nubank" />
            <InfoRow label="Limite usado" value="48%" />
          </div>

          <DetailsToggle>
            <p>
              Inclui gastos com supermercado, assinaturas de serviços digitais e
              farmácia acumulados no ciclo atual.
            </p>
          </DetailsToggle>
        </Panel>

        <Panel id="list" title="Extrato" className="xl:min-h-80">
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
                <li
                  key={tx.id}
                  className="flex flex-wrap items-center justify-between gap-2 border-b border-border py-3"
                >
                  <div>
                    <p className="font-bold">{tx.title}</p>
                    <p className="text-sm text-muted">Transação recente</p>
                  </div>
                  <span className="font-semibold">
                    R$ {tx.amount.toFixed(2)}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
