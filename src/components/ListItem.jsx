import StatusBadge from './StatusBadge.jsx';

export default function ListItem({ title, amount, isPaid }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border py-3">
      <div>
        <p className="font-bold">{title}</p>
        <p className="text-sm text-muted">
          {isPaid ? 'Transação paga' : 'Pagamento pendente'}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <span className="font-semibold">
          R$ {typeof amount === 'number' ? amount.toFixed(2) : amount}
        </span>
        <StatusBadge
          label={isPaid ? 'Pago' : 'Pendente'}
          isActive={isPaid}
        />
      </div>
    </div>
  );
}
