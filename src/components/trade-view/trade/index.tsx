import { Box, Typography } from "@mui/material";
import TradeCard from "./trade-card";
import styles from "./index.module.scss";
export default function TradeList() {
  const trades = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    price: 123444,
    quantity: 29084,
    time: "16:12:39",
    type: i % 3 === 0 ? "buy" : "sell",
  }));

  return (
    <>
      <Box className={styles.heading}>
        <Typography>Price (USD)</Typography>
        <Typography>Qty (BTC)</Typography>
      </Box>
      <Box className={styles.stockTradeContainer}>
        {trades.map((trade) => (
          <TradeCard
            key={trade.id}
            price={trade.price}
            quantity={trade.quantity}
            time={trade.time}
            type={trade.type}
          />
        ))}
      </Box>
    </>
  );
}
