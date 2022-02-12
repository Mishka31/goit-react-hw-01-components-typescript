import s from './transaction-history.module.css'

type Items = {
  id: string
  type: string
  amount: string
  currency: string
}

interface Props {
  items: Items[]
}

function TransactionHistory({ items }: Props) {
  return (
    <section className={s.section}>
      <table className={s.table}>
        <thead className={s.thead}>
          <tr className={s.tr}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody className={s.tbody}>
          {items.map((i) => (
            <tr key={i.id} className={s.tr}>
              <td className={s.td}>{i.type}</td>
              <td className={s.td}>{i.amount}</td>
              <td className={s.td}>{i.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}

export default TransactionHistory
