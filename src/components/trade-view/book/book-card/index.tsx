import { Box, Typography } from "@mui/material";
import styles from "./index.module.scss";

export default function BookCard({
  type,
  price,
  size,
  total,
}: {
  type: string;
  price: number;
  size: number;
  total: number;
}) {
  return (
    <Box className={styles.bookCard}>
      <Typography className={styles.text}  color={type==="sell" ?  "red" : "green"}> {price}</Typography>
      <Typography className={styles.text}> {size}</Typography>
      <Typography className={styles.text} > {total}</Typography>
    </Box>
  );
}
