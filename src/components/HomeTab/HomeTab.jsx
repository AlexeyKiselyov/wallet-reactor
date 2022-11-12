import { useMediaQuery } from 'react-responsive';
import s from './HomeTab.module.scss';

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
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });
  const isLaptop = useMediaQuery({ query: '(min-width: 768px)' });
  return (
    <>
      {isMobile && (
        <div className={s.tableWrapMob}>
          <div className={s.scrollTableMob}>
            {/* <table>
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
            </table> */}

            <div className={s.scrollTableBodyMob}>
              {tableData.map(el => (
                <table>
                  <tr>
                    <td>Data</td>
                    <td>{el.date}</td>
                  </tr>
                  <tr>
                    <td>Type</td>
                    <td>{el.type}</td>
                  </tr>
                  <tr>
                    <td>Category</td>
                    <td>{el.category}</td>
                  </tr>
                  <tr>
                    <td>Comment</td>
                    <td>{el.comment}</td>
                  </tr>
                  <tr>
                    <td>Sum</td>
                    <td>{el.sum}</td>
                  </tr>
                  <tr>
                    <td>Balance</td>
                    <td>{el.balance}</td>
                  </tr>
                </table>
              ))}
            </div>
          </div>
        </div>
      )}

      {isLaptop && (
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
      )}
    </>
  );
};
