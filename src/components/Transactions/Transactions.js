import s from './Transaction.module.css';

function Transaction({ items }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(row => (
          <tr key={row.id}>
            <td>{row.type}</td>
            <td>{row.amount}</td>
            <td>{row.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Transaction;
