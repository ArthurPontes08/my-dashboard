import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';
import InfoRow from './components/InfoRow.jsx';
import StatusBadge from './components/StatusBadge.jsx';
import DetailsToggle from './components/DetailsToggle.jsx';

const summaryCards = [
  {
    id: 'balance',
    title: 'Saldo atual',
    value: 'R$ 4.250',
    icon: '💰',
    isHighlighted: true,
  },
  { id: 'expenses', title: 'Despesas', value: 'R$ 1.890', icon: '📉' },
  { id: 'investments', title: 'Investimentos', value: 'R$ 12.400', icon: '📈' },
  { id: 'savings', title: 'Economia', value: '24%' },
];

const transactions = [
  { id: 't1', title: 'Supermercado Dia', amount: 'R$ 320,50', isPaid: true },
  { id: 't2', title: 'Salário Mensal', amount: 'R$ 4.500,00', isPaid: true },
  { id: 't3', title: 'Conta de Luz', amount: 'R$ 185,20', isPaid: false },
  { id: 't4', title: 'Assinatura Netflix', amount: 'R$ 55,90', isPaid: true },
  { id: 't5', title: 'Manutenção Veículo', amount: 'R$ 450,00', isPaid: false },
];

function App() {
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
              {' '}
              Fatura do Cartão de Crédito
            </h3>
            <StatusBadge label="Jogando" isActive />
            <StatusBadge label="Single player" />
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
            <p>Falta o último chefe e 3 áreas do mapa.</p>
          </DetailsToggle>
        </Panel>

        <Panel id="list" title="Extrato" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>

        <Panel id="list" title="Extrato" className="xl:min-h-80">
          <ul className="flex flex-col">
            {transactions.map((tx) => (
              <li
                key={tx.id}
                className="flex flex-wrap items-center justify-between gap-2 border-b border-border py-3"
              >
                <div>
                  <p className="font-bold">{tx.title}</p>
                  <p className="text-sm text-muted">Transação recente</p>
                </div>
                <span className="font-semibold">{tx.amount}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
