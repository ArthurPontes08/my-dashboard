import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Menu from './components/Menu.jsx';
import SummaryCard from './components/SummaryCard.jsx';
import Panel from './components/Panel.jsx';

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
            <SummaryCard title="Saldo atual" value={42} icon="🎮" />
            <SummaryCard title="Despesas" value={318} icon="⏱️" />
            <SummaryCard
              title="Investimentos"
              value={17}
              icon="🏆"
              isHighlighted
            />
            <SummaryCard title="Economia" value="8,6" icon={null} />
          </div>
        </Panel>

        <Panel
          id="highlight"
          title="Próximo vencimento"
          className="md:col-span-2"
        >
          <h3 className="font-heading text-xl font-bold">
            Fatura do Cartão de Crédito
          </h3>
          <p className="mt-1 text-muted">
            Fechamento e pagamento previsto para os próximos dias.
          </p>
        </Panel>

        <Panel id="list" title="Lista" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>

        <Panel id="chart" title="Gráfico" className="xl:min-h-80">
          <p className="text-muted">Em construção.</p>
        </Panel>
      </main>
      <Footer />
    </div>
  );
}

export default App;
