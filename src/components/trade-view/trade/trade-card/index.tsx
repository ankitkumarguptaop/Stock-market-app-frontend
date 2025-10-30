import { Box, Typography } from "@mui/material";
import styles from "./index.module.scss";

export default function TradeCard({
  type,
  price,
  quantity,
  time,
}: {
  type: string;
  price: number;
  quantity: number;
  time: string;
}) {
  return (
    <Box className={styles.tradeCard}>
      <Typography
        className={styles.text}
        color={type === "sell" ? "red" : "green"}
      >
        {price}
      </Typography>
      <Typography className={styles.text}> {quantity}</Typography>
      <Typography className={styles.text}> {time}</Typography>
    </Box>
  );
}
