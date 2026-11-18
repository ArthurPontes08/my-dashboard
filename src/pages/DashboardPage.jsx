import SummaryCard from '../components/SummaryCard.jsx';
import Panel from '../components/Panel.jsx';
import InfoRow from '../components/InfoRow.jsx';
import StatusBadge from '../components/StatusBadge.jsx';
import DetailsToggle from '../components/DetailsToggle.jsx';
import ListItem from '../components/ListItem.jsx';
import { transactions } from '../data/transactions.js';

export function DashboardPage() {
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

  const recentTransactions = transactions.slice(0, 3);

  return (
    <>
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

      <Panel id="list" title="Extrato Recente" className="xl:min-h-80">
        <ul className="flex flex-col">
          {recentTransactions.map((tx) => (
            <li key={tx.id}>
              <ListItem
                title={tx.title}
                amount={`R$ ${tx.amount.toFixed(2)}`}
                isPaid={tx.isPaid}
              />
            </li>
          ))}
        </ul>
      </Panel>
    </>
  );
}
