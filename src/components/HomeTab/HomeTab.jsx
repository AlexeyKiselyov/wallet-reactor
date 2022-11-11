import s from './HomeTab.module.css';

const tableData = [
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '-',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
  {
    date: '11.12.19',
    type: '+',
    category: 13,
    comment: 'some comment is here, maybe some text',
    sum: 15,
    balance: 16,
  },
];

export const HomeTab = () => {
  return (
    <div className={s.tableWrap}>
      <div className={s.scrollTable}>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Category</th>
              <th>Comment</th>
              <th>Sum</th>
              <th>Balance</th>
            </tr>
          </thead>
        </table>

        <div className={s.scrollTableBody}>
          <table>
            <tbody>
              {tableData.map(el => (
                <tr>
                  <td>{el.date}</td>
                  <td>{el.type}</td>
                  <td>{el.category}</td>
                  <td>{el.comment}</td>
                  <td>{el.sum}</td>
                  <td>{el.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
