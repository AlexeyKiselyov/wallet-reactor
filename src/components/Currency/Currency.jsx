import { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Box from '@material-ui/core/Box';
import Media from 'react-media';

import GradientSvg from './gradientSvg';
import styles from './styles';

const PRIVATBANK_API = 'https://wallet-29.herokuapp.com/api/pb';

const Currency = () => {
  const [isLoader, setIsLoader] = useState(true);
  const useStyles = makeStyles(styles(isLoader));
  const classes = useStyles();
  const [currencyData, setCurrencyData] = useState([]);

  useEffect(() => {
    axios(PRIVATBANK_API)
      .then(({ data }) => {
        const newData = data.slice(0, 3);
        newData[2].ccy = 'RUB';
        setCurrencyData(newData);
        setIsLoader(false);
      })
      .catch(data => {
        setIsLoader(false);
        console.log(data);
      });
  }, []);

  return (
    <Box className={classes.currencyContainer}>
      {isLoader ? (
        <Loader
          className={classes.loader}
          type="Watch"
          color="#6E78E8"
          height={50}
          width={50}
        />
      ) : (
        <TableContainer className={classes.tableContainer}>
          <Table className={classes.table} aria-label="currency table">
            <TableHead className={classes.tableHead}>
              <TableRow>
                <TableCell className={classes.tableTitle}>Валюта</TableCell>
                <TableCell className={classes.tableTitle} align="center">
                  Покупка
                </TableCell>
                <TableCell className={classes.tableTitle} align="right">
                  Продажа
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody
              style={{ paddungBottom: '20px' }}
              className={classes.tableBody}
            >
              {currencyData.map(row => (
                <TableRow key={row.ccy}>
                  <TableCell className={classes.bodyData}>{row.ccy}</TableCell>
                  <TableCell className={classes.bodyData} align="center">
                    {Number(row.buy) > 10
                      ? Number(row.buy).toFixed(2)
                      : '0' + Number(row.buy).toFixed(2)}
                  </TableCell>
                  <TableCell className={classes.bodyData} align="right">
                    {Number(row.sale) > 10
                      ? Number(row.sale).toFixed(2)
                      : '0' + Number(row.sale).toFixed(2)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <Box className={classes.linerContainer}>
            <Media
              queries={{
                small: '(max-width: 768px)',
                medium: '(min-width: 768px) and (max-width: 1280px)',
                large: '(min-width: 1280px)',
              }}
            >
              {matches => (
                <>
                  {matches.small && (
                    <GradientSvg width="280" color="none" height="100" />
                  )}
                  {matches.medium && (
                    <GradientSvg width="334" color="none" height="111" />
                  )}
                  {matches.large && (
                    <GradientSvg width="348" color="none" height="134" />
                  )}
                </>
              )}
            </Media>
          </Box>
        </TableContainer>
      )}
    </Box>
  );
};

export default Currency;
